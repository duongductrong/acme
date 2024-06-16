import { PageBody } from "@/components/ant-ui/sections/page"
import FileListQuickActions from "../components/file-list-quick-actions"
import FileListRecentlyUsed from "../components/file-list-recently-used"
import FileListAll from "../components/file-list-all"

export interface FileListPageProps {}

const FileListPage = (props: FileListPageProps) => {
  return (
    <PageBody>
      <FileListQuickActions />
      <FileListRecentlyUsed />
      <FileListAll />
    </PageBody>
  )
}

export default FileListPage
