import { Text } from "@/components/ant-ui/ui/typography"
import { cn } from "@/lib/tailwind"
import { Flex } from "antd"
import { ChevronsUpDown, Crown, Vegan } from "lucide-react"
import { ComponentPropsWithoutRef } from "react"

export interface BrandNameProps extends Omit<ComponentPropsWithoutRef<typeof Flex>, "children"> {}

const BrandName = ({ className, ...props }: BrandNameProps) => {
  return (
    <div {...props} className={cn("flex w-full items-center gap-3 font-semibold", className)}>
      <span
        className={cn(
          "flex h-8 w-8 cursor-pointer items-center justify-center rounded-md bg-primary",
        )}
      >
        <Crown width={16} height={16} className="size-4 text-primary-foreground" />
      </span>
      <Text>Acme Corp.</Text>

      <button type="button" className="ml-auto">
        <ChevronsUpDown size={16} className="size-4 text-muted-foreground" />
      </button>
    </div>
  )
}

export default BrandName
