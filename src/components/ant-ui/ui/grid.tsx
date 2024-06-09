"use client"

import { ForwardRefComponent } from "@/types/react-polymorphic"
import ColPrimitive, { ColProps } from "antd/es/col"
import RowPrimitive, { RowProps } from "antd/es/row"
import { forwardRef } from "react"

export const Row = forwardRef(({ ...props }, ref) => (
  <RowPrimitive {...props} ref={ref} />
)) as ForwardRefComponent<"div", RowProps>

Row.displayName = "Row"

export const Col = forwardRef(({ ...props }, ref) => (
  <ColPrimitive {...props} ref={ref} />
)) as ForwardRefComponent<"div", ColProps>

Col.displayName = "Col"
