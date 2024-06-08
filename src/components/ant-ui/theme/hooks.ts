import { useAntdToken } from "antd-style"
import { customTokens } from "./tokens"

export const useTokens = () => {
  const tokens = useAntdToken()

  return { tokens, extendTokens: customTokens }
}
