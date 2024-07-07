"use client"

import { PageBody, PageTitle } from "@/components/ant-ui/sections/page"
import { Form } from "hookform-field"
import BasicInformation from "./components/basic-information"
import PasswordSecure from "./components/password-secure"
import { Flex } from "@/components/ant-ui/ui/flex"
import { customTokens } from "@/components/ant-ui/theme/tokens"

export interface AccountProfileProps {}

const AccountProfile = (props: AccountProfileProps) => {
  return (
    <Form>
      <PageBody variant="container">
        <Flex vertical gap={customTokens.spacing[10]}>
          <BasicInformation />
          <PasswordSecure />
        </Flex>
      </PageBody>
    </Form>
  )
}

export default AccountProfile
