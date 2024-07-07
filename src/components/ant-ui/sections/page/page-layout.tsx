"use client"

import { ForwardRefComponent } from "@/types/react-polymorphic"
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react"
import { Flex } from "../../ui/flex"

export interface PageLayoutProps extends ComponentPropsWithoutRef<typeof Flex> {}

export const PageLayout = forwardRef<ElementRef<"div">, PageLayoutProps>(
  ({ component: Comp = "div", ...props }, ref) => {
    return <Comp {...props} className="flex" ref={ref} />
  },
) as ForwardRefComponent<"div", PageLayoutProps>

PageLayout.displayName = "PageLayout"
