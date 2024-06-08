"use client"

import TablePrimitive, { TableProps as TablePrimitiveProps } from "antd/es/table"
import { ElementRef, forwardRef } from "react"

export interface TableProps<T> extends TablePrimitiveProps<T> {}

export const Table = forwardRef<ElementRef<typeof TablePrimitive>, TableProps<any>>(
  ({ ...props }, ref) => <TablePrimitive size="middle" {...props} ref={ref} />,
)

Table.displayName = "Table"
