"use client"
import { ReactNode } from "react"

export interface PageFragmentProps {
  children: ReactNode
}

export const PageFragment = ({ children }: PageFragmentProps) => {
  return <>{children}</>
}
