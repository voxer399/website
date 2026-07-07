import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { motion } from "motion/react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-full text-[1.05rem] font-bold ring-offset-background transition-[background-color,color,box-shadow] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 min-h-12 px-7 py-3.5 border-2 border-transparent after:pointer-events-none after:absolute after:inset-0 after:-translate-x-full after:bg-gradient-to-r after:from-transparent after:via-white/30 after:to-transparent after:transition-transform after:duration-700 after:ease-out after:content-[''] hover:after:translate-x-full",
  {
    variants: {
      variant: {
        primary:
          "bg-burgundy text-white hover:bg-burgundy-dark hover:shadow-[0_12px_28px_color-mix(in_srgb,var(--color-burgundy)_45%,transparent)]",
        outline:
          "bg-transparent border-navy text-navy hover:bg-navy-deep hover:text-white hover:shadow-[0_10px_24px_rgba(40,48,75,0.16)]",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
)

const MotionSlot = motion.create(Slot)

export interface ButtonProps
  extends Omit<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      "onAnimationStart" | "onAnimationEnd" | "onAnimationIteration" | "onDrag" | "onDragStart" | "onDragEnd"
    >,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const MotionComp = asChild ? MotionSlot : motion.button
    return (
      <MotionComp
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        whileHover={{ y: -3, scale: 1.03 }}
        whileTap={{ y: 0, scale: 0.96 }}
        transition={{ type: "spring", stiffness: 450, damping: 25 }}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
