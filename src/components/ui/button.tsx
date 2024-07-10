import * as React from "react"
import { tv, VariantProps } from "tailwind-variants"

import { cn } from "@/lib/tailwind"
import { ForwardRefComponent } from "@/types/react-polymorphic"

const buttonVariants = tv(
  {
    base: [
      "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium",
      "transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
    ],
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-8 px-4 py-2",
        sm: "h-7 rounded-md px-3 text-xs",
        lg: "h-9 rounded-md px-8",
        icon: "h-8 w-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
  { responsiveVariants: true },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  icon?: React.ReactNode
}

const Button = React.forwardRef(
  ({ component: Comp = "button", className, variant, size, children, icon, ...props }, ref) => {
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
        {icon}
        {children}
      </Comp>
    )
  },
) as ForwardRefComponent<"button", ButtonProps>
Button.displayName = "Button"

export { Button, buttonVariants }
