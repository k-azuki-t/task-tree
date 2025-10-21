'use client'

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { task, taskStatsList } from "$/data/task"


export default function Status({task}: {task: task}) {
  const Status = taskStatsList[task.status];
  return (
    <SidebarGroup className="space-y-2">
        <SidebarGroupLabel>Priority</SidebarGroupLabel>
        <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
                <SidebarMenuItem>
                    {/* TODO: アイコン左寄せ */}
                    <SidebarMenuButton asChild> 
                        <Status />
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarGroupContent>
    </SidebarGroup>
  )
}
