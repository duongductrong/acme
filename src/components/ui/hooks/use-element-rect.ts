"use client"

import { useEffect, useRef, useState } from "react"

export const useElementRect = () => {
  const ref = useRef<any>(null)
  const [size, setSize] = useState<Pick<DOMRect, "x" | "y" | "top" | "left" | "width" | "height">>({
    height: 0,
    left: 0,
    top: 0,
    width: 0,
    x: 0,
    y: 0,
  })

  const handleUpdateSize = () => {
    const el = ref.current as HTMLElement

    if (el) {
      const { x, y, top, left, width, height } = el.getBoundingClientRect()
      setSize({ x, y, top, left, width, height })
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleUpdateSize)

    return () => {
      window.removeEventListener("resize", handleUpdateSize)
    }
  })

  useEffect(() => {
    handleUpdateSize()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current])

  return [ref, size as DOMRect] as const
}
