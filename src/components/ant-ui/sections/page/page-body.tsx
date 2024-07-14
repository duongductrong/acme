"use client"
import { cn } from "@/lib/tailwind"
import { ForwardRefComponent } from "@/types/react-polymorphic"
import { forwardRef, ReactNode } from "react"
import { tv, VariantProps } from "tailwind-variants"
import { usePageContext } from "./use-page-context"

const pageBodyVariants = tv({
  base: "p-gap",
  variants: {
    variant: {
      container: "m-auto w-full max-w-[var(--page-body-width)]",
      fluid: "w-full max-w-full",
    },
    impact: { true: "p-0" },
    inPage: {
      true: "max-h-[calc(100lvh-var(--page-item-header)-var(--page-item-footer))] overflow-auto",
    },
    fluidVertical: {
      true: "min-[100lvh] h-auto",
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
