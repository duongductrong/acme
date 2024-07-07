"use client"
import { cn } from "@/lib/tailwind"
import { ReactNode } from "react"

export interface PageTitleProps {
  title: string
  description: string
  children?: ReactNode

  toolbar?: ReactNode

  isCard?: boolean
  withGapBottom?: boolean
}

export const PageTitle = ({
  title,
  description,
  toolbar,
  isCard,
  withGapBottom,
}: PageTitleProps) => {
  return (
    <header
      className={cn(
        "flex",
        isCard ? "px-6 pb-0 pt-6" : undefined,
        withGapBottom ? "pb-4" : undefined,
      )}
    >
      <div className={cn("flex flex-col gap-1")}>
        <h2 className="text-2xl font-semibold leading-normal">{title}</h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>

      {toolbar ? <div className="ml-auto">{toolbar}</div> : null}
    </header>
  )
}
