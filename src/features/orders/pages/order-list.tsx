"use client"

import { PageBody, PageCard, PageFragment, PageTitle } from "@/components/ant-ui/sections/page"
import { Card } from "@/components/ant-ui/ui/card"
import { Flex } from "@/components/ant-ui/ui/flex"
import { Col, Row } from "@/components/ant-ui/ui/grid"
import { Statistic } from "@/components/ant-ui/ui/statistic"
import { Table, TableProps } from "@/components/ant-ui/ui/table"
import { Link } from "@/components/router/link"
import { PAGE_URLS } from "@/constants/urls"
import { Select, SelectProps, Space, Tag } from "antd"
import { createStyles } from "antd-style"
import Input from "antd/es/input/Input"
import { useState } from "react"

export interface OrderListProps {}

interface OrderType {
  key: string
  orderId: string
  customerName: string
  orderDate: string
  status: string
  totalAmount: number
  tags: string[]
}

const columns: TableProps<OrderType>["columns"] = [
  {
    title: "Order ID",
    dataIndex: "orderId",
    key: "orderId",
    render: (text, record) => (
      <Link
        href={PAGE_URLS.ADMIN.ORDERS_VIEW}
        as={PAGE_URLS.ADMIN.ORDERS_VIEW.replace("[id]", record.orderId)}
      >
        {text}
      </Link>
    ),
  },
  {
    title: "Customer Name",
    dataIndex: "customerName",
    key: "customerName",
  },
  {
    title: "Order Date",
    dataIndex: "orderDate",
    key: "orderDate",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status) => {
      let color = status === "Delivered" ? "green" : status === "Pending" ? "geekblue" : "volcano"
      return <Tag color={color}>{status.toUpperCase()}</Tag>
    },
  },
  {
    title: "Total Amount",
    dataIndex: "totalAmount",
    key: "totalAmount",
    render: (amount) => `$${amount?.toFixed(2)}`,
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green"
          if (tag === "urgent") {
            color = "volcano"
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          )
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>View {record.orderId}</a>
        <a>Delete</a>
      </Space>
    ),
  },
]

const data: OrderType[] = Array.from({ length: 100 }, (_, index) => ({
  key: `ORD${1000 + index}`,
  orderId: `ORD${1000 + index}`,
  customerName: `Customer ${index + 1}`,
  orderDate: new Date().toLocaleDateString(),
  status: index % 3 === 0 ? "Delivered" : index % 2 === 0 ? "Pending" : "Cancelled",
  totalAmount: index * 14.2 * 1000,
  tags: index % 2 === 0 ? ["new", "important"] : ["regular", "urgent"],
}))

interface ItemProps {
  label: string
  value: string
}

const options: ItemProps[] = []

for (let i = 10; i < 36; i++) {
  const value = i.toString(36) + i
  options.push({
    label: `Long Label: ${value}`,
    value,
  })
}

const sharedProps: SelectProps = {
  mode: "multiple",
  style: { width: "300px" },
  options,
  placeholder: "Select Item...",
  maxTagCount: "responsive",
}

const OrderList = (props: OrderListProps) => {
  const { cx, styles } = useStyles()

  const [value, setValue] = useState(["a10", "c12", "h17", "j19", "k20"])

  const selectProps: SelectProps = {
    value,
    onChange: setValue,
  }

  return (
    <PageFragment>
      <PageBody component={Flex} impact vertical>
        <PageTitle title="Orders" description="Manage your orders so easy and quickly" isCard />

        <PageCard component={Flex} gap={16} vertical>
          <Row gutter={16}>
            <Col span={4}>
              <Card>
                <Statistic title="Total orders" value={1083} />
              </Card>
            </Col>
            <Col span={4}>
              <Card>
                <Statistic title="Total profit" value={112893} suffix="$" />
              </Card>
            </Col>
          </Row>

          {/* <Flex>
            <Segmented
              defaultValue="All (1002)"
              options={[
                "All (1002)",
                "Completed (600)",
                "Pending (300)",
                "Unfulfilled (0)",
                "Refunded (48)",
                "Failed (2)",
              ]}
            />
          </Flex> */}
        </PageCard>
        <PageCard component={Flex} justify="space-between" withGapBottom>
          <Input placeholder="Search..." style={{ maxWidth: 300 }} />
          <Select {...sharedProps} {...selectProps} placeholder="Show fields" />
        </PageCard>
        <Table className={cx(styles.table)} columns={columns} dataSource={data} impact />
      </PageBody>
    </PageFragment>
  )
}

const useStyles = createStyles(({ token }) => ({
  card: {},
  segments: {},
  table: {},
}))

export default OrderList
