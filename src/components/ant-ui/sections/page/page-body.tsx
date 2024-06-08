"use client"
import { ForwardRefComponent } from "@/types/react-polymorphic"
import { createStyles } from "antd-style"
import { ReactNode, forwardRef } from "react"

export interface PageBodyProps {
  children: ReactNode
  noPadding?: boolean
}

export const PageBody = forwardRef(
  ({ children, className, component: Comp = "section", noPadding, ...props }, ref) => {
    const { cx, styles, theme } = useStyles()

    return (
      <Comp
        {...props}
        ref={ref}
        className={cx(styles.root, noPadding ? styles.noPadding : undefined, className)}
      >
        {children}
      </Comp>
    )
  },
) as ForwardRefComponent<"section", PageBodyProps>

PageBody.displayName = "PageBody"

const useStyles = createStyles(({ token }) => ({
  root: {
    padding: token.paddingMD,
    backgroundColor: token.Page.bodyBgBase,
    minHeight: `calc(100lvh - ${token.Page.itemHeaderHeight}px)`,
  },

  noPadding: {
    padding: token.spacing[0],
  },
}))
