import { Text } from "@/components/ant-ui/ui/typography"
import { SlackOutlined } from "@ant-design/icons"
import { Flex } from "antd"
import { createStyles } from "antd-style"
import { ChevronsUpDown } from "lucide-react"
import { ComponentPropsWithoutRef } from "react"

export interface BrandNameProps extends Omit<ComponentPropsWithoutRef<typeof Flex>, "children"> {}

const BrandName = ({ className, ...props }: BrandNameProps) => {
  const { cx, styles } = useStyles()
  return (
    <Flex {...props} className={cx(styles.root, className)} align="center" gap={12}>
      <span className={cx(styles.logo)}>
        <SlackOutlined width={24} height={24} />
      </span>
      <Text>Acme Corp.</Text>

      <button type="button" className={cx(styles.themeMode)}>
        <ChevronsUpDown size={16} />
      </button>
    </Flex>
  )
}

const useStyles = createStyles(({ token, isDarkMode }) => ({
  root: {
    width: "100%",
    fontWeight: "600",
  },

  logo: {
    width: token.sizeXL,
    height: token.sizeXL,
    display: "grid",
    placeItems: "center",
    background: token.colorPrimary,
    borderRadius: token.borderRadiusLG,
    color: token.colorWhite,
    cursor: "pointer",
  },

  themeMode: {
    background: "none",
    border: "none",
    marginLeft: "auto",
    cursor: "pointer",
    display: "grid",
    placeItems: "center",
    color: token.colorTextDisabled,
  },
}))

export default BrandName
