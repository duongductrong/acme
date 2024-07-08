"use client"

import { createStyles } from "antd-style"
import {
  Pagination as PaginationPrimitive,
  PaginationProps as PaginationPrimitiveProps,
} from "antd"

export interface PaginationProps extends PaginationPrimitiveProps {}

export const Pagination = ({ className, ...props }: PaginationProps) => {
  const { cx, styles } = useStyles()

  return <PaginationPrimitive size="small" {...props} className={cx(styles.root, className)} />
}

Pagination.displayName = "Pagination"

const useStyles = createStyles(({ token }) => ({
  root: {},
}))
