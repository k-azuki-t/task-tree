import Link from "next/link";
import { Waypoints } from 'lucide-react';
import { SidebarHeader } from "@/components/ui/sidebar";

export default function AppSidebarHeader() {
  return (
    <SidebarHeader>
        <Link href="/dashboard" className="flex flex-row items-center justify-center my-6 space-x-4">
            <Waypoints className="h-8 w-8" />
            <p className="text-xl font-semibold">Task Tree</p>
        </Link>
    </SidebarHeader>
  )
}
