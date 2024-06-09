import { AliasToken } from "antd/es/theme/internal"

const spacingBase = 4

export const customTokens = {
  spacing: {
    0: 0,
    1: spacingBase,
    2: spacingBase * 2,
    3: spacingBase * 3,
    4: spacingBase * 4,
    5: spacingBase * 5,
    6: spacingBase * 6,
    7: spacingBase * 7,
    8: spacingBase * 8,
    9: spacingBase * 9,
    10: spacingBase * 10,
    11: spacingBase * 11,
    12: spacingBase * 12,
    13: spacingBase * 13,
    14: spacingBase * 14,
    15: spacingBase * 15,
    16: spacingBase * 16,
    17: spacingBase * 17,
    18: spacingBase * 18,
    19: spacingBase * 19,
    20: spacingBase * 20,
  },
  fontSize: {
    xs: { fontSize: "0.75rem", lineHeight: "1rem" }, // 12px, 16px
    sm: { fontSize: "0.875rem", lineHeight: "1.25rem" }, // 14px, 20px
    base: { fontSize: "1rem", lineHeight: "1.5rem" }, // 16px, 24px
    lg: { fontSize: "1.125rem", lineHeight: "1.75rem" }, // 18px, 28px
    xl: { fontSize: "1.25rem", lineHeight: "1.75rem" }, // 20px, 28px
    "2xl": { fontSize: "1.5rem", lineHeight: "2rem" }, // 24px, 32px
    "3xl": { fontSize: "1.875rem", lineHeight: "2.25rem" }, // 30px, 36px
    "4xl": { fontSize: "2.25rem", lineHeight: "2.5rem" }, // 36px, 40px
    "5xl": { fontSize: "3rem", lineHeight: "1rem" }, // 48px, 1px
    "6xl": { fontSize: "3.75rem", lineHeight: "1rem" }, // 60px, 1px
    "7xl": { fontSize: "4.5rem", lineHeight: "1rem" }, // 72px, 1px
    "8xl": { fontSize: "6rem", lineHeight: "1rem" }, // 96px, 1px
    "9xl": { fontSize: "8rem", lineHeight: "1rem" }, // 128px, 1px
  },
  colors: {},
} as const

export const commonTokens: Partial<AliasToken> = {
  fontSizeHeading1: customTokens.fontSize["3xl"].fontSize as unknown as number,
  fontSizeHeading2: customTokens.fontSize["2xl"].fontSize as unknown as number,
  fontSizeHeading3: customTokens.fontSize.xl.fontSize as unknown as number,
  fontSizeHeading4: customTokens.fontSize.lg.fontSize as unknown as number,
  fontSizeHeading5: customTokens.fontSize.base.fontSize as unknown as number,
}
export const lightColorTokens: Partial<AliasToken> = {
  colorBorderSecondary: "#f0f0f0",
}

export const darkColorTokens: Partial<AliasToken> = {
  colorBorderSecondary: "#27272a",
}

export type { AliasToken }

export type CustomAliasTokens = typeof customTokens
