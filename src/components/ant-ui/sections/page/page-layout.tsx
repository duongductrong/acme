"use client"

import { ForwardRefComponent } from "@/types/react-polymorphic"
import { createStyles } from "antd-style"
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react"
import { Flex } from "../../ui/flex"

export interface PageLayoutProps extends ComponentPropsWithoutRef<typeof Flex> {}

export const PageLayout = forwardRef<ElementRef<"div">, PageLayoutProps>((props, ref) => {
  const { cx, styles } = useStyles()

  return <Flex {...props} ref={ref} className={cx(styles.root)} />
}) as ForwardRefComponent<"div", PageLayoutProps>

PageLayout.displayName = "PageLayout"

const useStyles = createStyles(() => ({
  root: {},
}))
