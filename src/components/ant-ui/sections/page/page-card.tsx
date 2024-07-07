"use client"

import { ForwardRefComponent } from "@/types/react-polymorphic"
import { createStyles } from "antd-style"
import { ComponentPropsWithoutRef, forwardRef } from "react"
import { Flex } from "../../ui/flex"
import { Text, Title } from "../../ui/typography"
import { getDimensionToken } from "../../ui/utils"
import { useCommonPageStyles } from "./use-page-styles"

export interface PageCardProps extends ComponentPropsWithoutRef<"div"> {
  withGapBottom?: boolean

  title?: string
  description?: string
}

export const PageCard = forwardRef(
  (
    { className, children, component: Comp = "div", withGapBottom, title, description, ...props },
    ref,
  ) => {
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
      >
        {title || description ? (
          <Flex vertical>
            <Title level={2}>{title}</Title>
            <Text>{description}</Text>
          </Flex>
        ) : null}
        {children}
      </Comp>
    )
  },
) as ForwardRefComponent<"div", PageCardProps>

PageCard.displayName = "PageCard"

const useStyles = createStyles(({ token }) => {
  const paddingBlock = getDimensionToken(token.Page.paddingBlockBase)
  const paddingInline = getDimensionToken(token.Page.paddingInlineBase)
  return {
    root: {
      "h1,h2,h3,h4,h5,h6": {
        margin: token.spacing[0],
      },

      padding: `${paddingBlock} ${paddingInline} 0 ${paddingInline}`,
    },
  }
})
