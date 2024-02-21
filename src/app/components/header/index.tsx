import Link from "next/link"

export function Header() {
  return (
    <div className="relative h-full w-full">
      <div className="sticky  top-0 z-[1000] h-[4rem] w-full bg-neutral-900 lg:h-[5rem]">
        <div className="absolute inset-0 flex   items-center px-[1.5rem] lg:justify-center xl:px-0">
          <Link
            href="/"
            className="z-[30] text-3xl text-gray-light-primary lg:text-center lg:text-4xl"
          >
            VA BEAUTY
          </Link>
        </div>
        <div className="hidden h-full w-full lg:block">
          <div className=" mx-auto flex h-full w-full justify-between lg:max-w-[1216px] lg:px-8 lg:text-lg xl:max-w-[1256px] xl:px-0">
            <div className="z-20 flex h-full w-full items-center gap-8 text-gray-light-primary">
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
            </div>
            <nav className="z-20 flex h-full items-center gap-8 text-gray-light-primary">
              <Link className="pointer" href="/login">
                Login
              </Link>
              <Link
                className="border border-gray-light-primary px-16 py-2"
                href="/sign-in"
              >
                s'inscrire
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}
