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

 
// Menu items.
const items = [
  {
    title: "Workspace1",
    url: "#",
  },
  {
    title: "Workspace2",
    url: "#",
  },
  {
    title: "Workspace3",
    url: "#",
  },
  {
    title: "Workspace4",
    url: "#",
  },
  {
    title: "Workspace5",
    url: "#",
  },
]

export default function WorkspaceList() {
  return (
    <SidebarGroup>
        <SidebarGroupLabel>Workspace</SidebarGroupLabel>
        <SidebarGroupAction title="Add Project">
            <Dialog>
                <form>
                    <DialogTrigger asChild>
                    <Plus className="h-4" />
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Open New Workspace</DialogTitle>
                        <DialogDescription>
                            Enter the new workspace name and descriptinon
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" name="name" />
                        </div>
                        <div className="grid gap-3">
                        <Label htmlFor="description">Description</Label>
                        <Input id="description" name="description" />
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button type="submit">Save changes</Button>
                    </DialogFooter>
                    </DialogContent>
                </form>
                </Dialog>
        </SidebarGroupAction>
        <SidebarGroupContent>
        <SidebarMenu>
            {items.map((item) => (
            <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                <a href={item.url}>
                    <span>{item.title}</span>
                </a>
                </SidebarMenuButton>
                <DropdownMenu modal={false}>
                  <DropdownMenuTrigger asChild>
                  <SidebarMenuAction>
                      <MoreHorizontal />
                  </SidebarMenuAction>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
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
