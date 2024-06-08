"use client"
import type { MenuProps } from "antd"
import { Flex, Menu } from "antd"
import { createStyles } from "antd-style"
import {
  BarChart4,
  Blocks,
  Box,
  CirclePercent,
  CreditCard,
  File,
  FormInput,
  Inbox,
  Package2,
  Podcast,
  Satellite,
  ServerCog,
  Settings,
  Ticket,
  Users,
} from "lucide-react"
import { ComponentPropsWithoutRef } from "react"
import BrandName from "./brandname"
import ProfileBar from "./profilebar"

type MenuItem = Required<MenuProps>["items"][number]

const items: MenuItem[] = [
  {
    key: "grp-activity",
    label: "Activity",
    type: "group",
    children: [
      { key: "Dashboard", label: "Dashboard", icon: <BarChart4 size={16} /> },
      { key: "statistics", label: "Statistics", icon: <Box size={16} /> },
      { key: "orders", label: "Orders", icon: <Package2 size={16} /> },
      { key: "clients", label: "Clients", icon: <Users size={16} /> },
      { key: "files", label: "Files", icon: <File size={16} /> },
      { key: "tickets", label: "Tickets", icon: <Ticket size={16} /> },
    ],
  },
  {
    type: "divider",
  },
  {
    type: "group",
    key: "billing",
    label: "Billing",
    children: [
      { key: "billing-invoices", label: "Invoices", icon: <CreditCard size={16} /> },
      { key: "billing-subscriptions", label: "Subscriptions", icon: <Podcast size={16} /> },
    ],
  },
  {
    type: "divider",
  },
  {
    type: "group",
    label: "Marketing",
    key: "marketing",
    children: [
      {
        key: "affiliates",
        label: "Affiliates",
        icon: <Inbox size={16} />,
      },
      {
        key: "coupons",
        label: "Coupons",
        icon: <CirclePercent size={16} />,
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
    ],
  },
  {
    type: "divider",
  },
  {
    key: "setup",
    label: "Setup",
    type: "group",
    children: [
      { key: "setup-services", label: "Services", icon: <ServerCog size={16} /> },
      { key: "setup-order-forms", label: "Order forms", icon: <FormInput size={16} /> },
      { key: "setup-modules", label: "Modules", icon: <Blocks size={16} /> },
      { key: "setup-integration", label: "Integrations", icon: <Satellite size={16} /> },
      { key: "setup-settings", label: "Settings", icon: <Settings size={16} /> },
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
