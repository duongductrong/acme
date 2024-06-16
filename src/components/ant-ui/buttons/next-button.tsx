import { ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { Button } from "../ui/button"
import { Flex } from "../ui/flex"

export interface NextButtonProps {
  label?: string
}

export const NextButton = ({ label = "Next" }: NextButtonProps) => {
  const router = useRouter()

  return (
    <Flex gap={12} align="center">
      {label}

      <Button
        type="default"
        style={{ width: 32, height: 32, padding: 0 }}
        onClick={() => router.back()}
      >
        <ArrowRight width={16} height={16} />
      </Button>
    </Flex>
  )
}
