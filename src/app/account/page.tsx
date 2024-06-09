import { HeaderAccount } from "./components/HeaderAccount"
import { ForfaitCard } from "./components/ForfaitCard"
import { ForfaitCardSkeleton } from "./skeletons/ForfaitCardSkeleton"
import { Suspense } from "react"

export default function Account() {
  return (
    <>
      <main className="h-full w-full bg-zinc-300 pb-20">
        <HeaderAccount></HeaderAccount>
        <Suspense fallback={<ForfaitCardSkeleton />}>
          <ForfaitCard></ForfaitCard>
        </Suspense>
      </main>
    </>
  )
}
