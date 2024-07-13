"use client"

import { ThemeProvider as ThemePrimitiveProvider } from "next-themes"
import { PropsWithChildren } from "react"

export interface ThemeProviderProps extends PropsWithChildren {}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return <ThemePrimitiveProvider attribute="class">{children}</ThemePrimitiveProvider>
}
