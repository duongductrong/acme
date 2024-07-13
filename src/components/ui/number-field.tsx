import { ForwardRefComponent } from "@/types/react-polymorphic"
import { ChevronDown, ChevronUp } from "lucide-react"
import { ChangeEvent, ComponentPropsWithoutRef, ElementRef, forwardRef } from "react"
import { tv } from "tailwind-variants"
import { Input, InputProps } from "./input"

export const numberFieldStyles = tv({
  slots: {
    root: "relative overflow-hidden rounded-md",
    input: "pr-10",
    button: "bg-background",
  },
})

interface NumberFieldFormatPercent {
  style: "percent"
}

interface NumberFieldFormatCurrency extends Intl.NumberFormatOptions {
  style: "currency"
  // currency: string
  // currencyCode: string
  // currencyDisplaying: string
}

interface NumberFieldFormatUnit {
  style: "unit"
  unit: string
}

type NumberFieldFormatOptions =
  | NumberFieldFormatCurrency
  | NumberFieldFormatPercent
  | NumberFieldFormatUnit

interface NumberFieldRootProps extends ComponentPropsWithoutRef<"div"> {}

const NumberFieldRoot = forwardRef<ElementRef<"div">, NumberFieldRootProps>(
  ({ className, children, ...props }, ref) => {
    const { root } = numberFieldStyles()
    return (
      <div {...props} ref={ref} className={root({ className })}>
        {children}
      </div>
    )
  },
)

NumberFieldRoot.displayName = "NumberFieldRoot"

interface NumberFieldInputProps extends Omit<InputProps, "type"> {
  formatOptions?: NumberFieldFormatOptions
}

const NumberFieldInput = forwardRef<ElementRef<typeof Input>, NumberFieldInputProps>(
  ({ onChange, value: curValue = "", className, formatOptions, min, max, step, ...props }, ref) => {
    const { input } = numberFieldStyles()

    const decimalSymbol = "."
    const separatorSymbol = ","
    const numeric = /^[0-9]{0,}([,.][0-9]{1,})?$/g
    const prefix = formatOptions?.style === "currency" ? `${formatOptions.currency} ` : ""
    const suffix =
      formatOptions?.style === "percent"
        ? "%"
        : formatOptions?.style === "unit"
          ? formatOptions.unit
          : ""

    const toNumber = (val: string) => Number(cleanSeparator(val))
    const emit = (val: any) => onChange?.(val as unknown as ChangeEvent<HTMLInputElement>)
    const withDecimal = (val: string) => (val.endsWith(decimalSymbol) ? `${val}0` : val)
    const cleanSeparator = (val: string) =>
      val.replace(
        new RegExp(
          `${separatorSymbol}${prefix ? "|" + prefix : ""}${suffix ? "|" + suffix : ""}`,
          "g",
        ),
        "",
      )

    const formatter = (val: string, options?: { prefix?: string; suffix?: string }) => {
      let value = val
      if (formatOptions?.style === "currency") {
        const { style, ...options } = formatOptions
        value = new Intl.NumberFormat("en-US", {
          ...options,
        }).format(toNumber(value))
      }

      return `${options?.prefix}${value}${options?.suffix}`
    }

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
      const originalValue = event.target.value
      const value = cleanSeparator(withDecimal(originalValue))

      if (numeric.test(value) || !value) {
        return emit(formatter(value, { prefix, suffix }))
      }

      return emit(curValue)
    }

    return (
      <Input
        {...props}
        type="text"
        inputMode="numeric"
        aria-roledescription="number field"
        autoComplete="off"
        spellCheck={false}
        className={input({ className })}
        ref={ref}
        value={curValue}
        onChange={handleOnChange}
      />
    )
  },
)
NumberFieldInput.displayName = "NumberFieldInput"

interface NumberFieldButtonProps extends Omit<ComponentPropsWithoutRef<"button">, "type"> {
  slot: "increase" | "decrease"
}

const NumberFieldButton = forwardRef(
  ({ className, slot, component: Comp = "button", ...props }, ref) => {
    const { button } = numberFieldStyles()
    return <Comp {...props} type="button" className={button({ className })} ref={ref} />
  },
) as ForwardRefComponent<"button", NumberFieldButtonProps>

NumberFieldButton.displayName = "NumberFieldButton"

interface NumberFieldProps extends InputProps, Pick<NumberFieldInputProps, "formatOptions"> {}

const NumberField = forwardRef<ElementRef<typeof Input>, NumberFieldProps>(
  ({ className, formatOptions, ...props }, ref) => {
    return (
      <NumberFieldRoot>
        <NumberFieldInput {...props} formatOptions={formatOptions} ref={ref} />
        <div className="absolute right-[1px] top-[1px] flex h-[calc(100%-2px)] flex-col">
          <NumberFieldButton
            className="flex h-full w-8 items-center justify-center border-b border-l"
            slot="increase"
          >
            <ChevronUp className="size-3" />
          </NumberFieldButton>
          <NumberFieldButton
            className="flex h-full w-8 items-center justify-center border-l"
            slot="decrease"
          >
            <ChevronDown className="size-3" />
          </NumberFieldButton>
        </div>
      </NumberFieldRoot>
    )
  },
)
NumberField.displayName = "NumberField"

export type {
  NumberFieldButtonProps,
  NumberFieldInputProps,
  NumberFieldProps,
  NumberFieldRootProps,
}

export { NumberField, NumberFieldRoot, NumberFieldButton, NumberFieldInput }
