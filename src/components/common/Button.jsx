import React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-warmOrange text-white hover:bg-terracotta focus-visible:ring-warmOrange",
        secondary: "border-2 border-deepNavy text-deepNavy hover:bg-deepNavy hover:text-white focus-visible:ring-deepNavy",
        tertiary: "text-deepNavy hover:text-warmOrange focus-visible:ring-warmOrange",
        navy: "bg-deepNavy text-white hover:bg-royalNavy focus-visible:ring-deepNavy",
        gold: "bg-antiqueGold text-white hover:bg-lightGold focus-visible:ring-antiqueGold",
      },
      size: {
        sm: "h-9 px-4 text-xs",
        md: "h-10 px-6 text-sm",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button, buttonVariants }