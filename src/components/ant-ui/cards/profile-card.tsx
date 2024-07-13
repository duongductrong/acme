import { cn } from "@/lib/tailwind"
import { createStyles } from "antd-style"
import Flex from "antd/lib/flex"
import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from "react"
import { Avatar } from "../ui/avatar"

export interface ProfileCardProps extends Omit<ComponentPropsWithoutRef<"div">, "children"> {
  avatar?: ReactNode | string
  name: string
  email: string

  icon?: ReactNode
}

export const ProfileCard = forwardRef<ElementRef<"div">, ProfileCardProps>(
  ({ avatar, icon, email, name, className, ...props }, ref) => {
    const { cx, styles } = useStyles()
    return (
      <div className={cn("flex items-center gap-3", className)} {...props} ref={ref}>
        <Avatar src={typeof avatar === "string" ? avatar : undefined} icon={avatar} />

        <Flex className={cx(styles.content)} vertical>
          <p className="text-[13px] font-medium">{name}</p>
          <p className="text-[13px] font-normal">{email}</p>
        </Flex>

        {icon}
      </div>
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
