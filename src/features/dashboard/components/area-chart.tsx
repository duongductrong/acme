import { Area } from "@ant-design/plots"

export const AreaChart = () => {
  const config = {
    data: {
      type: "fetch",
      value: "https://assets.antv.antgroup.com/g2/aapl.json",
    },
    xField: (d: any) => new Date(d.date),
    yField: "close",
  }

  return <Area {...config} height={300} />
}
