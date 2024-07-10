"use client"
import { cn } from "@/lib/tailwind"
import { ForwardRefComponent } from "@/types/react-polymorphic"
import { cva, VariantProps } from "class-variance-authority"
import { forwardRef, ReactNode } from "react"
import { usePageContext } from "./use-page-context"

const pageBodyVariants = cva(["p-gap"], {
  variants: {
    variant: {
      container: "max-w-[var(--page-body-width)] m-auto w-full",
      fluid: "w-full max-w-full",
    },
    impact: { true: "p-0" },
    inPage: {
      true: "max-h-[calc(100lvh-var(--page-item-header)-var(--page-item-footer))] overflow-auto",
    },
    fluidVertical: {
      true: "h-auto min-[100lvh]",
      false: "h-[calc(100lvh - var(--page-item-header))]",
    },
  },
  defaultVariants: {
    variant: "fluid",
  },
})

export type PageBodyVariantsProps = VariantProps<typeof pageBodyVariants>

export interface PageBodyProps extends Omit<PageBodyVariantsProps, "fluidVertical"> {
  children: ReactNode
}

export const PageBody = forwardRef(
  (
    {
      children,
      className,
      component: Comp = "section",
      impact,
      inPage,
      variant = "fluid",
      ...props
    },
    ref,
  ) => {
    const { noPageHeader } = usePageContext()

    return (
      <Comp
        {...props}
        ref={ref}
        className={cn(
          pageBodyVariants({ variant, inPage, impact, fluidVertical: noPageHeader }),
          className,
        )}
      >
        {children}
      </Comp>
    )
  },
) as ForwardRefComponent<"section", PageBodyProps>

PageBody.displayName = "PageBody"
