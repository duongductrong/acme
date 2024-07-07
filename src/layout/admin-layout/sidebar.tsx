"use client"

import {
  PageSide,
  PageSideBody,
  PageSideFooter,
  PageSideHeader,
} from "@/components/ant-ui/sections/page"
import { MenuComposer } from "@/components/ui/menu"
import { menuItems } from "@/constants/sidebar"
import { cn } from "@/lib/tailwind"
import { Flex } from "antd"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ComponentPropsWithoutRef } from "react"
import BrandName from "./brandname"
import ProfileBar from "./profilebar"

export interface SidebarProps extends Omit<ComponentPropsWithoutRef<typeof Flex>, "children"> {}

const Sidebar = ({ className, ...props }: SidebarProps) => {
  const pathname = usePathname()

  return (
    <PageSide className={cn(className)}>
      <PageSideHeader>
        <BrandName />
      </PageSideHeader>
      <PageSideBody className="h-full font-medium">
        <MenuComposer
          type="multiple"
          items={menuItems ?? []}
          components={{ link: Link }}
          defaultSelectedKeys={[pathname]}
          className="p-4"
        />
      </PageSideBody>
      <PageSideFooter className="bg-page-sidebar">
        <ProfileBar className="w-full" />
      </PageSideFooter>
    </PageSide>
  )
}

export default Sidebar
