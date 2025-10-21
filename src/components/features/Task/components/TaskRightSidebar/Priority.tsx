'use client'

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { task, taskPriorityList } from "$/data/task"


export default function Priority({task}: {task: task}) {
  const Priority = taskPriorityList[task.priority];
  return (
    <SidebarGroup className="space-y-2">
        <SidebarGroupLabel>Priority</SidebarGroupLabel>
        <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
                <SidebarMenuItem>
                    {/* TODO: アイコン */}
                    <SidebarMenuButton asChild> 
                        <Priority />
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarGroupContent>
    </SidebarGroup>
  )
}
