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

export default function Point({task}: {task: task}) {
  return (
    <SidebarGroup className="space-y-2">
        <SidebarGroupLabel>Point</SidebarGroupLabel>
        <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
                <SidebarMenuItem>
                    {/* TODO: アイコン左寄せ */}
                    <SidebarMenuButton asChild> 
                        <p>{task.point}</p>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarGroupContent>
    </SidebarGroup>
  )
}
