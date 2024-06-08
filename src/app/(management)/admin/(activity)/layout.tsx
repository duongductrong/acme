import { PageHeader } from "@/components/ant-ui/sections/page"
import { Avatar, AvatarGroup } from "@/components/ant-ui/ui/avatar"
import React from "react"

export interface LayoutProps extends React.PropsWithChildren {}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <PageHeader
        breadcrumbs={[
          {
            title: "Home",
          },
          {
            title: "Dashboard",
          },
        ]}
        toolbar={
          <AvatarGroup>
            <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
            <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg">
              K
            </Avatar>
            <Avatar style={{ backgroundColor: "#fde3cf", color: "#f56a00" }}>F</Avatar>
          </AvatarGroup>
        }
        isSticky
      />
      {children}
    </>
  )
}

export default Layout
