"use client"

import { Page } from "@/components/ant-ui/sections/page"
import { PageLayout } from "@/components/ant-ui/sections/page/page-layout"
import { createStyles } from "antd-style"
import { ReactNode } from "react"
import Sidebar from "./sidebar"

export interface SettingLayoutProps {
  children: ReactNode
}

const SettingLayout = ({ children }: SettingLayoutProps) => {
  const { cx, styles } = useStyles()

  return (
    <PageLayout>
      <Sidebar className={cx(styles.sidebar)} />
      <Page component="main" className={cx(styles.main)}>
        {children}
      </Page>
    </PageLayout>
  )
}

const useStyles = createStyles(() => ({
  root: {},
  sidebar: {
    position: "fixed",
    top: 0,
    left: 0,
  },
  main: {
    marginLeft: "256px",
    width: "100%",
    minHeight: "100lvh",
  },
}))

export default SettingLayout
