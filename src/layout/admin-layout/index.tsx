"use client"

import { Flex } from "antd"
import { createStyles } from "antd-style"
import { ReactNode } from "react"
import Sidebar from "./sidebar"

export interface AdminLayoutProps {
  children: ReactNode
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const { cx, styles } = useStyles()

  return (
    <Flex className={cx(styles.root)}>
      <Sidebar className={cx(styles.sidebar)} />
      <main className={cx(styles.main)}>{children}</main>
    </Flex>
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

export default AdminLayout
