import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/features/Dashboard/components/AppSidebar"
import { AppBreadcrumb } from "@/components/features/Dashboard/components/AppBreadcrumb"
import { workspaceList } from "$/data/workspace"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar workspaceList={workspaceList} />
      <main className="flex flex-col grow-1 w-full">
        <div className="flex items-center space-x-4">
            <SidebarTrigger className="w-12 h-12" />
            <AppBreadcrumb />
        </div>
        {children}
      </main>
    </SidebarProvider>
  )
}