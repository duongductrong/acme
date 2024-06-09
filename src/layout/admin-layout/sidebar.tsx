"use client"

import {
  PageSide,
  PageSideBody,
  PageSideFooter,
  PageSideHeader,
} from "@/components/ant-ui/sections/page"
import { Flex, Menu } from "antd"
import { createStyles } from "antd-style"
import { usePathname } from "next/navigation"
import { ComponentPropsWithoutRef } from "react"
import BrandName from "./brandname"
import { menuItems } from "./items"
import ProfileBar from "./profilebar"

export interface SidebarProps extends Omit<ComponentPropsWithoutRef<typeof Flex>, "children"> {}

const Sidebar = ({ className, ...props }: SidebarProps) => {
  const pathname = usePathname()

  const { styles, cx } = useStyles()

  return (
    <PageSide className={cx(className)}>
      <PageSideHeader>
        <BrandName className={styles.brandName} />
      </PageSideHeader>
      <PageSideBody>
        <Menu
          mode="inline"
          defaultSelectedKeys={[pathname]}
          className={cx(styles.menu)}
          items={menuItems}
        />
      </PageSideBody>
      <PageSideFooter>
        <ProfileBar className={cx(styles.profileBar)} />
      </PageSideFooter>
    </PageSide>
  )
}

const useStyles = createStyles(({ token }) => ({
  brandName: {},

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
