import AntdThemeProvider from "@/components/antd-theme-provider"
import { ReactNode } from "react"

export interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return <AntdThemeProvider>{children}</AntdThemeProvider>
}

export default Layout
