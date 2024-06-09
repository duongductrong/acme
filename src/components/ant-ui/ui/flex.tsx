"use client"

import { ForwardRefComponent } from "@/types/react-polymorphic"
import FlexPrimitive from "antd/es/flex"
import { FlexProps as FlexPrimitiveProps } from "antd/es/flex/interface"
import { forwardRef } from "react"

export interface FlexProps extends FlexPrimitiveProps {}

export const Flex = forwardRef(({ component: Comp = "div", ...props }, ref) => (
  <FlexPrimitive {...props} component={Comp} ref={ref} />
)) as ForwardRefComponent<"div", FlexProps>

Flex.displayName = "Flex"
