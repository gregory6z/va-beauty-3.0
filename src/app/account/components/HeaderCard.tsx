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
    <div className="flex h-full   cursor-pointer gap-6 bg-white p-4 hover:bg-zinc-100 lg:min-h-[212px] lg:min-w-[400px] lg:p-6 ">
      <IconComponent className="h-[100px] w-[100px] font-normal"></IconComponent>
      <div className=" flex h-full flex-col gap-4 lg:mt-2">
        <h1 className="text-2xl font-semibold lg:text-3xl">{title}</h1>
        <p className="text-pretty text-sm text-zinc-900/60 lg:text-base  ">
          {description}
        </p>
        <p className="text:lg font-bold underline">{buttonUnderline}</p>
      </div>
    </div>
  )
}
