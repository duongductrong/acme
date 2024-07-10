"use client"
import { cn } from "@/lib/tailwind"
import { ForwardRefComponent } from "@/types/react-polymorphic"
import { forwardRef } from "react"
import { Flex, FlexProps } from "../../ui/flex"

export interface PageFooterProps extends FlexProps {}

export const PageFooter = forwardRef(({ children, className, ...props }, ref) => {
  return (
    <Flex {...props} className={cn("h-12 w-full", className)} ref={ref}>
      {children}
    </Flex>
  )
}) as ForwardRefComponent<"div", PageFooterProps>

PageFooter.displayName = "PageFooter"
