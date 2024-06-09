import type { LinkProps as NextLinkProps } from "next/link"
import NextLink from "next/link"
import { usePathname } from "next/navigation"

export interface LinkProps extends NextLinkProps {}

export const Link = (props: LinkProps) => {
  const pathname = usePathname()

  return <NextLink {...props} />
}
