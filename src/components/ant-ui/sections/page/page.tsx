"use client"

import { ForwardRefComponent } from "@/types/react-polymorphic"
import { Flex } from "antd"
import { ComponentPropsWithoutRef, forwardRef, useMemo } from "react"
import { PageContext } from "./page-context"

export interface PageProps extends ComponentPropsWithoutRef<typeof Flex> {
  noPageHeader?: boolean
}

export const Page = forwardRef(({ component = "div", noPageHeader = false, ...props }, ref) => {
  const values = useMemo<PageContext>(() => ({ noPageHeader }), [noPageHeader])

  return (
    <PageContext.Provider value={values}>
      <Flex {...props} component={component} ref={ref} vertical />
    </PageContext.Provider>
  )
}) as ForwardRefComponent<"div", PageProps>

Page.displayName = "Page"
