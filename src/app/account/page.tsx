import { ForfaitCard } from "./ForfaitCard"
import { HeaderAccount } from "./HeaderAccount"

export default function Account() {
  return (
    <div className="h-full w-full bg-zinc-300 pb-20">
      <HeaderAccount></HeaderAccount>
      <ForfaitCard></ForfaitCard>
    </div>
  )
}
