"use client"

import { PageSide, PageSideBody, PageSideHeader } from "@/components/ant-ui/sections/page"
import { Flex, Menu } from "antd"
import { createStyles } from "antd-style"
import { usePathname } from "next/navigation"
import { ComponentPropsWithoutRef } from "react"
import Header from "./header"
import { settingItems } from "@/constants/sidebar"

export interface SidebarProps extends Omit<ComponentPropsWithoutRef<typeof Flex>, "children"> {}

const Sidebar = ({ className, ...props }: SidebarProps) => {
  const pathname = usePathname()

  const { styles, cx } = useStyles()

  return (
    <PageSide className={cx(className)}>
      <PageSideHeader>
        <Header className={styles.header} />
      </PageSideHeader>
      <PageSideBody hasFooter={false}>
        <Menu
          mode="inline"
          defaultSelectedKeys={[pathname]}
          className={cx(styles.menu)}
          items={settingItems}
        />
      </PageSideBody>
    </PageSide>
  )
}

const useStyles = createStyles(({ token }) => ({
  header: {},

  profileBar: {
    width: "100%",
  },

  menu: {
    background: token.Page.bodyBgBase,
    height: "100%",
    fontWeight: 500,
    ".ant-menu-item-divider": {
      marginBottom: token.spacing[3],
      borderColor: "transparent",
    },
  },
}))

export default Sidebar
