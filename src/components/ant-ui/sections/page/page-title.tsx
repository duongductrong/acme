"use client"
import { createStyles } from "antd-style"
import Flex from "antd/es/flex"
import Typography from "antd/es/typography"
import { ReactElement, ReactNode, cloneElement } from "react"
import { getDimensionToken } from "../../ui/utils"
import { useCommonPageStyles } from "./use-page-styles"

const Title = Typography.Title
const Text = Typography.Text

export interface PageTitleProps {
  title: string
  description: string
  children?: ReactNode

  toolbar?: ReactNode

  isCard?: boolean
  withGapBottom?: boolean
}

export const PageTitle = ({
  title,
  description,
  toolbar,
  isCard,
  withGapBottom,
}: PageTitleProps) => {
  const { cx, styles } = useStyles()
  const { styles: commonPageStyles } = useCommonPageStyles()

  return (
    <Flex
      component="header"
      className={cx(
        styles.root,
        isCard ? styles.rootCard : undefined,
        withGapBottom ? commonPageStyles.withGapBottom : undefined,
      )}
    >
      <Flex vertical className={styles.content}>
        <Title level={2}>{title}</Title>
        <Text>{description}</Text>
      </Flex>

      {toolbar ? cloneElement(toolbar as ReactElement, { className: cx(styles.toolbar) }) : null}
    </Flex>
  )
}

const useStyles = createStyles(({ token }) => {
  const { paddingInlineBase, paddingBlockBase } = token.Page

  const paddingBlock = getDimensionToken(paddingBlockBase)
  const paddingInline = getDimensionToken(paddingInlineBase)

  return {
    root: {
      "h1,h2,h3,h4,h5,h6": {
        margin: token.spacing[0],
      },
    },

    rootCard: {
      padding: `${paddingBlock} ${paddingInline} 0 ${paddingInline}`,
    },

    toolbar: {
      marginLeft: "auto",
    },

    content: {
      gap: token.spacing[2],
    },
  }
})
