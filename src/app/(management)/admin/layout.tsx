"use client"

import AdminLayout from "@/layout/admin-layout"
import React from "react"

export interface LayoutProps extends React.PropsWithChildren {}

const Layout = ({ children }: LayoutProps) => {
  return <AdminLayout>{children}</AdminLayout>
}

export default Layout
