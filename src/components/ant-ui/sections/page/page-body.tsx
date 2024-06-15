"use client"
import { ForwardRefComponent } from "@/types/react-polymorphic"
import { createStyles } from "antd-style"
import { ReactNode, forwardRef } from "react"
import { getDimensionToken } from "../../ui/utils"

export interface PageBodyProps {
  children: ReactNode
  impact?: boolean
  inPage?: boolean

  variant?: "container" | "fluid"
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
    const { cx, styles } = useStyles()

    return (
      <Comp
        {...props}
        ref={ref}
        className={cx(
          styles.root,
          impact ? styles.impact : undefined,
          inPage ? styles.rootInPage : undefined,
          styles[variant],
          className,
        )}
      >
        {children}
      </Comp>
    )
  },
) as ForwardRefComponent<"section", PageBodyProps>

PageBody.displayName = "PageBody"

const useStyles = createStyles(({ token }) => ({
  root: {
    padding: getDimensionToken(token.Page.paddingInlineBase),
    height: `calc(100lvh - ${getDimensionToken(token.Page.itemHeaderHeight)})`,
  },

  rootInPage: {
    maxHeight: `calc(100lvh - ${getDimensionToken(token.Page.itemHeaderHeight)} - ${getDimensionToken(token.Page.itemFooterHeight)})`,
    overflow: "auto",
  },

  fluid: {
    width: "100%",
    maxWidth: "100%",
  },

  container: {
    maxWidth: "800px",
    margin: "auto",
    width: "100%",
  },

  impact: {
    padding: token.spacing[0],
  },
}))
