import { Button } from "@/components/ui/button"
import Link from "next/link"

export default async function NotFound() {
  return (
    <div className="lg-[px-0] flex h-[calc(100vh-4rem)] w-full flex-col items-center justify-center gap-10 px-[1.5rem] pb-[30%] text-zinc-50 lg:h-[calc(100vh-5rem)] lg:pb-20">
      <h1 className="text-8xl ">404</h1>
      <p className="text-lg">Impossible de trouver la ressource demandée.</p>
      <Link href="/">
        <Button variant="secondary">Retour à l'accueil</Button>
      </Link>
    </div>
  )
}
