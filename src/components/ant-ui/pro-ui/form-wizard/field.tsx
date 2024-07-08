"use client"

import SkeletonInput from "antd/lib/skeleton/Input"
import dynamic from "next/dynamic"
import { createField } from "hookform-field"

const loading = () => <SkeletonInput size="small" />

// const dynamicForwardRef = <T,>(
//   dynamicOptions: DynamicOptions<T> | Loader<T>,
//   options?: DynamicOptions<T> | undefined,
// ) => {
//   const Comp = dynamic(dynamicOptions, { ssr: true, ...options }) as FC<any>

//   // eslint-disable-next-line react/display-name
//   return forwardRef((props, ref) => <Comp {...props} ref={ref} />)
// }

const Input = dynamic(() => import("antd/lib/input"), { ssr: true, loading: loading })
const Textarea = dynamic(() => import("antd/lib/input/TextArea"), { ssr: true, loading: loading })
const Password = dynamic(() => import("antd/lib/input/Password"), { ssr: true, loading: loading })
const OTP = dynamic(() => import("antd/lib/input/OTP"), { ssr: true, loading: loading })
const Search = dynamic(() => import("antd/lib/input/Search"), { ssr: true, loading: loading })
const InputNumber = dynamic(() => import("antd/lib/input-number"), { ssr: true, loading: loading })
const Select = dynamic(() => import("antd/lib/select/index"), { ssr: true, loading: loading })
const Rate = dynamic(() => import("antd/lib/rate"), { ssr: true, loading: loading })
const Checkbox = dynamic(() => import("antd/lib/checkbox"), { ssr: true, loading: loading })
const Radio = dynamic(() => import("antd/lib/radio"), { ssr: true, loading: loading })
const DatePicker = dynamic(() => import("antd/lib/date-picker"), { ssr: true, loading: loading })
const TimePicker = dynamic(() => import("antd/lib/time-picker"), { ssr: true, loading: loading })

export const Field = createField(
  {
    number: InputNumber,
    select: Select,
    text: Input,
    textarea: Textarea,
    password: Password,
    otp: OTP,
    search: Search,
    rate: Rate,
    checkbox: Checkbox,
    radio: Radio,
    date: DatePicker,
    time: TimePicker,
  },
  {
    classNames: {
      label: "text-sm",
      description: "text-sm",
      input: "",
      message: "text-sm",
    },
  },
)
