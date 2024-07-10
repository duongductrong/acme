import { cva, VariantProps } from "class-variance-authority"

export const inputVariants = cva(
  [
    "border border-input",
    "focus-visible:border-ring/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/10",
    "focus:border-ring/90 focus:outline-none focus:ring-2 focus:ring-ring/10",

    "flex w-full rounded-md",
    "bg-transparent px-3 py-1 text-sm transition-colors",
    "placeholder:text-muted-foreground",
    "disabled:cursor-not-allowed disabled:opacity-50",
  ],
  {
    variants: {
      withTrigger: {
        true: [
          "data-[state=open]:border-ring/90",
          "data-[state=open]:outline-none data-[state=open]:ring-2 data-[state=open]:ring-ring/10",
        ],
      },
      size: {
        default: "h-8",
        lg: "h-9",
      },
      shadow: {
        true: "shadow-sm",
      },
    },

    defaultVariants: {
      size: "default",
      shadow: false,
    },
  },
)

export type InputVariantsProps = VariantProps<typeof inputVariants>
