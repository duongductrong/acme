import { useThemeMode } from "antd-style"
import Switch from "antd/lib/switch"
import { Tooltip } from "../ui/tooltip"

export interface ThemeSwitcherProps {
  withoutStopPropagation?: boolean
}

export const ThemeSwitcher = ({ withoutStopPropagation, ...props }: ThemeSwitcherProps) => {
  const { setAppearance, setThemeMode } = useThemeMode()

  return (
    <Tooltip title="Coming soon">
      <Switch
        {...props}
        size="small"
        onChange={(isChecked) => {
          const mode = isChecked ? "dark" : "light"
          setAppearance(mode)
          setThemeMode(mode)
        }}
        onClick={(_, event) => {
          if (!withoutStopPropagation) {
            event.stopPropagation()
          }
        }}
        disabled
      />
    </Tooltip>
  )
}
