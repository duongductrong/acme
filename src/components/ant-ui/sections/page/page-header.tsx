"use client"

import { cn } from "@/lib/tailwind"
import Breadcrumb, { BreadcrumbProps } from "antd/lib/breadcrumb"
import { ReactElement, ReactNode, cloneElement } from "react"

export interface PageHeaderProps {
  children?: ReactNode

  breadcrumbs?: BreadcrumbProps["items"]

  toolbar?: ReactNode

  isSticky?: boolean
}

export const PageHeader = ({ breadcrumbs, toolbar, isSticky }: PageHeaderProps) => {
  return (
    <div
      className={cn(
        "flex h-12 items-center border-b border-page-border px-4",
        isSticky ? "sticky top-0 z-[5] w-full self-start bg-background" : undefined,
      )}
    >
      <Breadcrumb items={breadcrumbs} />

      {toolbar
        ? cloneElement(toolbar as ReactElement, {
            className: cn("ml-auto"),
          })
        : null}
    </div>
  )
}
