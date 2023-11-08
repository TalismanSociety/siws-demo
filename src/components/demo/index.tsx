import { useState } from "react"
import { InjectedAccountWithMeta } from "@polkadot/extension-inject/types"
import { ConnectWallet } from "./ConnectWallet"
import { Accounts } from "./Accounts"

export const Demo = () => {
  const [accounts, setAccounts] = useState<InjectedAccountWithMeta[] | undefined>()

  return (
    <div className="w-full">
      <div className="border-slate-200 border p-4 rounded-xl w-full h-96 flex flex-col flex-1">
        {accounts ? (
          <Accounts accounts={accounts} onCancel={() => setAccounts(undefined)} />
        ) : (
          <ConnectWallet onAccounts={setAccounts} />
        )}
      </div>
    </div>
  )
}
