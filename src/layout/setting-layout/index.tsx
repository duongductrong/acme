"use client"

import { Page } from "@/components/ant-ui/sections/page"
import { PageLayout } from "@/components/ant-ui/sections/page/page-layout"
import { createStyles } from "antd-style"
import { ReactNode } from "react"
import Sidebar from "./sidebar"
import { cn } from "@/lib/tailwind"

export interface SettingLayoutProps {
  children: ReactNode
}

const SettingLayout = ({ children }: SettingLayoutProps) => {
  return (
    <PageLayout>
      <Sidebar className={cn("fixed left-0 top-0")} />
      <Page component="main" className={cn("ml-[256px] min-h-lvh w-full")} noPageHeader>
        {children}
      </Page>
    </PageLayout>
  )
}

export default SettingLayout
