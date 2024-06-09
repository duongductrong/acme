"use client"
import { createStyles } from "antd-style"
import { Flex, FlexProps } from "../../ui/flex"
import { forwardRef } from "react"
import { ForwardRefComponent } from "@/types/react-polymorphic"

export interface PageFooterProps extends FlexProps {}

export const PageFooter = forwardRef(({ children, className, ...props }, ref) => {
  const { cx, styles } = useStyles()
  return (
    <Flex {...props} className={cx(styles.root, className)} ref={ref}>
      {children}
    </Flex>
  )
}) as ForwardRefComponent<"div", PageFooterProps>

PageFooter.displayName = "PageFooter"

const useStyles = createStyles(({ token }) => ({
  root: {
    height: token.Page.itemFooterHeight,
    width: "100%",
  },
}))
