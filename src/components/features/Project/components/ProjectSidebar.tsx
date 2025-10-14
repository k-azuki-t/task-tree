import {
  Sidebar,
  SidebarContent,
} from "@/components/ui/sidebar"
import LeaderList from "./ProjectSidebar/leaderList"

export function ProjectSidebar() {
  return (
    <Sidebar side="right" collapsible="offcanvas">
      <SidebarContent>
        <LeaderList />
      </SidebarContent>
    </Sidebar>
  )
}