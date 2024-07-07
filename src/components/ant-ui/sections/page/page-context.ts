import { createContext } from "react"

export interface PageContext {
  noPageHeader: boolean
}

export const PageContext = createContext<PageContext>({} as PageContext)
