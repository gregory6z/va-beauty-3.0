import Link from "next/link"
import { Button } from "@/components/ui/button"
import NavLink from "./nav-link"

export function NavBar() {
  // const tokenAuthentication = cookies().get("@VaBeauty:token")?.value

  return (
    <div className=" mt-20 flex h-full w-full flex-col text-xl   lg:mx-auto lg:mt-0 lg:max-w-[1216px] lg:flex-row lg:justify-between lg:px-8 lg:text-lg xl:max-w-[1256px] xl:px-0">
      <nav className="z-20 flex h-full w-full flex-1 flex-col items-center gap-2 text-zinc-100  lg:flex-row xl:gap-6">
        <NavLink className="  " href="/">
          <span className="">Accueil</span>
        </NavLink>
        <NavLink className="pointer" href="/sourcils">
          <span>Sourcils</span>
        </NavLink>
        <NavLink className="pointer" href="/levres">
          <span>Levres</span>
        </NavLink>
        <NavLink className="pointer" href="/forfaits">
          <span>Forfaits</span>
        </NavLink>
      </nav>
      <nav className="z-20 mt-20 flex h-full  items-center text-zinc-100 lg:mt-0 xl:flex-row xl:gap-6">
        {/* {tokenAuthentication ? (
          <NavLink href="/account" className="whitespace-nowrap	">
            <span>Mon Espace</span>
          </NavLink>
        ) : (
          <Link className="pointer" href="/sign-in">
            Connecter
          </Link>
        )} */}

        <NavLink href="/blog" className="whitespace-nowrap	">
          <span>Galerie</span>
        </NavLink>

        <NavLink href="/blog" className="mr-4 whitespace-nowrap	">
          <span>Blog</span>
        </NavLink>

        <Button
          asChild
          className="min-h-[3rem] bg-zinc-900 px-10 text-lg hover:bg-zinc-800"
        >
          <Link className=" border  border-zinc-100 py-2" href="#">
            Rendez-vous
          </Link>
        </Button>
      </nav>
    </div>
  )
}
