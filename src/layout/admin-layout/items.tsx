"use client"

import { Link } from "@/components/router/link"
import { PAGE_URLS } from "@/constants/urls"
import type { MenuProps } from "antd"
import {
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

type MenuItem = Required<MenuProps>["items"][number]

export const menuItems: MenuItem[] = [
  {
    key: "grp-activity",
    label: "Activity",
    type: "group",
    children: [
      {
        key: PAGE_URLS.ADMIN.DASHBOARD,
        label: (
          <Link
            href={{
              pathname: PAGE_URLS.ADMIN.DASHBOARD,
            }}
          >
            Dashboard
          </Link>
        ),
        icon: <Box size={16} />,
      },
      {
        key: PAGE_URLS.ADMIN.ORDERS,
        label: <Link href={PAGE_URLS.ADMIN.ORDERS}>Orders</Link>,
        icon: <Package2 size={16} />,
      },
      { key: "clients", label: <Link href="/">Clients</Link>, icon: <Users size={16} /> },
      { key: "files", label: <Link href="/">Files</Link>, icon: <File size={16} /> },
      { key: "tickets", label: <Link href="/">Tickets</Link>, icon: <Ticket size={16} /> },
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
