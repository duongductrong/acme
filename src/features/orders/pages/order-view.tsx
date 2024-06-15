import { PageBody } from "@/components/ant-ui/sections/page"

export interface OrderViewProps {
  id: string
}

const OrderView = ({ id }: OrderViewProps) => {
  return <PageBody variant="container">Order view</PageBody>
}

export default OrderView
