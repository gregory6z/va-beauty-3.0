interface HeaderCardProps {
  IconComponent: React.ElementType
  title: string
  description: string
  buttonUnderline: string
}

export function HeaderCard({
  IconComponent,
  title,
  description,
  buttonUnderline,
}: HeaderCardProps) {
  return (
    <div className="flex h-full   cursor-pointer gap-6 bg-white p-4 hover:bg-zinc-100 lg:min-h-[230px] lg:min-w-[400px] lg:p-6 xl:min-w-[540px]">
      <IconComponent className="h-[100px] w-[100px]"></IconComponent>
      <div className="flex flex-col gap-4">
        <h1 className="text-lg font-semibold lg:text-4xl">{title}</h1>
        <p className="text-sm text-zinc-900/60 lg:text-lg ">{description}</p>
        <p className="text:lg font-bold underline">{buttonUnderline}</p>
      </div>
    </div>
  )
}
