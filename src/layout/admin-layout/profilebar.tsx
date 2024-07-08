import { ProfileCard } from "@/components/ant-ui/cards/profile-card"
import { ThemeSwitcher } from "@/components/ant-ui/theme/theme-switcher"
import { UserOutlined } from "@ant-design/icons"
import { createStyles } from "antd-style"
import Dropdown from "antd/lib/dropdown/dropdown"
import Flex from "antd/lib/flex"
import { MenuProps } from "antd/lib/menu"
import Typography from "antd/lib/typography"
import { ChevronsUpDown } from "lucide-react"
import { ComponentPropsWithoutRef, useMemo } from "react"

const Text = Typography.Text

export interface ProfileBarProps extends Omit<ComponentPropsWithoutRef<typeof Flex>, "children"> {}

const ProfileBar = ({ className, ...props }: ProfileBarProps) => {
  const { cx, styles } = useStyles()

  const items: MenuProps["items"] = useMemo(
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
    <Dropdown trigger={["click"]} menu={{ items }} placement="bottomRight">
      <ProfileCard
        {...props}
        name="Taurus"
        email="taurus@gmail.com"
        avatar={<UserOutlined />}
        icon={
          <button className={cx(styles.dropdown)}>
            <ChevronsUpDown size={16} />
          </button>
        }
        className={cx(styles.root, className)}
      />
    </Dropdown>
  )
}

const useStyles = createStyles(({ token, isDarkMode }) => ({
  root: {
    cursor: "pointer",
    color: token.colorTextBase,
  },

  content: {
    ".ant-typography": {
      lineHeight: 1.25,

      "&:nth-child(2)": {
        color: token.colorTextSecondary,
      },
    },
  },

  dropdown: {
    background: "none",
    border: "none",
    marginLeft: "auto",
    cursor: "pointer",
    display: "grid",
    placeItems: "center",
    svg: {
      color: token.colorTextDisabled,
    },
  },
}))

export default ProfileBar
