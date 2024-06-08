"use client"

import { AntdRegistry } from "@ant-design/nextjs-registry"
import {
  StyleProvider,
  ThemeMode,
  ThemeProvider,
  createGlobalStyle,
  extractStaticStyle,
} from "antd-style"
import { useServerInsertedHTML } from "next/navigation"
import { PropsWithChildren, ReactNode, useRef, useState } from "react"

export interface AntdThemeProviderProps {
  children: ReactNode
}

const AntdThemeProvider = ({ children }: AntdThemeProviderProps) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>("light")

  return (
    <AntdRegistry>
      <ThemeProvider
        themeMode={themeMode}
        onThemeModeChange={(theme) => setThemeMode(theme)}
        theme={{ cssVar: true }}
        customToken={{}}
      >
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
