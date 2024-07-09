import { Switch } from "@/components/ui/switch"
import { useThemeMode } from "antd-style"
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
        onChange={(isChecked) => {
          const mode = isChecked ? "dark" : "light"
          setAppearance(mode)
          setThemeMode(mode)
        }}
        onClick={(event) => {
          if (!withoutStopPropagation) {
            event.stopPropagation()
          }
        }}
      />
    </Tooltip>
  )
}
