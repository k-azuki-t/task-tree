import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"
import AppSidebarHeader from "./AppSidebar/AppSidebarHeader"
import WorkspaceList from "./AppSidebar/WorkspaceList"
import AppSidebarFooter from "./AppSidebar/AppSidebarFooter"

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <AppSidebarHeader />
      </ SidebarHeader>

      <SidebarContent>
        <WorkspaceList />
        <SidebarGroup />
      </SidebarContent>

      <AppSidebarFooter />
    </Sidebar>
  )
}