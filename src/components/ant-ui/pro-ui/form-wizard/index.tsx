"use client"

import { createStyles } from "antd-style"
import { ReactNode } from "react"
import { FormProvider } from "taurus-form"

import { getDimensionToken } from "../../ui/utils"

export interface FormWizardProviderProps {
  children: ReactNode
}

const FormWizardProvider = ({ children }: FormWizardProviderProps) => {
  const { styles } = useStyles()

  return (
    <FormProvider
      classNames={{
        message: styles.message,
        description: styles.description,
        label: styles.label,
      }}
      // hooks={{
      //   input(args) {
      //     return {
      //       status: args.error ? "error" : undefined,
      //     }
      //   },
      // }}
    >
      {children}
    </FormProvider>
  )
}

const useStyles = createStyles(({ token }) => {
  return {
    message: {
      fontSize: "0.75rem",
      fontWeight: 400,
      color: token.colorError,
      margin: `${getDimensionToken(token.spacing[1])} 0 0`,
    },
    label: {
      fontSize: token.fontSize,
      fontWeight: 400,
      lineHeight: token.lineHeight,
    },
    description: {
      fontSize: token.fontSize,
      fontWeight: 400,
      color: token.colorTextDisabled,
    },
  }
})

export default FormWizardProvider
