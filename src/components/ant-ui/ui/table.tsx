"use client"

import { createStyles } from "antd-style"
import TablePrimitive, { TableProps as TablePrimitiveProps } from "antd/lib/table"
import { ElementRef, forwardRef } from "react"
import { getDimensionToken } from "./utils"

export interface TableProps<T> extends TablePrimitiveProps<T> {
  impact?: boolean
}

export const Table = forwardRef<ElementRef<typeof TablePrimitive>, TableProps<any>>(
  ({ className, impact, ...props }, ref) => {
    const { cx, styles } = useStyles()
    return (
      <TablePrimitive
        size="middle"
        {...props}
        className={cx(styles.root, impact ? styles.rootImpact : undefined, className)}
        ref={ref}
      />
    )
  },
)

Table.displayName = "Table"

const useStyles = createStyles(({ token }) => ({
  root: {},

  rootImpact: {
    ".ant-pagination": {
      paddingInline: getDimensionToken(token.Page.paddingInlineBase),
    },
  },
}))
