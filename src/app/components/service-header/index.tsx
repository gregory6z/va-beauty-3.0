interface ServiceHeaderProps {
  category: "Sourcils" | "Levrés" | "Forfaits"
  text: string
}

export function ServiceHeader({ category, text }: ServiceHeaderProps) {
  return (
    <div className="mb-4  mt-6 flex w-full px-[1.5rem] sm:mx-auto sm:max-w-[600px] lg:mx-auto lg:mb-0 lg:mt-0 lg:max-w-[1216px] lg:px-0 xl:max-w-[1256px] ">
      <header className="flex w-full flex-col justify-between lg:mb-20 lg:mt-20 lg:flex-row">
        <h1 className="text-3xl capitalize text-gray-dark-primary/90">
          {category}
        </h1>
        <p className="text-gray-dark-primary/60">{text}</p>
      </header>
    </div>
  )
}
