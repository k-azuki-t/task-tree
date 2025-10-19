import { workspaceList } from "$/data/workspace"
import { ProjectRightSidebar } from "@/components/features/Project/components/ProjectRightSidebar"
import { TaskTable } from "@/components/features/Project/components/TaskTable"
import TaskTree from "@/components/shared/TaskTree"
import { SidebarProvider } from "@/components/ui/sidebar"


export default async function Page({ params }: { params: Promise<{pid: string, wid: string}> }) {
  const { pid, wid } =  await params;
  const project = workspaceList.find(ws => ws.wid === wid)?.project.find(pj => pj.pid === pid);
  const taskList = project?.task;
  return (
    <SidebarProvider open={true}>
        <ProjectRightSidebar />
        <div className="md:-ml-[var(--sidebar-width)] md:pr-[var(--sidebar-width)]">
            <div className="flex flex-col grow-1 space-y-10 p-10 ">
            <div>
                <h1 className="text-7xl font-bold">{project?.name}</h1>
            </div>
            <div className="flex flex-col space-y-6">
                <div className="flex flex-col space-y-2">
                <p className="text-base text-neutral-500 font-bold">Description</p>
                <div className="text-base text-neutral-500">
                    {project?.description}
                </div>
                </div>
            </div>
            {taskList && <TaskTree tasks={taskList} />}
            {taskList && <TaskTable tasks={taskList} />}
            </div>
        </div>
    </SidebarProvider>
  )
}
