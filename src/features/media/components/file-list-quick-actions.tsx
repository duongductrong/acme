import { Button } from "@/components/ant-ui/ui/button"
import { Flex } from "@/components/ant-ui/ui/flex"
import { Segmented } from "@/components/ant-ui/ui/segmented"
import { ArrowUp, FolderPlus, Plus, Settings } from "lucide-react"

import { AppstoreOutlined, BarsOutlined } from "@ant-design/icons"

export interface FileListQuickActionsProps {}

const FileListQuickActions = (props: FileListQuickActionsProps) => {
  return (
    <Flex align="center" justify="space-between" gap={12}>
      <Flex align="center" gap={12}>
        <Button icon={<ArrowUp size={16} />} type="primary">
          Upload
        </Button>
        <Button icon={<Plus size={16} />} type="default">
          New file
        </Button>
        <Button icon={<FolderPlus size={16} />} type="default">
          New folder
        </Button>
        <Button icon={<Settings size={16} />} type="default">
          Settings
        </Button>
      </Flex>

      <Flex align="center" gap={12}>
        <Segmented
          defaultValue="grid"
          options={[
            { value: "grid", icon: <AppstoreOutlined /> },
            { value: "list", icon: <BarsOutlined /> },
          ]}
        />
      </Flex>
    </Flex>
  )
}

export default FileListQuickActions
