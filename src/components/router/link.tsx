import type { LinkProps as NextLinkProps } from "next/link"
import NextLink from "next/link"
import { ElementRef, ReactNode, forwardRef } from "react"

export interface LinkProps extends NextLinkProps {
  children?: ReactNode
}

export const Link = forwardRef<ElementRef<typeof NextLink>, LinkProps>((props, ref) => {
  return <NextLink {...props} ref={ref} />
})

Link.displayName = "Link"
