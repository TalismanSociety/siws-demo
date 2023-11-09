import { Address } from "./utils"

export class SiwsMessage {
  /**RFC 4501 dns authority that is requesting the signing. */
  domain: string
  /**Substrate address signing the message. */
  address: string
  /**Human-readable ASCII assertion that the user will sign, and it must not contain `\n`. */
  statement?: string
  /**RFC 3986 URI referring to the resource that is the subject of the signing. */
  uri: string
  /**Randomized token used to prevent replay attacks. */
  nonce: string
  /**Will appear as `sign in with your {{chainName}} account:` */
  chainName?: string
  /**System-specific identifier for  */
  chainId?: number
  /**timestamp that indicates when the signed authentication message is no longer valid. */
  expirationTime?: number
  /**ISO 8601 datetime string of the current time. */
  issuedAt?: number

  constructor(param: Omit<SiwsMessage, "prepareJson" | "asJson" | "prepareMessage" | "sign">) {
    this.domain = param.domain
    this.address = param.address
    this.statement = param.statement
    this.uri = param.uri
    this.nonce = param.nonce
    this.chainId = param.chainId
    this.chainName = param.chainName
    this.expirationTime = param.expirationTime
    this.issuedAt = param.issuedAt

    this.validateMessage()
  }

  get asJson() {
    return {
      domain: this.domain,
      address: this.address,
      statement: this.statement,
      uri: this.uri,
      nonce: this.nonce,
      chainId: this.chainId,
      issuedAt: this.issuedAt,
      expirationTime: this.expirationTime,
    }
  }

  prepareJson(): string {
    this.validateMessage()

    return JSON.stringify(this.asJson, undefined, 2)
  }

  prepareMessage(): string {
    this.validateMessage()

    let message = `${this.domain} wants you to sign in with your ${
      this.chainName ?? "Substrate"
    } account:\n`
    message += `${this.address}\n\n`

    if (this.statement) {
      message += `${this.statement}\n\n`
    }

    const uriField = `URI: ${this.uri}`
    const body = [uriField]

    if (this.chainId) body.push(`Chain ID: ${this.chainId}`)

    body.push(`Nonce: ${this.nonce}`)

    this.issuedAt = this.issuedAt ?? new Date().getTime()
    body.push(`Issued At: ${new Date(this.issuedAt).toISOString()}`)

    if (this.expirationTime) {
      body.push(`Expiration Time: ${new Date(this.expirationTime).toISOString()}`)
    }

    message += body.join("\n")

    return message
  }

  /**
   * Utility function that wraps @polkadotjs api.
   * @param source You can get this from injectedAccount.meta.source
   * */
  async sign(source: string): Promise<{ signature: string; message: string }> {
    const { web3FromSource } = await import("@polkadot/extension-dapp")
    const injector = await web3FromSource(source)
    if (!injector.signer.signRaw) throw new Error("Wallet does not support signing message.")

    const message = this.prepareMessage()
    const { signature } = await injector.signer.signRaw({
      address: this.address,
      data: this.prepareMessage(),
      type: "payload",
    })

    return { signature, message }
  }

  private validateMessage() {
    if (!this.domain || this.domain.length === 0) throw new Error("SIWS Error: domain is required")

    const address = Address.fromSs58(this.address)
    if (!address) throw new Error("SIWS Error: address is not a valid substrate address")

    if (!this.uri || this.uri.length === 0) throw new Error("SIWS Error: uri is required")

    if (!this.nonce || this.nonce.length === 0) throw new Error("SIWS Error: nonce is required")

    if (this.issuedAt) {
      const issuedAtDate = new Date(this.issuedAt)
      if (isNaN(issuedAtDate.getTime())) throw new Error("SIWS Error: issuedAt is not a valid date")
    }

    if (this.expirationTime) {
      const expirationTimeDate = new Date(this.expirationTime)
      if (isNaN(expirationTimeDate.getTime()))
        throw new Error("SIWS Error: expirationTime is not a valid date")
      if (this.issuedAt && expirationTimeDate.getTime() <= new Date(this.issuedAt).getTime())
        throw new Error("SIWS Error: expirationTime must be greater than issuedAt")
      if (expirationTimeDate.getTime() <= new Date().getTime())
        throw new Error("SIWS Error: message has expired!")
    }
  }
}
