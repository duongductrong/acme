import { BackButton } from "@/components/buttons/back-button"
import { PAGE_URLS } from "@/constants/urls"
import { Flex } from "antd"
import { createStyles } from "antd-style"
import { ComponentPropsWithoutRef } from "react"

export interface HeaderProps extends Omit<ComponentPropsWithoutRef<typeof Flex>, "children"> {}

const Header = ({ className, ...props }: HeaderProps) => {
  const { cx, styles } = useStyles()

  return (
    <Flex {...props} className={cx(styles.root, className)} align="center" gap={12}>
      <BackButton to={PAGE_URLS.ADMIN.DASHBOARD} />
    </Flex>
  )
}

const useStyles = createStyles(({ token, isDarkMode }) => ({
  root: {
    width: "100%",
    fontWeight: "500",
    fontSize: token.fontSize,
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

export default Header
