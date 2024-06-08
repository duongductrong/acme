"use client"

import { createStyles } from "antd-style"
import Breadcrumb, { BreadcrumbProps } from "antd/es/breadcrumb"
import Flex from "antd/es/flex"
import { ReactElement, ReactNode, cloneElement } from "react"

export interface PageHeaderProps {
  children?: ReactNode

  breadcrumbs?: BreadcrumbProps["items"]

  toolbar?: ReactNode

  isSticky?: boolean
}

export const PageHeader = ({ breadcrumbs, toolbar, isSticky }: PageHeaderProps) => {
  const { cx, styles } = useStyles()
  return (
    <Flex className={cx(styles.root, isSticky ? styles.sticky : undefined)} align="center">
      <Breadcrumb items={breadcrumbs} />

      {toolbar
        ? cloneElement(toolbar as ReactElement, {
            className: cx(styles.toolbar),
          })
        : null}
    </Flex>
  )
}

const useStyles = createStyles(({ token }) => ({
  root: {
    height: token.Page.itemHeaderHeight,
    borderBottom: `1px solid ${token.colorBorderSecondary}`,
    paddingInline: token.paddingMD,
  },

  sticky: {
    position: "sticky",
    top: 0,
    alignSelf: "flex-start",
    width: "100%",
    zIndex: 5,
    background: token.colorBgBase,
  },

  toolbar: {
    marginLeft: "auto",
  },
}))
