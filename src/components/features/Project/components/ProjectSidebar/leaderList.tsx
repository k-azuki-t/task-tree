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
import { projectList } from "../../../../../../tmp/data/projet"
import User from "@/components/shared/User"


export default function LeaderList() {
  return (
    <SidebarGroup className="space-y-2">
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
                            <Label htmlFor="name">mail address</Label>
                            <Input id="name" name="name" />
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
            <SidebarMenu className="space-y-2">
                {projectList.map((project) => (
                    project.pid === '1' &&
                        project.leader.map((leader) => (
                            <SidebarMenuItem key={leader.uid}>
                                <SidebarMenuButton asChild>
                                    <User user={leader}/>
                                </SidebarMenuButton>
                                <DropdownMenu modal={false}>
                                    <DropdownMenuTrigger asChild>
                                        <SidebarMenuAction>
                                            <MoreHorizontal />
                                        </SidebarMenuAction>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent side="right" align="start">
                                        <DropdownMenuItem>
                                            <span>Delete</span>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                        </SidebarMenuItem>
                        ))
                ))}
            </SidebarMenu>
        </SidebarGroupContent>
    </SidebarGroup>
  )
}
