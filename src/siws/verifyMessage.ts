import { cryptoWaitReady, signatureVerify } from "@polkadot/util-crypto"

/**
 * A util function that verifies that the `message` is signed by the `address` and matches the `signature`.
 * It wraps `await cryptoWaitReady` so you don't have to.
 */
export const verifySIWS = async (message: string, signature: string, address: string) => {
  await cryptoWaitReady()
  const verification = signatureVerify(message, signature, address)
  return verification
}
