import { ProjectTable } from "@/components/features/WorkSpace/components/ProjectTable"
import WorkspaceSidebar from "@/components/features/WorkSpace/components/WorkspaceSidebar"
import { SidebarProvider } from "@/components/ui/sidebar"


export default function Page() {
  return (
    <SidebarProvider open={true}>
        <WorkspaceSidebar wid={'1'} />
        <div className="md:-ml-[var(--sidebar-width)] md:pr-[var(--sidebar-width)]">
        <div className="flex flex-col grow-1 space-y-10 p-10">
          <div>
            <h1 className="text-7xl font-bold">WorkSpace A</h1>
          </div>
          <div className="flex flex-col space-y-6">
            <div className="flex flex-col space-y-2">
              <p className="text-base text-neutral-500 font-bold">Description</p>
              <div className="text-base text-neutral-500">
                Here is a test Workspace!
              </div>
            </div>
          </div>
          <ProjectTable />
        </div>
        </div>
    </ SidebarProvider>
  )
}
