"use client"

import "taurus-form"

import { InputNumberProps, InputProps, SelectProps } from "antd"
import { createStyles } from "antd-style"
import dynamic from "next/dynamic"
import { ReactNode } from "react"
import { FormProvider } from "taurus-form"

import { getDimensionToken } from "../../ui/utils"

const Input = dynamic(() => import("antd/es/input/Input"), { ssr: true })
const InputNumber = dynamic(() => import("antd/es/input-number"), { ssr: true })
const Select = dynamic(() => import("antd/es/select"), { ssr: true })

export interface FieldInputProps extends InputProps {
  component: "text"
}
export interface FieldInputNumberProps extends InputNumberProps {
  component: "number"
}

export interface FieldSelectProps extends SelectProps {
  component: "select"
}
export type FieldInputUnion = FieldInputProps | FieldInputNumberProps | FieldSelectProps

declare module "taurus-form" {
  interface FieldProps {
    component: "text" | "number" | "select"
    // variant: FieldInputUnion
  }

  interface CustomFormComponent {
    text: typeof Input
    number: typeof InputNumber
    select: typeof Select
  }
}

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
      forwardPropsFns={{
        input(args) {
          return {
            status: args.error ? "error" : undefined,
          }
        },
      }}
      components={{
        number: InputNumber,
        select: Select,
        text: Input,
      }}
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
