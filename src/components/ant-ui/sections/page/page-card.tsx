"use client"

import { cn } from "@/lib/tailwind"
import { ForwardRefComponent } from "@/types/react-polymorphic"
import { ComponentPropsWithoutRef, forwardRef } from "react"

export interface PageCardProps extends ComponentPropsWithoutRef<"div"> {
  title?: string
  description?: string
}

export const PageCard = forwardRef(
  ({ className, children, component: Comp = "div", title, description, ...props }, ref) => {
    return (
      <Comp {...props} className={cn(className)} ref={ref}>
        {title || description ? (
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold leading-normal">{title}</h2>
            <p className="text-sm leading-normal text-muted-foreground">{description}</p>
          </div>
        ) : null}
        {children}
      </Comp>
    )
  },
) as ForwardRefComponent<"div", PageCardProps>

PageCard.displayName = "PageCard"
