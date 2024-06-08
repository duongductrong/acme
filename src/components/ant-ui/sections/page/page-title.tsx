"use client"
import { useTokens } from "@/components/ant-ui/theme/hooks"
import { createStyles } from "antd-style"
import Flex from "antd/es/flex"
import Typography from "antd/es/typography"
import { ReactElement, ReactNode, cloneElement } from "react"

const Title = Typography.Title
const Text = Typography.Text

export interface PageTitleProps {
  title: string
  description: string
  children?: ReactNode

  toolbar?: ReactNode
}

export const PageTitle = ({ title, description, toolbar }: PageTitleProps) => {
  const { cx, styles } = useStyles()
  const { extendTokens } = useTokens()

  return (
    <Flex component="header" className={cx(styles.root)}>
      <Flex vertical gap={extendTokens.spacing[2]}>
        <Title level={2}>{title}</Title>
        <Text>{description}</Text>
      </Flex>

      {toolbar ? cloneElement(toolbar as ReactElement, { className: cx(styles.toolbar) }) : null}
    </Flex>
  )
}

const useStyles = createStyles(({ token }) => ({
  root: {
    "h1,h2,h3,h4,h5,h6": {
      margin: token.spacing[0],
    },
  },
  toolbar: {
    marginLeft: "auto",
  },
}))
