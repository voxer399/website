import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-[1.05rem] font-bold ring-offset-background transition-[background-color,color,transform,box-shadow] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 min-h-12 px-7 py-3.5 border-2 border-transparent hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(40,48,75,0.16)]",
  {
    variants: {
      variant: {
        primary: "bg-burgundy text-white hover:bg-burgundy-dark",
        outline: "bg-transparent border-navy text-navy hover:bg-navy hover:text-white",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
