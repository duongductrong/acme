"use client"

import { cn } from "@/lib/tailwind"
import { ForwardRefComponent } from "@/types/react-polymorphic"
import { ComponentPropsWithoutRef, forwardRef } from "react"
import { Flex } from "../../ui/flex"

export interface PageSideProps extends ComponentPropsWithoutRef<typeof Flex> {}

export const PageSide = forwardRef(({ className, component: Comp = "div", ...props }, ref) => {
  return <Comp {...props} className={cn("flex w-[256px] flex-col", className)} ref={ref} />
}) as ForwardRefComponent<"div", PageSideProps>

PageSide.displayName = "PageSide"

export interface PageSideHeaderProps extends ComponentPropsWithoutRef<typeof Flex> {}

export const PageSideHeader = forwardRef(
  ({ className, children, component: Comp = "div", ...props }, ref) => {
    return (
      <Comp
        {...props}
        className={cn("flex p-4", "h-12 border-b border-r border-page-border bg-page-sidebar")}
        ref={ref}
      >
        {children}
      </Comp>
    )
  },
) as ForwardRefComponent<"div", PageSideHeaderProps>

PageSideHeader.displayName = "PageSideHeader"

export interface PageSideBodyProps extends ComponentPropsWithoutRef<typeof Flex> {
  hasFooter?: boolean
}

export const PageSideBody = forwardRef(
  ({ component: Comp = "div", className, children, hasFooter = true, ...props }, ref) => {
    return (
      <Comp
        {...props}
        className={cn(
          "flex h-[calc(100lvh-48px-48px)] flex-col",
          "border-r border-page-border bg-page-sidebar",
        )}
        ref={ref}
      >
        {children}
      </Comp>
    )
  },
) as ForwardRefComponent<"div", PageSideBodyProps>

PageSideBody.displayName = "PageSideBody"

export interface PageSideFooterProps extends ComponentPropsWithoutRef<typeof Flex> {}

export const PageSideFooter = forwardRef(
  ({ component: Comp = "div", children, className, ...props }, ref) => {
    return (
      <Comp
        {...props}
        className={cn(
          "flex h-12 items-center border-r border-t border-page-border px-4",
          className,
        )}
        ref={ref}
      >
        {children}
      </Comp>
    )
  },
) as ForwardRefComponent<"div", PageSideFooterProps>

PageSideFooter.displayName = "PageSideFooter"
