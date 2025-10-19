import {
  Sidebar,
  SidebarContent,
} from "@/components/ui/sidebar"
import LeaderList from "./ProjectRightSidebar/leaderList"

export function ProjectRightSidebar() {
  return (
    <Sidebar side="right" collapsible="offcanvas">
      <SidebarContent>
        <LeaderList />
      </SidebarContent>
    </Sidebar>
  )
}