import { ProfileCard } from "@/components/ant-ui/cards/profile-card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ThemeSwitcher } from "@/components/ui/theme/theme-switcher"
import { cn } from "@/lib/tailwind"
import Flex from "antd/lib/flex"
import Typography from "antd/lib/typography"
import { ChevronsUpDown, User, User2 } from "lucide-react"
import { ComponentPropsWithoutRef, useMemo } from "react"

const Text = Typography.Text

export interface ProfileBarProps extends Omit<ComponentPropsWithoutRef<typeof Flex>, "children"> {}

const ProfileBar = ({ className, ...props }: ProfileBarProps) => {
  const items: any[] = useMemo(
    () => [
      {
        key: "profile",
        label: <ProfileCard name="Taurus" email="taurus@gmail.com" avatar={<User2 />} />,
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
          <div className="flex w-full items-center justify-between">
            <span>Dark mode</span>
            <ThemeSwitcher />
          </div>
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
          avatar={<User2 />}
          icon={
            <button className={cn("ml-auto")}>
              <ChevronsUpDown size={16} />
            </button>
          }
          className="w-full cursor-pointer"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-[225px]">
        {items.map((item, index) => (
          <DropdownMenuItem key={(item?.key as string) || `${index}`} className="cursor-pointer">
            {item.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ProfileBar
