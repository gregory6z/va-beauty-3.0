// eslint-disable-next-line no-use-before-define
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground  shadow hover:bg-primary/90 disabled:bg-primary disabled:cursor-not-allowed",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 disabled:bg-destructive disabled:cursor-not-allowed",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground disabled:bg-background disabled:cursor-not-allowed",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 disabled:bg-secondary disabled:cursor-not-allowed",
        ghost:
          "hover:bg-accent hover:text-accent-foreground disabled:bg-transparent disabled:cursor-not-allowed",
        link: "text-primary underline-offset-4 hover:underline disabled:text-primary disabled:cursor-not-allowed",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8  px-3 text-xs",
        lg: "h-10  px-8",
        xl: "lg:h-14 h-12 px-10  lg:px-12 text-lg",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
