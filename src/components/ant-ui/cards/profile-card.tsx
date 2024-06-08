import { createStyles } from "antd-style"
import Avatar from "antd/es/avatar"
import Flex from "antd/es/flex"
import Typography from "antd/es/typography"
import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from "react"

export interface ProfileCardProps extends Omit<ComponentPropsWithoutRef<typeof Flex>, "children"> {
  avatar?: ReactNode | string
  name: string
  email: string

  icon?: ReactNode
}

const Text = Typography.Text

export const ProfileCard = forwardRef<ElementRef<typeof Flex>, ProfileCardProps>(
  ({ avatar, icon, email, name, ...props }, ref) => {
    const { cx, styles } = useStyles()
    return (
      <Flex align="center" gap={12} {...props} ref={ref}>
        <Avatar
          shape="square"
          size={32}
          src={typeof avatar === "string" ? avatar : undefined}
          icon={avatar}
        />

        <Flex className={cx(styles.content)} vertical>
          <Text>{name}</Text>
          <Text>{email}</Text>
        </Flex>

        {icon}
      </Flex>
    )
  },
)

export const useStyles = createStyles(({ token }) => ({
  content: {
    ".ant-typography": {
      lineHeight: 1.25,

      "&:nth-child(2)": {
        color: token.colorTextSecondary,
      },
    },
  },
}))

ProfileCard.displayName = "ProfileCard"
