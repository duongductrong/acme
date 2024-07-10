"use client"
import { cn } from "@/lib/tailwind"
import { ReactNode } from "react"

export interface PageTitleProps {
  title: string
  description: string
  children?: ReactNode

  toolbar?: ReactNode
}

export const PageTitle = ({ title, description, toolbar }: PageTitleProps) => {
  return (
    <header className={cn("flex")}>
      <div className={cn("flex flex-col gap-1")}>
        <h2 className="text-2xl font-semibold leading-normal">{title}</h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>

      {toolbar ? <div className="ml-auto">{toolbar}</div> : null}
    </header>
  )
}
