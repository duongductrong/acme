import type { LinkProps as NextLinkProps } from "next/link"
import NextLink from "next/link"
import { ElementRef, ReactNode, forwardRef, useMemo } from "react"

export interface LinkProps extends NextLinkProps {
  values?: Record<string, unknown>
  children?: ReactNode
}

const makeUrl = (url: string, base: string) => new URL(url, base)

export const Link = forwardRef<ElementRef<typeof NextLink>, LinkProps>((props, ref) => {
  const { href } = props

  const finalHref = useMemo(
    () => (typeof href === "object" ? href : makeUrl(href, process.env.NEXT_PUBLIC_URL as string)),
    [href],
  )

  return <NextLink {...props} href={finalHref} ref={ref} />
})

Link.displayName = "Link"
