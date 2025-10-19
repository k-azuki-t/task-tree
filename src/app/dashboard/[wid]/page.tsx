import { workspaceList } from "$/data/workspace"
import { ProjectTable } from "@/components/features/WorkSpace/components/ProjectTable"
import WorkspaceRightSidebar from "@/components/features/WorkSpace/components/WorkspaceRightSidebar"
import { SidebarProvider } from "@/components/ui/sidebar"

export default async function Page({ params }: { params: Promise<{wid: string}> }) {

  const { wid } = await params;
  const workspace = workspaceList.find(ws => ws.wid === wid);

  return (
    <SidebarProvider open={true}>
        <WorkspaceRightSidebar wid={wid} />
        <div className="md:-ml-[var(--sidebar-width)] md:pr-[var(--sidebar-width)]">
        <div className="flex flex-col grow-1 space-y-10 p-10">
          <div>
            <h1 className="text-7xl font-bold">{workspace?.name}</h1>
          </div>
          <div className="flex flex-col space-y-6">
            <div className="flex flex-col space-y-2">
              <p className="text-base text-neutral-500 font-bold">Description</p>
              <div className="text-base text-neutral-500">
                {workspace?.description}
              </div>
            </div>
          </div>
          <ProjectTable wid={wid} />
        </div>
        </div>
    </SidebarProvider>
  )
}
