"use client"

import { PageBody, PageTitle } from "@/components/ant-ui/sections/page"
import { useTokens } from "@/components/ant-ui/theme/hooks"
import { Button } from "@/components/ant-ui/ui/button"
import { Flex } from "@/components/ant-ui/ui/flex"
import { Col, Row } from "@/components/ant-ui/ui/grid"
import { ReloadOutlined } from "@ant-design/icons"
import { Spin } from "antd"
import Card from "antd/es/card/Card"
import { Book } from "lucide-react"
import dynamic from "next/dynamic"

const AreaChart = dynamic(
  () => import("../components/area-chart").then(({ AreaChart }) => AreaChart),
  { ssr: false, loading: () => <Spin /> },
)
const ColumnChart = dynamic(
  () => import("../components/column-chart").then(({ ColumnChart }) => ColumnChart),
  { ssr: false, loading: () => <Spin /> },
)
const PieChart = dynamic(() => import("../components/pie-chart").then(({ PieChart }) => PieChart), {
  ssr: false,
  loading: () => <Spin />,
})

export interface DashboardPageProps {}

const DashboardPage = (props: DashboardPageProps) => {
  const { extendTokens } = useTokens()

  return (
    <PageBody component={Flex} gap={extendTokens.spacing[4]} vertical>
      <PageTitle
        title="Dashboard Metrics"
        description="Overview of our sales pipeline, customer demographics, product subscriptions, and more."
        toolbar={
          <Flex gap={extendTokens.spacing[2]}>
            <Button icon={<ReloadOutlined />}>Refresh data</Button>
            <Button type="primary" icon={<Book size={16} />}>
              Add report
            </Button>
          </Flex>
        }
      />

      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Card>
            <AreaChart />
          </Card>
        </Col>
        <Col span={12}>
          <Card>
            <ColumnChart />
          </Card>
        </Col>
        <Col span={12}>
          <Card>
            <PieChart />
          </Card>
        </Col>
      </Row>
    </PageBody>
  )
}

export default DashboardPage
