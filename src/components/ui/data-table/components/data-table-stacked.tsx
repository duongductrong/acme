import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react"
import { cn } from "@/lib/tailwind"

export interface DataTableStackedProps extends ComponentPropsWithoutRef<"div"> {
  fullWidth?: boolean
}

export const DataTableStacked = forwardRef<ElementRef<"div">, DataTableStackedProps>(
  ({ className, fullWidth, ...props }, ref) => (
    <div
      {...props}
      ref={ref}
      className={cn("flex items-center gap-2", fullWidth ? "w-full" : null, className)}
    />
  ),
)
DataTableStacked.displayName = "DataTableStacked"
