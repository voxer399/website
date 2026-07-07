import type { ReactNode } from "react"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

interface FaqItem {
  question: string
  answer: ReactNode
}

export function FaqSection({ items }: { items: FaqItem[] }) {
  return (
    <Accordion type="single" collapsible className="mx-auto w-full max-w-[780px]">
      {items.map((item, i) => (
        <AccordionItem key={i} value={`item-${i}`}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
