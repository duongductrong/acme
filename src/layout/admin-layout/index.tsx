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
      <Sidebar />
      <main className={cx(styles.main)}>{children}</main>
    </Flex>
  )
}

const useStyles = createStyles(() => ({
  root: {},
  main: {},
}))

export default AdminLayout
