"use client"
import { AppstoreOutlined, MailOutlined, SettingOutlined } from "@ant-design/icons"
import type { MenuProps } from "antd"
import { Flex, Menu } from "antd"
import { createStyles } from "antd-style"
import React from "react"
import BrandName from "./brandname"
import ProfileBar from "./profilebar"

type MenuItem = Required<MenuProps>["items"][number]

const items: MenuItem[] = [
  {
    key: "grp-dashboard",
    label: "Dashboard",
    type: "group",
    children: [
      { key: "13", label: "Monthly dashboard 13" },
      { key: "14", label: "Statistics" },
      {
        key: "sub2",
        label: "Navigation Two",
        icon: <AppstoreOutlined />,
        children: [
          { key: "5", label: "Option 5" },
          { key: "6", label: "Option 6" },
          {
            key: "sub3",
            label: "Submenu",
            children: [
              { key: "7", label: "Option 7" },
              { key: "8", label: "Option 8" },
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

const Sidebar: React.FC = () => {
  const { styles, cx } = useStyles()

  return (
    <Flex className={cx(styles.root)} vertical>
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
  root: {},

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
    width: 256,
    height: "calc(100lvh - 54px - 64px)",
    overflow: "auto",
  },
}))

export default Sidebar
