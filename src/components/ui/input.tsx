import * as React from "react"

import { cn } from "@/lib/tailwind"
import { cva, VariantProps } from "class-variance-authority"
import { inputVariants, InputVariantsProps } from "./styles/input"

export const inputCustomVariants = cva([
  "file:border-0 file:bg-transparent file:text-sm file:font-medium",
])

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    InputVariantsProps,
    VariantProps<typeof inputCustomVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, size, shadow, ...props }, ref) => {
    return (
      <input
        {...props}
        type={type}
        className={cn(inputVariants({ shadow, size }), inputCustomVariants({ className }))}
        ref={ref}
      />
    )
  },
)
Input.displayName = "Input"

export { Input }
