import { Button } from "@/components/ui/button"
import { cn } from "@/lib/tailwind"
import { ArrowUp, FolderPlus, Plus, Settings } from "lucide-react"
import { ComponentPropsWithoutRef } from "react"

export interface FileListQuickActionsProps extends ComponentPropsWithoutRef<"div"> {}

const FileListQuickActions = ({ className, ...props }: FileListQuickActionsProps) => {
  return (
    <div {...props} className={cn("flex items-center justify-between gap-3", className)}>
      <div className="flex justify-center gap-3">
        <Button icon={<ArrowUp size={16} />} variant="default">
          Upload
        </Button>
        <Button icon={<Plus size={16} />} variant="outline">
          New file
        </Button>
        <Button icon={<FolderPlus size={16} />} variant="outline">
          New folder
        </Button>
        <Button icon={<Settings size={16} />} variant="outline">
          Settings
        </Button>
      </div>

      <div className="justify-center gap-3">
        {/* <Segmented
          defaultValue="grid"
          options={[
            { value: "grid", icon: <AppstoreOutlined /> },
            { value: "list", icon: <BarsOutlined /> },
          ]}
        /> */}
      </div>
    </div>
  )
}

export default FileListQuickActions
