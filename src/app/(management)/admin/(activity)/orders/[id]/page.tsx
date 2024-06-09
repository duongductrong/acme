import OrderView from "@/features/orders/pages/order-view"

interface PageProps {
  params: {
    id: string
  }
}

const Page = ({ params: { id } }: PageProps) => {
  return <OrderView id={id} />
}

export default Page
