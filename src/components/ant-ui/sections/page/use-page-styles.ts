import { createStyles } from "antd-style"
import { getDimensionToken } from "../../ui/utils"

export const useCommonPageStyles = createStyles(({ token }) => {
  const paddingBlock = getDimensionToken(token.Page.paddingBlockBase)
  const paddingInline = getDimensionToken(token.Page.paddingInlineBase)

  return {
    withGapBottom: {
      paddingBottom: paddingBlock,
    },
  }
})
