import { ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { Button } from "../ui/button"

export interface NextButtonProps {
  label?: string
}

export const NextButton = ({ label = "Next" }: NextButtonProps) => {
  const router = useRouter()

  return (
    <div className="flex flex-row items-center gap-3">
      {label}

      <Button className="size-8 p-0" onClick={() => router.back()}>
        <ArrowRight width={16} height={16} />
      </Button>
    </div>
  )
}
