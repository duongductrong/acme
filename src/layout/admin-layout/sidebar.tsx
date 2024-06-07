"use client"
import { MailOutlined, MoneyCollectOutlined, SettingOutlined } from "@ant-design/icons"
import type { MenuProps } from "antd"
import { Flex, Menu } from "antd"
import { createStyles } from "antd-style"
import { ComponentPropsWithoutRef } from "react"
import BrandName from "./brandname"
import ProfileBar from "./profilebar"

type MenuItem = Required<MenuProps>["items"][number]

const items: MenuItem[] = [
  {
    key: "grp-general",
    label: "General",
    type: "group",
    children: [
      { key: "13", label: "Dashboard" },
      { key: "14", label: "Statistics" },
      {
        key: "sub2",
        label: "Billing",
        icon: <MoneyCollectOutlined />,
        children: [
          { key: "5", label: "Daily" },
          { key: "6", label: "Monthly" },
          {
            key: "sub3",
            label: "Yearly",
            children: [
              { key: "7", label: "2024" },
              { key: "8", label: "2023" },
            ],
          },
        ],
      },
    ],
  },
  {
    key: "sub1",
    label: "Navigation One",
    icon: <MailOutlined />,
    children: [
      {
        key: "g1",
        label: "Item 1",
        type: "group",
        children: [
          { key: "1", label: "Option 1" },
          { key: "2", label: "Option 2" },
        ],
      },
      {
        key: "g2",
        label: "Item 2",
        type: "group",
        children: [
          { key: "3", label: "Option 3" },
          { key: "4", label: "Option 4" },
        ],
      },
    ],
  },
  {
    type: "divider",
  },
  {
    key: "sub4",
    label: "Navigation Three",
    icon: <SettingOutlined />,
    children: [
      { key: "9", label: "Option 9" },
      { key: "10", label: "Option 10" },
      { key: "11", label: "Option 11" },
      { key: "12", label: "Option 12" },
    ],
  },
]

export interface SidebarProps extends Omit<ComponentPropsWithoutRef<typeof Flex>, "children"> {}

const Sidebar = ({ className, ...props }: SidebarProps) => {
  const { styles, cx } = useStyles()

  return (
    <Flex {...props} className={cx(styles.root, className)} vertical>
      <BrandName className={styles.brandName} />
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        className={cx(styles.menu)}
        items={items}
      />
      <ProfileBar className={cx(styles.profileBar)} />
    </Flex>
  )
}

const useStyles = createStyles(({ token }) => ({
  root: {
    width: 256,
  },

  brandName: {
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    borderRightWidth: 1,
    borderRightStyle: "solid",
    borderColor: token.colorBorderSecondary,
  },

  profileBar: {
    borderTop: `1px solid ${token.colorBorderSecondary}`,
    borderRight: `1px solid ${token.colorBorderSecondary}`,
  },

  menu: {
    height: "calc(100lvh - 54px - 64px)",
    overflow: "auto",
  },
}))

export default Sidebar
