import Link from "next/link";
import { Waypoints } from 'lucide-react';

export default function AppSidebarHeader() {
  return (
    <>
        <Link href="/dashboard" className="flex flex-row items-center justify-center my-6 space-x-4">
            <Waypoints className="h-8 w-8" />
            <p className="text-xl font-semibold">Task Tree</p>
        </Link>
    </>
  )
}
