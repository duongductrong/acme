"use client"

import { ForwardRefComponent } from "@/types/react-polymorphic"
import { createStyles } from "antd-style"
import { ComponentPropsWithoutRef, forwardRef } from "react"
import { getDimensionToken } from "../../ui/utils"
import { useCommonPageStyles } from "./use-page-styles"

export interface PageCardProps extends ComponentPropsWithoutRef<"div"> {
  withGapBottom?: boolean
}

export const PageCard = forwardRef(
  ({ className, component: Comp = "div", withGapBottom, ...props }, ref) => {
    const { cx, styles } = useStyles()
    const { styles: commonPageStyles } = useCommonPageStyles()
    return (
      <Comp
        {...props}
        className={cx(
          styles.root,
          withGapBottom ? commonPageStyles.withGapBottom : undefined,
          className,
        )}
        ref={ref}
      />
    )
  },
) as ForwardRefComponent<"div", PageCardProps>

PageCard.displayName = "PageCard"

const useStyles = createStyles(({ token }) => {
  const paddingBlock = getDimensionToken(token.Page.paddingBlockBase)
  const paddingInline = getDimensionToken(token.Page.paddingInlineBase)
  return {
    root: {
      padding: `${paddingBlock} ${paddingInline} 0 ${paddingInline}`,
    },
  }
})
