"use client"

import { ForwardRefComponent } from "@/types/react-polymorphic"
import { Flex } from "antd"
import { ComponentPropsWithoutRef, forwardRef } from "react"

export interface PageProps extends ComponentPropsWithoutRef<typeof Flex> {}

export const Page = forwardRef(({ component = "div", ...props }, ref) => {
  return <Flex {...props} component={component} ref={ref} vertical />
}) as ForwardRefComponent<"div", PageProps>

Page.displayName = "Page"
