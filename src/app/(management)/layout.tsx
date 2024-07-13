import { ThemeProvider as AntThemeProvider } from "@/components/ant-ui/theme/provider"
import { ThemeProvider } from "@/components/ui/theme/provider"
import { ReactNode } from "react"

export interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <AntThemeProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </AntThemeProvider>
  )
}

export default Layout
