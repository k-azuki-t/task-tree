import {
  Sidebar,
  SidebarContent,
} from "@/components/ui/sidebar"
import AppSidebarHeader from "./AppSidebar/AppSidebarHeader"
import WorkspaceList from "./AppSidebar/WorkspaceList"
import AppSidebarFooter from "./AppSidebar/AppSidebarFooter"
import { workspace } from "$/data/workspace"

export function AppSidebar({workspaceList}: {workspaceList: workspace[]}) {
  return (
    <Sidebar>
      <AppSidebarHeader />

      <SidebarContent>
        <WorkspaceList workspaceList={workspaceList} />
      </SidebarContent>

      <AppSidebarFooter />
    </Sidebar>
  )
}