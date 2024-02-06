export function Header() {
  return (
    <div className="relative h-[4rem] w-full bg-neutral-900  lg:h-[5rem]">
      <div className="absolute flex h-full w-full items-center px-[1.5rem] lg:justify-center xl:px-0">
        <p className=" font-serif text-3xl text-gray-light-primary lg:text-center  lg:text-4xl">
          VA BEAUTY
        </p>
      </div>
      <div className=" hidden h-full w-full lg:block">
        <div className=" mx-auto flex h-full w-full justify-between lg:max-w-[1216px] lg:px-8  lg:text-lg xl:max-w-[1256px]">
          <nav className=" flex h-full w-full items-center gap-10 text-gray-light-primary">
            <p>Sourcils</p>
            <p>Levres</p>
            <p>Forfaits</p>
          </nav>
          <nav className=" flex h-full items-center gap-10 text-gray-light-primary">
            <p>Login</p>
            <button className="border border-gray-light-primary px-16 py-2">
              s'inscrire
            </button>
          </nav>
        </div>
      </div>
    </div>
  )
}
