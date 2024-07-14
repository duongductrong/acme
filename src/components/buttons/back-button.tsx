"use client"

import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { Button } from "../ui/button"

export interface BackButtonProps {
  label?: string
  to: string
}

export const BackButton = ({ label = "Go back", to }: BackButtonProps) => {
  const router = useRouter()

  return (
    <div className="flex flex-row items-center gap-3">
      <Button
        className="size-8 p-0"
        onClick={() => {
          router.push(to)
        }}
      >
        <ArrowLeft width={16} height={16} />
      </Button>

      {label}
    </div>
  )
}
