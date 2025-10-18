import { taskList } from "$/data/task"
import { ProjectSidebar } from "@/components/features/Project/components/ProjectSidebar"
import { TaskTable } from "@/components/features/Project/components/TaskTable"
import TaskTree from "@/components/shared/TaskTree"
import { SidebarProvider } from "@/components/ui/sidebar"


export default function Page() {
  return (
    <SidebarProvider open={true}>
        <ProjectSidebar />
        <div className="md:-ml-[var(--sidebar-width)] md:pr-[var(--sidebar-width)]">
            <div className="flex flex-col grow-1 space-y-10 p-10 ">
            <div>
                <h1 className="text-7xl font-bold">Project A</h1>
            </div>
            <div className="flex flex-col space-y-6">
                <div className="flex flex-col space-y-2">
                <p className="text-base text-neutral-500 font-bold">Description</p>
                <div className="text-base text-neutral-500">
                    Here is a test Workspace!
                </div>
                </div>
            </div>
            <TaskTree tasks={taskList} />
            <TaskTable />
            </div>
        </div>
    </ SidebarProvider>
  )
}
