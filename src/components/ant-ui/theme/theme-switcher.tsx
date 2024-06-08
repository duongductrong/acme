import { useThemeMode } from "antd-style"
import Switch from "antd/es/switch"

export interface ThemeSwitcherProps {
  withoutStopPropagation?: boolean
}

export const ThemeSwitcher = ({ withoutStopPropagation, ...props }: ThemeSwitcherProps) => {
  const { setAppearance, setThemeMode } = useThemeMode()

  return (
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
    />
  )
}
