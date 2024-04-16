import { cookies } from "next/headers"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function NavBar() {
  const tokenAuthentication = cookies().get("@VaBeauty:token")?.value

  return (
    <div className=" mt-20 flex h-full w-full flex-col justify-between  text-xl lg:mx-auto lg:mt-0 lg:max-w-[1216px] lg:flex-row lg:px-8 lg:text-lg xl:max-w-[1256px] xl:px-0">
      <nav className="z-20 flex h-full w-full flex-col items-center gap-8  text-zinc-100 lg:flex-row">
        <Link className="pointer" href="/">
          Accueil
        </Link>
        <Link className="pointer" href="/sourcils">
          Sourcils
        </Link>
        <Link className="pointer" href="/levres">
          Levres
        </Link>
        <Link className="pointer" href="/forfaits">
          Forfaits
        </Link>
      </nav>
      <nav className="z-20 flex h-full flex-col items-center gap-8 text-zinc-100 lg:flex-row">
        {tokenAuthentication ? (
          <Link href="/account" className="whitespace-nowrap	">
            Mon Espace
          </Link>
        ) : (
          <Link className="pointer" href="/sign-in">
            Connecter
          </Link>
        )}

        <Button
          asChild
          className="min-h-[3rem] bg-zinc-900 px-10 text-lg hover:bg-zinc-800"
        >
          <Link
            className=" border  border-zinc-100 py-2"
            href="/appointment/choose-service"
          >
            Rendez-vous
          </Link>
        </Button>
      </nav>
    </div>
  )
}
