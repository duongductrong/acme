import { Flex } from "@/components/ant-ui/ui/flex"

import { Col, Row } from "@/components/ant-ui/ui/grid"
import { Title } from "@/components/ant-ui/ui/typography"
import { FileCard } from "@/components/ant-ui/cards/file-card"

export interface FileListRecentlyUsedProps {}

const FileListRecentlyUsed = (props: FileListRecentlyUsedProps) => {
  return (
    <Flex gap={12} vertical>
      <Flex align="center" gap={12}>
        <Title level={3}>Recently used</Title>
      </Flex>

      <Row gutter={[16, 16]}>
        <Col span={4}>
          <FileCard type="folder" filename="2024_camera_image_3029.png" />
        </Col>
        <Col span={4}>
          <FileCard type="folder" filename="2024_camera_image_3029.png" />
        </Col>
        <Col span={4}>
          <FileCard type="folder" filename="2024_camera_image_3029.png" />
        </Col>
        <Col span={4}>
          <FileCard
            type="file"
            filename="2024_camera_image_3029.png"
            mimetype="PNG"
            originalSize={2048}
          />
        </Col>
        <Col span={4}>
          <FileCard
            type="file"
            filename="2024_camera_image_3029.png"
            mimetype="PNG"
            originalSize={2048}
          />
        </Col>
      </Row>
    </Flex>
  )
}

export default FileListRecentlyUsed
