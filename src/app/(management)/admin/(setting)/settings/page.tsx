import { PAGE_URLS } from "@/constants/urls"
import { redirect } from "next/navigation"
import React from "react"

type Props = {}

const Page = (props: Props) => redirect(PAGE_URLS.ADMIN.SETTINGS_PROFILE)

export default Page
