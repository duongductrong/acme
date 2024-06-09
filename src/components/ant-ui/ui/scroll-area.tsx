import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"
import { createStyles } from "antd-style"
import { ReactNode } from "react"

export interface ScrollAreaProps {
  children: ReactNode
}

export const ScrollArea = ({ children }: ScrollAreaProps) => {
  const { cx, styles } = useStyles()
  return (
    <ScrollAreaPrimitive.Root>
      <ScrollAreaPrimitive.Viewport className="h-full w-full rounded">
        {children}
      </ScrollAreaPrimitive.Viewport>

      <ScrollAreaPrimitive.Scrollbar
        className={cx(styles.verticalScrollbar)}
        orientation="vertical"
      >
        <ScrollAreaPrimitive.Thumb className={cx(styles.thumb)} />
      </ScrollAreaPrimitive.Scrollbar>

      <ScrollAreaPrimitive.Scrollbar orientation="horizontal">
        <ScrollAreaPrimitive.Thumb className={cx(styles.thumb)} />
      </ScrollAreaPrimitive.Scrollbar>

      <ScrollAreaPrimitive.Corner className={cx(styles.corner)} />
    </ScrollAreaPrimitive.Root>
  )
}

const useStyles = createStyles(({ token }) => ({
  thumb: {
    background: token.colorBorderSecondary,
    borderRadius: 8,
  },
  verticalScrollbar: {
    width: 6,
    borderRadius: 8,
  },

  corner: {},
}))
