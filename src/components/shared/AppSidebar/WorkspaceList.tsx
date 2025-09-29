'use client'

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
                        <Label htmlFor="name">Description</Label>
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
