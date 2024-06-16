import { Flex } from "@/components/ant-ui/ui/flex"

import { Table } from "@/components/ant-ui/ui/table"
import { Title } from "@/components/ant-ui/ui/typography"
import { TableProps } from "antd"

export interface FileListAllProps {}

const FileListAll = (props: FileListAllProps) => {
  return (
    <Flex gap={12} vertical>
      <Flex align="center" gap={12}>
        <Title level={3}>All files</Title>
      </Flex>

      <Table columns={columns} dataSource={data} />
    </Flex>
  )
}

interface FileType {
  key: string
  name: string
  lastModified: string
  size: string
}

const columns: TableProps<FileType>["columns"] = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Last Modified",
    dataIndex: "lastModified",
    key: "lastModified",
  },
  {
    title: "Size",
    dataIndex: "size",
    key: "size",
  },
]

const data: FileType[] = [
  {
    key: "1",
    name: "Document1.pdf",
    lastModified: "2024-06-15 14:23:45",
    size: "1.2 MB",
  },
  {
    key: "2",
    name: "Image1.png",
    lastModified: "2024-06-14 11:17:20",
    size: "2.4 MB",
  },
  {
    key: "3",
    name: "Presentation.pptx",
    lastModified: "2024-06-13 09:45:10",
    size: "3.8 MB",
  },
  {
    key: "4",
    name: "Spreadsheet.xlsx",
    lastModified: "2024-06-12 08:30:00",
    size: "4.5 MB",
  },
  {
    key: "5",
    name: "Video.mp4",
    lastModified: "2024-06-11 17:50:35",
    size: "15.7 MB",
  },
]

export default FileListAll
