import { InjectedAccountWithMeta } from "@polkadot/extension-inject/types"
import Identicon from "@polkadot/react-identicon"
import truncateMiddle from "truncate-middle"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import clsx from "clsx"
import { SiwsMessage } from "../../siws/SiwsMessage"
import { Address } from "../../siws/utils"
import { useToast } from "../ui/use-toast"
type Props = {
  accounts: InjectedAccountWithMeta[]
  onCancel: () => void
}

const Account: React.FC<{
  onSelect: () => void
  account: InjectedAccountWithMeta
  selected: boolean
}> = ({ account, selected, onSelect }) => (
  <div
    key={account.address}
    onClick={onSelect}
    className={clsx(
      "border cursor-pointer px-2 py-1 rounded-lg flex items-center justify-between pr-4",
      selected ? "border-stone-400" : "border-stone-50/0 hover:bg-stone-800/50"
    )}
  >
    <div className="flex items-center gap-4">
      <Identicon value={account.address} size={32} theme="polkadot" />
      <div className="flex flex-col">
        <div className="text-white text-base">{account.meta.name}</div>
        <div className="text-stone-500 text-xs">{truncateMiddle(account.address, 5, 5, "...")}</div>
      </div>
    </div>
    <div className={clsx("h-2 w-2 rounded-full", selected ? "bg-stone-200" : "bg-stone-800")} />
  </div>
)

export const Accounts: React.FC<Props> = ({ accounts, onCancel }) => {
  const { toast } = useToast()
  // auto select if only 1 account is connected
  const [selectedAccount, setSelectedAccount] = useState<InjectedAccountWithMeta | undefined>(
    accounts.length === 0 ? accounts[0] : undefined
  )
  const [signingIn, setSigningIn] = useState(false)

  const handleSignIn = async () => {
    if (!selectedAccount) return

    const address = Address.fromSs58(selectedAccount.address ?? "")
    if (!address)
      return toast({
        title: "Invalid address",
        description: "Your address is not a valid Substrate address.",
      })
    try {
      setSigningIn(true)
      const nonceRes = await fetch("/api/nonce")
      const data = await nonceRes.json()
      const { nonce } = data

      const siwsMessage = new SiwsMessage({
        domain: "SIWS Example App",
        uri: "siws.talisman.xyz",
        // use prefix of chain your dapp is on:
        address: address.toSs58(0),
        nonce,
        statement: "Welcome to SIWS! Sign in to see how it works.",
        chainName: "Polkadot",
      })

      const signature = await siwsMessage.sign(selectedAccount.meta.source)

      await fetch("/api/verify")
    } catch (e: any) {
      toast(e?.message ?? "An error occurred")
    } finally {
      setSigningIn(false)
    }
  }

  return (
    <div className="h-full flex flex-1 flex-col">
      <p className="text-white text-lg">Sign In</p>
      <p className="text-stone-500">Select an account to sign in with.</p>
      <div className="my-4 flex flex-col h-full overflow-y-auto gap-3 p-2 rounded-lg border border-stone-800">
        {accounts.length > 0 ? (
          accounts.map((account) => (
            <Account
              key={account.address}
              account={account}
              selected={selectedAccount?.address === account.address}
              onSelect={() => setSelectedAccount(account)}
            />
          ))
        ) : (
          <p className="text-stone-500 text-center mt-4">
            No account connected.
            <br />
            Connect at least 1 account to sign in with.
          </p>
        )}
      </div>
      <div className="grid gap-3">
        <Button disabled={!selectedAccount || signingIn} onClick={handleSignIn}>
          {signingIn ? "Signing In..." : "Sign In"}
        </Button>
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </div>
  )
}
