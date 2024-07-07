"use client"

import { Link } from "@/components/router/link"
import { MenuItemNode } from "@/components/ui/menu"
import { PAGE_URLS } from "@/constants/urls"
import {
  BellRing,
  Blocks,
  Box,
  Cable,
  CircleDollarSign,
  CirclePercent,
  Code,
  CreditCard,
  Cuboid,
  Eclipse,
  File,
  Folder,
  FormInput,
  Inbox,
  Package2,
  PackagePlus,
  Podcast,
  Satellite,
  ServerCog,
  Settings,
  Shield,
  Ticket,
  User,
  Users,
} from "lucide-react"

export const menuItems: MenuItemNode[] = [
  {
    key: "grp-activity",
    label: "Activity",
    type: "group",
    children: [
      {
        key: PAGE_URLS.ADMIN.DASHBOARD,
        href: PAGE_URLS.ADMIN.DASHBOARD,
        label: "Dashboard",
        icon: <Box size={16} />,
      },
      {
        key: PAGE_URLS.ADMIN.ORDERS,
        href: PAGE_URLS.ADMIN.ORDERS,
        label: "Orders",
        icon: <Package2 size={16} />,
      },
      {
        key: "products",
        label: "Products",
        icon: <PackagePlus size={16} />,
      },
      { key: "clients", label: "Clients", icon: <Users size={16} /> },
      {
        key: "files",
        href: PAGE_URLS.ADMIN.MEDIA,
        label: "Files",
        icon: <File size={16} />,
      },
      { key: "tickets", label: "Tickets", icon: <Ticket size={16} /> },
    ],
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
            type: "item",
            children: [
              { key: "1", label: "Option 1" },
              { key: "2", label: "Option 2" },
            ],
          },
          {
            key: "g2",
            label: "Item 2",
            type: "item",
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
    key: "setup",
    label: "Setup",
    type: "group",
    children: [
      { key: "setup-services", label: "Services", icon: <ServerCog size={16} /> },
      { key: "setup-order-forms", label: "Order forms", icon: <FormInput size={16} /> },
      { key: "setup-modules", label: "Modules", icon: <Blocks size={16} /> },
      { key: "setup-integration", label: "Integrations", icon: <Satellite size={16} /> },
      {
        key: "setup-settings",
        href: PAGE_URLS.ADMIN.SETTINGS,
        label: "Settings",
        icon: <Settings size={16} />,
      },
    ],
  },
]

export const settingItems: MenuItemNode[] = [
  {
    key: "grp-account",
    label: "Account",
    type: "group",
    children: [
      {
        key: "profile",
        href: PAGE_URLS.ADMIN.SETTINGS_PROFILE,
        label: "Profile",
        icon: <User size={16} />,
      },
      {
        key: "storage-account",
        label: "Storage account",
        icon: <Folder size={16} />,
      },
      {
        key: "notification",
        label: "Notification",
        icon: <BellRing size={16} />,
      },
      {
        key: "security",
        label: "Security",
        icon: <Shield size={16} />,
      },
    ],
  },
  {
    type: "group",
    key: "workspace",
    label: "Workspace",
    children: [
      { key: "workspace-general", label: "General", icon: <Cuboid size={16} /> },
      { key: "workspace-members", label: "Members", icon: <Users size={16} /> },
      { key: "workspace-plans", label: "Plans", icon: <Eclipse size={16} /> },
      { key: "workspace-billing", label: "Billing", icon: <CircleDollarSign size={16} /> },
      { key: "workspace-developers", label: "Developers", icon: <Code size={16} /> },
      { key: "workspace-integrations", label: "Integrations", icon: <Cable size={16} /> },
    ],
  },
]
