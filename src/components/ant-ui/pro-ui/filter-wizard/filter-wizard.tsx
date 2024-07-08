import { createStyles } from "antd-style"
import Popover from "antd/lib/popover"
import { CSSProperties, ReactNode } from "react"
import { Button } from "../../ui/button"
import { Flex } from "../../ui/flex"
import { ScrollArea } from "../../ui/scroll-area"

export type FilterWizardAttributeType =
  | "text"
  | "select"
  | "timestamp"
  | "number"
  | "date"
  | "multi-select"

export interface FilterWizardAttribute {
  icon: ReactNode
  key: string
  label: string
  type: FilterWizardAttributeType
}

export interface FilterWizardProps {
  icon?: ReactNode
  label?: string

  attributes: FilterWizardAttribute[]
}

export const FilterWizard = ({ icon, label = "Filter", attributes }: FilterWizardProps) => {
  const { cx, styles } = useStyles()
  return (
    <Flex>
      <Popover
        overlayClassName={cx(styles.popover)}
        content={
          <ScrollArea>
            <Flex
              style={{ "--filter-wizard-max-height": "400px" } as CSSProperties}
              className={cx(styles.attributes)}
              vertical
            >
              {attributes.map((attribute) => (
                <Button
                  key={attribute.key}
                  icon={attribute.icon}
                  type="text"
                  style={{ justifyContent: "start" }}
                >
                  {attribute.label}
                </Button>
              ))}
            </Flex>
          </ScrollArea>
        }
        title="Filter attributes"
        trigger={["click"]}
        placement="bottomLeft"
      >
        <Button icon={icon} prefix={"123"}>
          {label}
        </Button>
      </Popover>
    </Flex>
  )
}

export const useStyles = createStyles(({ token }) => ({
  popover: {
    width: 275,
    ".ant-popover-content": {
      ".ant-popover-inner": {
        padding: token.paddingXS,

        ".ant-popover-title": {
          paddingLeft: 8,
          fontWeight: 400,
          fontSize: 12,
        },
      },
    },
  },

  attributes: {
    maxHeight: `var(--filter-wizard-max-height)`,
    // overflow: "auto",

    ".ant-btn": {
      fontWeight: 500,
      paddingInline: 8,
      height: 30,
    },
  },
}))
