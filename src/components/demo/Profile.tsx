import truncateMiddle from "truncate-middle"
import { InjectedAccountWithMeta } from "@polkadot/extension-inject/types"
import Identicon from "@polkadot/react-identicon"
import { ExitIcon } from "@radix-ui/react-icons"
import { useProtectedService } from "../../hooks/useProtectedService"
import { Button } from "../ui/button"
import { Skeleton } from "../ui/skeleton"

type Props = {
  account: InjectedAccountWithMeta
  jwtToken: string
  onSignOut: () => void
}
export const Profile: React.FC<Props> = ({ account, jwtToken, onSignOut }) => {
  const { randomText, loading, generate } = useProtectedService()
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Identicon value={account.address} size={32} theme="polkadot" />
          <div className="flex flex-col">
            <div className="text-white text-base">{account.meta.name}</div>
            <div className="text-stone-500 text-xs">
              {truncateMiddle(account.address, 5, 5, "...")}
            </div>
          </div>
        </div>
        <Button variant="outline" size="icon" onClick={onSignOut}>
          <ExitIcon />
        </Button>
      </div>
      <p className="text-stone-500 mt-4 text-sm">
        You are signed in with your Polkadot account and can use our protected API to generate
        random text!
      </p>
      <div className="p-4 bg-stone-900 rounded-md my-4 text-stone-200 flex items-center justify-center">
        {loading ? (
          <Skeleton className="w-44 h-6" />
        ) : (
          <p className="text-center select-text">
            {randomText ?? <span className="text-center text-gray-500">...</span>}
          </p>
        )}
      </div>
      <div className="grid gap-3">
        <Button onClick={() => generate(jwtToken)}>Generate Random Text</Button>
        <Button onClick={() => generate()} variant="outline">
          Generate as Anonymous User
        </Button>
        <p className="text-stone-500 text-center text-xs">
          Generate as Anonymous User to see how the API is protected by SIWS.
        </p>
      </div>
    </div>
  )
}
