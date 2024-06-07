"use client"

import { AntdRegistry } from "@ant-design/nextjs-registry"
import { StyleProvider, ThemeProvider, createGlobalStyle, extractStaticStyle } from "antd-style"
import { useServerInsertedHTML } from "next/navigation"
import { PropsWithChildren, ReactNode, useRef } from "react"

export interface AntdThemeProviderProps {
  children: ReactNode
}

const AntdThemeProvider = ({ children }: AntdThemeProviderProps) => {
  return (
    <AntdRegistry>
      <ThemeProvider>
        <StyleRegistry>{children}</StyleRegistry>
      </ThemeProvider>
    </AntdRegistry>
  )
}

const StyleRegistry = ({ children }: PropsWithChildren) => {
  const isInsert = useRef(false)

  useServerInsertedHTML(() => {
    // Avoid inserting styles repeatedly when rendering multiple times
    // refs: https://github.com/vercel/next.js/discussions/49354#discussioncomment-6279917
    if (isInsert.current) return

    isInsert.current = true

    const styles = extractStaticStyle().map((item) => item.style)

    return (
      <>
        {styles}
        <ResetCSS />
      </>
    )
  })

  return <StyleProvider cache={extractStaticStyle.cache}>{children}</StyleProvider>
}

export const ResetCSS = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    padding: 0;
    margin: 0;
  }
`

export default AntdThemeProvider
