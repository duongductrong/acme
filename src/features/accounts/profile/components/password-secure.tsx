"use client"

import { Field } from "@/components/ant-ui/pro-ui/form-wizard/field"
import { PageCard } from "@/components/ant-ui/sections/page"
import { customTokens } from "@/components/ant-ui/theme/tokens"
import { Button } from "@/components/ant-ui/ui/button"
import { Flex } from "@/components/ant-ui/ui/flex"
import { Col, Row } from "@/components/ant-ui/ui/grid"

export interface PasswordSecureProps {}

const PasswordSecure = (props: PasswordSecureProps) => {
  return (
    <PageCard
      component={Flex}
      gap={customTokens.spacing[4]}
      title="Security"
      description="Manage security of account."
      vertical
    >
      <Row gutter={[customTokens.spacing[4], customTokens.spacing[4]]}>
        <Col span={24}>
          <Field
            label="Current password"
            name="currentPassword"
            component="text"
            placeholder="Enter your current password"
          />
        </Col>
        <Col span={24}>
          <Field
            label="New Password"
            name="newPassword"
            component="text"
            placeholder="Enter your new password"
          />
        </Col>
        <Col span={24}>
          <Field
            label="Confirm Password"
            name="confirmNewPassword"
            component="text"
            placeholder="Enter new password again"
          />
        </Col>
        <Col span={24}>
          <Button type="primary">Update password</Button>
        </Col>
      </Row>
    </PageCard>
  )
}

export default PasswordSecure
