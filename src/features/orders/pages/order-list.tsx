"use client"

import { Field } from "@/components/ant-ui/pro-ui/form-wizard/field"
import { PageBody, PageCard, PageFragment, PageTitle } from "@/components/ant-ui/sections/page"
import { Link } from "@/components/router/link"
import { DataTable } from "@/components/ui/data-table"
import { PAGE_URLS } from "@/constants/urls"
import { zodResolver } from "@hookform/resolvers/zod"
import { ColumnDef } from "@tanstack/react-table"
import { Space, Tag } from "antd"
import { Form } from "hookform-field"
import { z } from "zod"

const filterSchema = z.object({ search: z.string().nullish(), showFields: z.any() })

export type FilterSchemaInferred = z.infer<typeof filterSchema>

export interface OrderListProps {}

interface OrderType {
  accessorKey: string
  orderId: string
  customerName: string
  orderDate: string
  status: string
  totalAmount: number
  tags: string[]
}

const columns: ColumnDef<OrderType>[] = [
  {
    header: "Order ID",
    accessorKey: "orderId",
    cell: ({
      getValue,
      cell: {
        row: { original: record },
      },
    }) => (
      <Link
        href={PAGE_URLS.ADMIN.ORDERS_VIEW}
        as={PAGE_URLS.ADMIN.ORDERS_VIEW.replace("[id]", record.orderId)}
      >
        {getValue<string>()}
      </Link>
    ),
  },
  {
    header: "Customer Name",
    accessorKey: "customerName",
  },
  {
    header: "Order Date",
    accessorKey: "orderDate",
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: ({
      getValue,
      cell: {
        row: { original: record },
      },
    }) => {
      const status = getValue<string>()
      let color = status === "Delivered" ? "green" : status === "Pending" ? "geekblue" : "volcano"
      return <Tag color={color}>{status.toUpperCase()}</Tag>
    },
  },
  {
    header: "Total Amount",
    accessorKey: "totalAmount",
    cell: ({
      getValue,
      cell: {
        row: { original: record },
      },
    }) => `$${getValue<number>()?.toFixed(2)}`,
  },
  {
    header: "Tags",
    accessorKey: "tags",
    cell: ({
      getValue,
      cell: {
        row: { original: record },
      },
    }) => (
      <>
        {getValue<string[]>().map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green"
          if (tag === "urgent") {
            color = "volcano"
          }
          return (
            <Tag key={tag} color={color}>
              {tag.toUpperCase()}
            </Tag>
          )
        })}
      </>
    ),
  },
  {
    header: "Action",
    accessorKey: "action",
    cell: ({
      cell: {
        row: { original: record },
      },
    }) => (
      <div className="flex flex-row gap-gap whitespace-nowrap">
        <a>View {record.orderId}</a>
        <a>Delete</a>
      </div>
    ),
  },
]

const data: OrderType[] = Array.from({ length: 100 }, (_, index) => ({
  accessorKey: `ORD${1000 + index}`,
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

const OrderList = (props: OrderListProps) => {
  return (
    <PageFragment>
      <Form<FilterSchemaInferred>
        resolver={zodResolver(filterSchema)}
        onSubmit={(values) => console.log(values)}
        defaultValues={{}}
      >
        <PageBody className="flex flex-col gap-4">
          <PageTitle title="Orders" description="Manage your orders so easy and quickly" />
          <PageCard component="div" className="flex items-center justify-between">
            <div className="flex gap-3">
              <Field component="text" name="search" placeholder="Search..." />
            </div>

            <Field
              component="select"
              name="showFields"
              placeholder="Show fields"
              options={[
                {
                  label: "1",
                  value: "1",
                },
                {
                  label: "2",
                  value: "2",
                },
              ]}
            />
          </PageCard>
          {/* <Table columns={columns} dataSource={data} impact /> */}
          <DataTable columns={columns} data={data} />
        </PageBody>
      </Form>
    </PageFragment>
  )
}

export default OrderList
