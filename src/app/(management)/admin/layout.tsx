"use client"

import AdminLayout from "@/layout/admin-layout"
import SettingLayout from "@/layout/setting-layout"
import { useSelectedLayoutSegment } from "next/navigation"
import React from "react"

export interface LayoutProps extends React.PropsWithChildren {}

const Layout = ({ children }: LayoutProps) => {
  const segment = useSelectedLayoutSegment()

  if (segment === `(setting)`) {
    return <SettingLayout>{children}</SettingLayout>
  }

  return <AdminLayout>{children}</AdminLayout>
}

export default Layout
