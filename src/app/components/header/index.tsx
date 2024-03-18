import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { cookies } from "next/headers"
import Link from "next/link"

export function Header() {
  // Recuperar o token de autenticação diretamente

  const tokenAuthentication = cookies().get("@VaBeauty:token")

  return (
    <div className="relative h-full w-full">
      <div className="sticky  top-0 z-[1000] h-[4rem] w-full border-b border-b-zinc-800 bg-zinc-950 lg:h-[5rem]">
        <div className="absolute inset-0 flex  items-center px-[1.5rem] lg:justify-center xl:px-0">
          <Link
            href="/"
            className="font-400 z-[30] font-sans text-3xl text-zinc-100 lg:text-center lg:text-4xl"
          >
            VA BEAUTY
          </Link>
        </div>
        <div className="hidden h-full w-full lg:block">
          <div className=" mx-auto flex h-full w-full justify-between lg:max-w-[1216px] lg:px-8 lg:text-lg xl:max-w-[1256px] xl:px-0">
            <nav className="z-20 flex h-full w-full items-center gap-8 text-zinc-100">
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
            <nav className="z-20 flex h-full items-center gap-8 text-zinc-100">
              {tokenAuthentication ? (
                <Link href="/sign-in" className="whitespace-nowrap	">
                  Espace Client
                </Link>
              ) : (
                <Link className="pointer" href="/sign-in">
                  Connecter
                </Link>
              )}
              <ShoppingCart
                width={30}
                height={30}
                className="text-zinc-100"
              ></ShoppingCart>

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
        </div>
      </div>
    </div>
  )
}
