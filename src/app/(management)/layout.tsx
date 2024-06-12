import FormWizardProvider from "@/components/ant-ui/pro-ui/form-wizard"
import { ThemeProvider } from "@/components/ant-ui/theme/provider"
import { ReactNode } from "react"

export interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider>
      <FormWizardProvider>{children}</FormWizardProvider>
    </ThemeProvider>
  )
}

export default Layout
