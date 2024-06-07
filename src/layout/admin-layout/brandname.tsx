import { MoonOutlined, SlackOutlined } from "@ant-design/icons"
import { Flex } from "antd"
import { createStyles } from "antd-style"
import { ComponentPropsWithoutRef } from "react"

export interface BrandNameProps extends Omit<ComponentPropsWithoutRef<typeof Flex>, "children"> {}

const BrandName = ({ className, ...props }: BrandNameProps) => {
  const { cx, styles } = useStyles()
  return (
    <Flex {...props} className={cx(styles.root, className)} align="center" gap={12}>
      <span className={cx(styles.logo)}>
        <SlackOutlined width={24} height={24} />
      </span>
      <span>Acme Corp.</span>

      <button type="button" className={cx(styles.themeMode)}>
        <MoonOutlined width={32} height={32} />
      </button>
    </Flex>
  )
}

const useStyles = createStyles(({ token }) => ({
  root: {
    padding: token.paddingSM,
    paddingInline: token.paddingMD,
    fontWeight: "600",
    fontSize: token.fontSize,
    height: 54,
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
  },
}))

export default BrandName
