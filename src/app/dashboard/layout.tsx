import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/features/Dashboard/components/AppSidebar"
import { AppBreadcrumb } from "@/components/features/Dashboard/components/AppBreadcrumb"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
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