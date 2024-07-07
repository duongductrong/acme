"use client"

import { Page } from "@/components/ant-ui/sections/page"
import { PageLayout } from "@/components/ant-ui/sections/page/page-layout"
import { cn } from "@/lib/tailwind"
import { ReactNode } from "react"
import Sidebar from "./sidebar"

export interface AdminLayoutProps {
  children: ReactNode
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <PageLayout>
      <Sidebar className={cn("fixed left-0 top-0")} />
      <Page component="main" className={cn("ml-[256px] min-h-lvh w-full")}>
        {children}
      </Page>
    </PageLayout>
  )
}

export default AdminLayout
