"use client"

import { createStyles } from "antd-style"
import { File, Folder } from "lucide-react"
import { Flex } from "../ui/flex"
import { Text, Title } from "../ui/typography"

export interface FileCardProps {
  type: "file" | "folder"
  minHeight?: number
  filename: string
  mimetype?: string
  originalSize?: number
}

export const FileCard = ({
  type,
  minHeight = 135,
  filename,
  mimetype,
  originalSize,
}: FileCardProps) => {
  const { cx, styles } = useStyles({ thumbnailMinHeight: minHeight })
  const size = `${Number(originalSize) / 1024}MB`
  return (
    <Flex className={cx(styles.root)} gap={8} vertical>
      <Flex className={cx(styles.thumbnail)} align="center" justify="center">
        {type === "file" ? <File size={32} /> : <Folder size={32} />}
      </Flex>
      <Flex className={cx(styles.content)} gap={4} vertical>
        <Title level={5} className={cx(styles.filename)}>
          {filename}
        </Title>
        {mimetype || originalSize ? (
          <Text className={cx(styles.description)}>
            {[mimetype, size].filter(Boolean).join(", ")}
          </Text>
        ) : null}
      </Flex>
    </Flex>
  )
}

interface UseStylesProps {
  thumbnailMinHeight: number
}

const useStyles = createStyles(({ token }, props: UseStylesProps) => ({
  root: {},

  thumbnail: {
    borderRadius: token.borderRadius,
    background: token.colorBorderSecondary,
    width: "100%",
    minHeight: props.thumbnailMinHeight || 135,
    color: token.colorIcon,
    cursor: "pointer",
  },

  content: {},

  filename: {
    margin: "0!important",
    fontWeight: "500!important",
    lineClamp: 1,
    display: "-webkit-box",
    WebkitLineClamp: 1,
    WebkitBoxOrient: "vertical",
    textOverflow: "ellipsis",
    overflow: "hidden",
  },

  description: {
    color: token.colorTextSecondary,
    fontSize: 12,
  },
}))
