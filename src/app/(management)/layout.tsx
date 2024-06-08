import { ThemeProvider } from "@/components/ant-ui/theme/provider"
import { ReactNode } from "react"

export interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return <ThemeProvider>{children}</ThemeProvider>
}

export default Layout
