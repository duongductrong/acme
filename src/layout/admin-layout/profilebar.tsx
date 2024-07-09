import { ProfileCard } from "@/components/ant-ui/cards/profile-card"
import { ThemeSwitcher } from "@/components/ant-ui/theme/theme-switcher"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/tailwind"
import { UserOutlined } from "@ant-design/icons"
import Flex from "antd/lib/flex"
import Typography from "antd/lib/typography"
import { ChevronsUpDown } from "lucide-react"
import { ComponentPropsWithoutRef, useMemo } from "react"

const Text = Typography.Text

export interface ProfileBarProps extends Omit<ComponentPropsWithoutRef<typeof Flex>, "children"> {}

const ProfileBar = ({ className, ...props }: ProfileBarProps) => {
  const items: any[] = useMemo(
    () => [
      {
        key: "profile",
        label: <ProfileCard name="Taurus" email="taurus@gmail.com" avatar={<UserOutlined />} />,
      },
      {
        key: "account",
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
            Account
          </a>
        ),
      },
      {
        key: "billing",
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
            Billing
          </a>
        ),
      },
      {
        key: "notification",
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
            Notification
          </a>
        ),
      },
      {
        key: "theme",
        label: (
          <Flex justify="space-between">
            <span>Dark mode</span>
            <ThemeSwitcher />
          </Flex>
        ),
      },
      {
        type: "divider",
      },
      {
        key: "sign out",
        label: "Sign out",
      },
    ],
    [],
  )

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <ProfileCard
          {...props}
          name="Taurus"
          email="taurus@gmail.com"
          avatar={<UserOutlined />}
          icon={
            <button className={cn("ml-auto")}>
              <ChevronsUpDown size={16} />
            </button>
          }
          className="w-full cursor-pointer"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-[225px]">
        {items.map((item) => (
          <DropdownMenuItem key={item?.key as string} className="cursor-pointer">
            {item.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ProfileBar
