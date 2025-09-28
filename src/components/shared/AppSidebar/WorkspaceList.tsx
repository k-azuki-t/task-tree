import { Calendar, Home, Inbox, Search, Settings, Plus, MoreHorizontal } from "lucide-react"
 
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroupAction,
  SidebarMenuAction,
} from "@/components/ui/sidebar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
 
// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

export default function WorkspaceList() {
  return (
    <SidebarGroup>
        <SidebarGroupLabel>Workspace</SidebarGroupLabel>
        <SidebarGroupAction title="Add Project">
            <Plus />
        </SidebarGroupAction>
        <SidebarGroupContent>
        <SidebarMenu>
            {items.map((item) => (
            <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                <a href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                </a>
                </SidebarMenuButton>
                <DropdownMenu>
                <DropdownMenuTrigger asChild>
                <SidebarMenuAction>
                    <MoreHorizontal />
                </SidebarMenuAction>
                </DropdownMenuTrigger>
                <DropdownMenuContent side="right" align="start">
                <DropdownMenuItem>
                    <span>Exit</span>
                </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            </SidebarMenuItem>
            ))}
        </SidebarMenu>
        </SidebarGroupContent>
    </SidebarGroup>
  )
}
