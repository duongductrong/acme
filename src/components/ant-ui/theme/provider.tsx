"use client"

import { AntdRegistry } from "@ant-design/nextjs-registry"
import {
  ThemeProvider as AntdThemeProvider,
  StyleProvider,
  ThemeMode,
  createGlobalStyle,
  extractStaticStyle,
} from "antd-style"
import { useServerInsertedHTML } from "next/navigation"
import { PropsWithChildren, ReactNode, useRef, useState } from "react"
import type { CustomAliasTokens } from "./tokens"
import { commonTokens, customTokens, darkColorTokens, lightColorTokens } from "./tokens"

declare module "antd-style" {
  export interface CustomToken extends CustomAliasTokens {
    Page: {
      itemHeaderHeight: number
      itemFooterHeight: number

      bodyBgBase: string

      sideWidth: number
    }
  }
}

export interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>("light")

  return (
    <AntdRegistry>
      <AntdThemeProvider
        themeMode={themeMode}
        onThemeModeChange={(theme) => setThemeMode(theme)}
        theme={(appearance) => {
          const colors = appearance === "dark" ? darkColorTokens : lightColorTokens
          return {
            cssVar: true,
            token: {
              ...commonTokens,
              ...colors,
            },
            components: {
              Menu: {
                itemHeight: 32,
              },
              Page: {
                itemHeaderHeight: 56,

                itemFooterHeight: 56,

                bodyBgBase: "#fbfbfb",

                sideWidth: 256,
              },

              Segmented: {
                trackPadding: 4,
                controlHeight: 36,
              },

              Table: {
                headerBg: "transparent",
              },
            },
          }
        }}
        customToken={customTokens}
      >
        <StyleRegistry>{children}</StyleRegistry>
      </AntdThemeProvider>
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
