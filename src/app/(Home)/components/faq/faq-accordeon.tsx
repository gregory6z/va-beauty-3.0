import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import faqData from "./faq.json"

export function FaqAccordion() {
  return (
    <Accordion
      type="multiple"
      className="w-full px-[1.5rem] lg:mb-[4rem] lg:mt-[6rem]  lg:py-0"
    >
      {faqData.faq.map((faq) => (
        <AccordionItem
          key={faq.number}
          value={`item-${faq.number}`}
          className="border-b-0 border-t border-zinc-600 py-1  font-normal hover:text-zinc-50 "
        >
          <AccordionTrigger className="group items-start gap-2 text-base text-zinc-300 transition-colors duration-200">
            <p className="mr-10 block text-pretty text-2xl lg:hidden">
              {faq.number}.
            </p>
            <p className="w-full text-left text-lg font-[300] tracking-tight transition-colors duration-200 group-hover:text-gray-50">
              <span className="mr-4 hidden text-2xl text-zinc-500 transition-colors duration-200 group-hover:text-gray-50 lg:inline">
                {faq.number}.
              </span>{" "}
              {faq.question}
            </p>
          </AccordionTrigger>
          <AccordionContent className="py-6 text-lg text-zinc-400">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
