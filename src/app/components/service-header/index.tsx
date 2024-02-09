interface ServiceHeaderProps {
  category: "Sourcils" | "Levrés" | "Forfaits"
  text: string
}

export function ServiceHeader({ category, text }: ServiceHeaderProps) {
  return (
    <div className="flex w-full lg:mx-auto lg:max-w-[1216px] xl:max-w-[1256px] ">
      <header className="mb-20 flex w-full flex-col justify-between lg:mt-20 lg:flex-row">
        <h1 className="text-3xl text-gray-dark-primary/90">{category}</h1>
        <p className="text-gray-dark-primary/60">{text}</p>
      </header>
    </div>
  )
}
