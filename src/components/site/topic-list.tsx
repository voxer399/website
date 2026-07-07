import { Check } from "lucide-react"

export function TopicList({ items }: { items: string[] }) {
  return (
    <ul className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-center gap-3.5 rounded-lg border border-hairline bg-white p-4 font-semibold text-navy transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-0.5 hover:border-rose hover:shadow-[0_10px_22px_rgba(40,48,75,0.1)]"
        >
          <span className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full bg-burgundy text-white">
            <Check className="h-3.5 w-3.5" strokeWidth={3} />
          </span>
          {item}
        </li>
      ))}
    </ul>
  )
}
