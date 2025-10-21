'use client'

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { task } from "$/data/task"


export default function DueDate({task}: {task: task}) {
  return (
    <SidebarGroup className="space-y-2">
        <SidebarGroupLabel>DueDate</SidebarGroupLabel>
        <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
                <SidebarMenuItem>
                    {/* クリックするとユーザー選択できるようにする */}
                    <SidebarMenuButton asChild> 
                        <p>{`${task.dueDate.toDateString()}`}</p>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarGroupContent>
    </SidebarGroup>
  )
}
