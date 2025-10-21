import { workspaceList } from "$/data/workspace"
import TaskRightSidebar from "@/components/features/Task/components/TaskRightSidebar";
import { SidebarProvider } from "@/components/ui/sidebar"


export default async function Page({ params }: { params: Promise<{pid: string, wid: string, tid: string}> }) {

  const { pid, wid, tid } =  await params;
  const task = workspaceList.find(ws => ws.wid === wid)?.project.find(pj => pj.pid === pid)?.task.find(tk => tk.tid === tid);

  return (
    <SidebarProvider open={true}>
        {task && <TaskRightSidebar task={task} />}
        <div className="md:-ml-[var(--sidebar-width)] md:pr-[var(--sidebar-width)]">
            <div className="flex flex-col grow-1 space-y-10 p-10 ">
            <div>
                <h1 className="text-7xl font-bold">{task?.name}</h1>
            </div>
            <div className="flex flex-col space-y-6">
                <div className="flex flex-col space-y-2">
                <p className="text-base text-neutral-500 font-bold">Description</p>
                <div className="text-base text-neutral-800">
                    {task?.description}
                </div>
                </div>
            </div>
            </div>
        </div>
    </SidebarProvider>
  )
}
