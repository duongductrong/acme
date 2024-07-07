import { useContext } from "react"
import { PageContext } from "./page-context"

export const usePageContext = () => {
  return useContext(PageContext)
}
