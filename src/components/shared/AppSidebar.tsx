import {
  Sidebar,
  SidebarContent,
} from "@/components/ui/sidebar"
import AppSidebarHeader from "./AppSidebar/AppSidebarHeader"
import WorkspaceList from "./AppSidebar/WorkspaceList"
import AppSidebarFooter from "./AppSidebar/AppSidebarFooter"

export function AppSidebar() {
  return (
    <Sidebar>
      <AppSidebarHeader />

      <SidebarContent>
        <WorkspaceList />
      </SidebarContent>

      <AppSidebarFooter />
    </Sidebar>
  )
}