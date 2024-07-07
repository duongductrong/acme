"use client"

import { Field } from "@/components/ant-ui/pro-ui/form-wizard/field"
import { PageCard } from "@/components/ant-ui/sections/page"
import { customTokens } from "@/components/ant-ui/theme/tokens"
import { Button } from "@/components/ant-ui/ui/button"
import { Flex } from "@/components/ant-ui/ui/flex"
import { Col, Row } from "@/components/ant-ui/ui/grid"
import { createStyles } from "antd-style"
import Image from "next/image"

export interface BasicInformationProps {}

const BasicInformation = (props: BasicInformationProps) => {
  const { cx, styles } = useStyles()

  return (
    <PageCard
      title="Account profile"
      description="Your personal account"
      component={Flex}
      gap={16}
      vertical
    >
      <Image
        src="https://avatars.githubusercontent.com/u/39333905?s=400&u=eec83eb64c0c1f73ba467249011b85775b0d0342&v=4"
        alt="Avatar"
        width={150}
        height={150}
        className={cx(styles.avatar)}
      />

      <Row gutter={[customTokens.spacing[4], customTokens.spacing[4]]}>
        <Col span={12}>
          <Field
            label="First name"
            name="firstName"
            component="text"
            placeholder="Enter your first name"
          />
        </Col>
        <Col span={12}>
          <Field
            label="Last name"
            name="lastName"
            component="text"
            placeholder="Enter your last name"
          />
        </Col>
        <Col span={24}>
          <Field
            label="Email"
            name="email"
            component="text"
            placeholder="Enter your email"
            value="example-email-2@gmail.com"
            disabled
          />
        </Col>
        <Col span={24}>
          <Button type="primary">Save changes</Button>
        </Col>
      </Row>
    </PageCard>
  )
}

const useStyles = createStyles(({}) => ({
  avatar: {
    width: 150,
    height: 150,
    borderRadius: "100%",
    cursor: "pointer",
  },
}))

export default BasicInformation
