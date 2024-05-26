import { FaqAccordion } from "./faq-accordeon"

export function Faq() {
  return (
    <div className="h-full w-full bg-zinc-900 text-zinc-50">
      <div className="mx-auto flex max-w-[1216px]  flex-col py-[4rem] lg:flex-row lg:gap-[6.5rem] lg:py-0">
        <div className="px-[1.5rem] lg:mt-[7rem] lg:max-w-[40%]  lg:px-0">
          <h1>FAQ</h1>
          <h1 className=" mt-2 text-2xl tracking-tight lg:text-4xl">
            Questions et réponses les plus fréquentes
          </h1>
        </div>
        <FaqAccordion />
      </div>
    </div>
  )
}
