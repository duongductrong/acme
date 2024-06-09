export interface OrderViewProps {
  id: string
}

const OrderView = ({ id }: OrderViewProps) => {
  return <div>OrderView {id}</div>
}

export default OrderView
