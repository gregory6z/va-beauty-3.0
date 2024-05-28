import Link from "next/link"
import { DrawerMenu } from "./drawer-menu"
import { NavBar } from "./nav-bar"
import { HeaderProvider } from "./scroll"

export function Header() {
  return (
    <HeaderProvider>
      <div className="relative h-full w-full">
        <div className="sticky  top-0 z-[30] h-[4rem] w-full border-b border-b-zinc-800 bg-zinc-950 lg:h-[6rem]">
          <div className="absolute inset-0 flex  items-center px-[1.5rem] lg:justify-center xl:px-0">
            <Link
              href="/"
              className="font-400 z-[30] font-sans text-3xl font-[500] text-zinc-100 lg:text-center lg:text-4xl"
            >
              VA BEAUTY
            </Link>
          </div>

          <div className=" absolute flex h-full w-full items-center justify-end pr-2  lg:hidden ">
            <DrawerMenu>
              <NavBar />
            </DrawerMenu>
          </div>

          <div className="hidden h-full w-full lg:block">
            <NavBar />
          </div>
        </div>
      </div>
    </HeaderProvider>
  )
}
