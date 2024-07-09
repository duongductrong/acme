import { Slot, SlotProps } from "@radix-ui/react-slot"
import { CSSProperties, ElementRef, forwardRef, useMemo } from "react"

export interface ResponsiveProps extends SlotProps {}

const createScreens = () => {
  const ScreenProvider = () => {
    const styles = useMemo<CSSProperties>(
      () =>
        ({
          "--screen-sm": "640px",
          "--screen-md": "768px",
          "--screen-lg": "1024px",
          "--screen-xl": "1280px",
          "--screen-2xl": "1536px",
        }) as CSSProperties,
      [],
    )

    console.log(styles)
  }

  const ScreenInjector = () => {}

  return {
    ScreenProvider,
    ScreenInjector,
  }
}

const Screener = forwardRef<ElementRef<typeof Slot>, ResponsiveProps>((props, ref) => {
  const styles = useMemo<CSSProperties>(
    () => ({
      ...props.style,
      "--screen-sm": "640px",
      "--screen-md": "768px",
      "--screen-lg": "1024px",
      "--screen-xl": "1280px",
      "--screen-2xl": "1536px",
    }),
    [props.style],
  )

  return <Slot {...props} style={styles} ref={ref} />
})
Screener.displayName = Screener.displayName || "Screener"

export { createScreens }

// <Button variant="string" />
// <Button variant={{ base: "text-sm", md: "text-base" }} />
