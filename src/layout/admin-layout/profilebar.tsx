import { UserOutlined } from "@ant-design/icons"
import { Flex, MenuProps, Typography } from "antd"
import { createStyles } from "antd-style"
import Avatar from "antd/es/avatar/avatar"
import Dropdown from "antd/es/dropdown/dropdown"
import { ChevronsUpDown } from "lucide-react"
import { ComponentPropsWithoutRef } from "react"

const Text = Typography.Text

export interface ProfileBarProps extends Omit<ComponentPropsWithoutRef<typeof Flex>, "children"> {}

const ProfileBar = ({ className, ...props }: ProfileBarProps) => {
  const { cx, styles } = useStyles()

  const items: MenuProps["items"] = [
    {
      key: "profile",
      label: (
        <Flex align="center" gap={12}>
          <Avatar shape="square" size={32} icon={<UserOutlined />} />

          <Flex className={cx(styles.content)} vertical>
            <Text>Taurus</Text>
            <Text>taurus@gmail.com</Text>
          </Flex>
        </Flex>
      ),
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
      type: "divider",
    },
    {
      key: "sign out",
      label: "Sign out",
    },
  ]

  return (
    <Dropdown trigger={["click"]} menu={{ items }} placement="bottomRight">
      <Flex {...props} className={cx(styles.root, className)} align="center" gap={12}>
        <Avatar shape="square" size={32} icon={<UserOutlined />} />

        <Flex className={cx(styles.content)} vertical>
          <Text>Taurus</Text>
          <Text>taurus@gmail.com</Text>
        </Flex>

        <button className={cx(styles.dropdown)}>
          <ChevronsUpDown size={16} />
        </button>
      </Flex>
    </Dropdown>
  )
}

const useStyles = createStyles(({ token }) => ({
  root: {
    height: 64,
    padding: token.paddingSM,
    paddingInline: token.paddingMD,
    cursor: "pointer",
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
