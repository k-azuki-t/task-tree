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


export default function Reviewer({task}: {task: task}) {
  return (
    <SidebarGroup className="space-y-2">
        <SidebarGroupLabel>reviewer</SidebarGroupLabel>
        <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
                <SidebarMenuItem>
                    {/* クリックするとユーザー選択できるようにする */}
                    <SidebarMenuButton asChild> 
                        <User user={task.reviewer} />
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarGroupContent>
    </SidebarGroup>
  )
}
