'use client'

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import User from "@/components/shared/User"
import { task } from "$/data/task"


export default function Assignee({task}: {task: task}) {
  return (
    <SidebarGroup className="space-y-2">
        <SidebarGroupLabel>assignee</SidebarGroupLabel>
        <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
                <SidebarMenuItem>
                    {/* クリックするとユーザー選択できるようにする */}
                    <SidebarMenuButton asChild> 
                        <User user={task.assignee} />
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarGroupContent>
    </SidebarGroup>
  )
}
