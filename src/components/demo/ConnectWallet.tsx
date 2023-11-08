import dynamic from "next/dynamic"

import { InjectedAccountWithMeta } from "@polkadot/extension-inject/types"
import { useState } from "react"
import { Button } from "@/components/ui/button"

type Props = {
  onAccounts: (accounts: InjectedAccountWithMeta[]) => void
}
export const ConnectWallet: React.FC<Props> = ({ onAccounts }) => {
  const [connecting, setConnecting] = useState(false)

  const handleConnectWallet = async () => {
    setConnecting(true)
    const { web3Enable, web3Accounts } = await import("@polkadot/extension-dapp")
    try {
      const extensions = await web3Enable("Sign-In with Substrate Demo")

      if (extensions.length === 0) {
        onAccounts([])
      } else {
        const accounts = await web3Accounts()
        onAccounts(accounts)
      }
    } catch (e) {
    } finally {
      setConnecting(false)
    }
  }

  return (
    <div className="flex flex-col">
      <p className="text-white text-lg">Connect Wallet</p>
      <p className="text-slate-400 mb-4">Connect your wallet to sign in.</p>
      <Button onClick={handleConnectWallet} disabled={connecting}>
        {connecting ? "Connecting wallet..." : "Connect Wallet"}
      </Button>
    </div>
  )
}
