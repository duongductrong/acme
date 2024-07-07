"use client"

import { PageSide, PageSideBody, PageSideHeader } from "@/components/ant-ui/sections/page"
import { MenuComposer } from "@/components/ui/menu"
import { settingItems } from "@/constants/sidebar"
import { cn } from "@/lib/tailwind"
import { Flex } from "antd"
import { usePathname } from "next/navigation"
import { ComponentPropsWithoutRef } from "react"
import Header from "./header"

export interface SidebarProps extends Omit<ComponentPropsWithoutRef<typeof Flex>, "children"> {}

const Sidebar = ({ className, ...props }: SidebarProps) => {
  const pathname = usePathname()

  return (
    <PageSide className={cn(className)}>
      <PageSideHeader>
        <Header className={"w-full"} />
      </PageSideHeader>
      <PageSideBody hasFooter={false}>
        <MenuComposer
          type="multiple"
          defaultSelectedKeys={[pathname]}
          className={cn("p-4")}
          items={settingItems}
        />
      </PageSideBody>
    </PageSide>
  )
}

export default Sidebar
