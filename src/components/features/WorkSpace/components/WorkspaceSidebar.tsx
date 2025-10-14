'use client'

import { Plus, MoreHorizontal } from "lucide-react"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroupAction,
  SidebarMenuAction,
  Sidebar,
  SidebarContent,
} from "@/components/ui/sidebar"
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import User from "@/components/shared/User"
import { workspaceList } from "$/data/workspace"


export default function WorkspaceSidebar({wid}: {wid: string}) {
  return (
    <Sidebar side="right" collapsible="offcanvas">
        <SidebarContent>
            <SidebarGroup>
                <SidebarGroupLabel>member</SidebarGroupLabel>
                <SidebarGroupAction title="Add Project">
                    <Dialog>
                        <form>
                            <DialogTrigger asChild>
                            <Plus className="h-4" />
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                    <DialogTitle>invite a new member</DialogTitle>
                                    <DialogDescription>
                                        Enter the new member mail address
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="grid gap-4">
                                    <div className="grid gap-3">
                                    <Label htmlFor="mail">mail address</Label>
                                    <Input id="mail" name="mail" />
                                    </div>
                                </div>
                                <DialogFooter>
                                    <DialogClose asChild>
                                    <Button variant="outline">Cancel</Button>
                                    </DialogClose>
                                    <Button type="submit">send an invite mail</Button>
                                </DialogFooter>
                            </DialogContent>
                        </form>
                    </Dialog>
                </SidebarGroupAction>
                <SidebarGroupContent>
                <SidebarMenu>
                    {workspaceList.map((workspace) => (
                        workspace.wid === wid && 
                            workspace.member.map((member) => (
                                <SidebarMenuItem key={member.uid}>
                                <SidebarMenuButton asChild>
                                        <User user={member}/>
                                </SidebarMenuButton>
                                <DropdownMenu modal={false}>
                                <DropdownMenuTrigger asChild>
                                <SidebarMenuAction>
                                    <MoreHorizontal />
                                </SidebarMenuAction>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                <DropdownMenuItem>
                                    <span>Delete</span>
                                </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            </SidebarMenuItem>
                            )
                        )
                    ))}
                </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
        </SidebarContent>
    </Sidebar>
  )
}
