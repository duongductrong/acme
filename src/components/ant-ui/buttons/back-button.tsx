import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { Button } from "../ui/button"
import { Flex } from "../ui/flex"

export interface BackButtonProps {
  label?: string
}

export const BackButton = ({ label = "Go back" }: BackButtonProps) => {
  const router = useRouter()

  return (
    <Flex gap={12} align="center">
      <Button
        type="default"
        style={{ width: 32, height: 32, padding: 0 }}
        onClick={() => router.back()}
      >
        <ArrowLeft width={16} height={16} />
      </Button>

      {label}
    </Flex>
  )
}
