import { UserOutlined } from "@ant-design/icons"
import { Flex, Typography } from "antd"
import { createStyles } from "antd-style"
import Avatar from "antd/es/avatar/avatar"
import { ComponentPropsWithoutRef } from "react"

const Text = Typography.Text

export interface ProfileBarProps extends Omit<ComponentPropsWithoutRef<typeof Flex>, "children"> {}

const ProfileBar = ({ className, ...props }: ProfileBarProps) => {
  const { cx, styles } = useStyles()
  return (
    <Flex {...props} className={cx(styles.root, className)} align="center" gap={12}>
      <Avatar shape="square" size={32} icon={<UserOutlined />} />

      <Flex className={cx(styles.content)} vertical>
        <Text>Taurus</Text>
        <Text>taurus@gmail.com</Text>
      </Flex>
    </Flex>
  )
}

const useStyles = createStyles(({ token }) => ({
  root: {
    height: 64,
    padding: token.paddingSM,
    paddingInline: token.paddingMD,
  },

  content: {
    ".ant-typography": {
      lineHeight: 1.25,

      "&:nth-child(2)": {
        color: token.colorTextSecondary,
      },
    },
  },
}))

export default ProfileBar
