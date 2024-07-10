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

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-6">
        <FileCard type="folder" filename="2024_camera_image_3029.png" />
        <FileCard type="folder" filename="2024_camera_image_3029.png" />
        <FileCard type="folder" filename="2024_camera_image_3029.png" />
        <FileCard
          type="file"
          filename="2024_camera_image_3029.png"
          mimetype="PNG"
          originalSize={2048}
        />
        <FileCard
          type="file"
          filename="2024_camera_image_3029.png"
          mimetype="PNG"
          originalSize={2048}
        />
      </div>
    </Flex>
  )
}

export default FileListRecentlyUsed
