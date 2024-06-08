"use client"

import { PageBody, PageTitle } from "@/components/ant-ui/sections/page"
import { useTokens } from "@/components/ant-ui/theme/hooks"
import { Card } from "@/components/ant-ui/ui/card"
import { Flex } from "@/components/ant-ui/ui/flex"
import { Segmented } from "@/components/ant-ui/ui/segmented"
import { Table, TableProps } from "@/components/ant-ui/ui/table"
import { Space, Tag } from "antd"
import { createStyles } from "antd-style"

export interface OrderListProps {}

interface DataType {
  key: string
  name: string
  age: number
  address: string
  tags: string[]
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green"
          if (tag === "loser") {
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
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
]

const data: DataType[] = Array(100).fill({
  key: `${new Date().getTime()}.${Math.random()}`,
  name: "Joe Black",
  age: 32,
  address: "Sydney No. 1 Lake Park",
  tags: ["cool", "teacher"],
})

const OrderList = (props: OrderListProps) => {
  const { extendTokens } = useTokens()
  const { cx, styles } = useStyles()

  return (
    <PageBody component={Flex} gap={extendTokens.spacing[4]} vertical>
      <PageTitle title="Orders" description="Manage your orders so easy and quickly" />

      <Flex>
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
      </Flex>

      <Card>
        <Table size="middle" className={cx(styles.table)} columns={columns} dataSource={data} />
      </Card>
    </PageBody>
  )
}

const useStyles = createStyles(({ token }) => ({
  card: {},
  segments: {},
  table: {
    marginTop: token.spacing[4],
  },
}))

export default OrderList
