import {
  Sidebar,
  SidebarContent,
} from "@/components/ui/sidebar"
import Assignee from "./TaskRightSidebar/Assignee"
import { task } from "$/data/task"
import Reviewer from "./TaskRightSidebar/Reviewer"
import DueDate from "./TaskRightSidebar/DueDate"
import Priority from "./TaskRightSidebar/Priority"
import Status from "./TaskRightSidebar/Status"
import Point from "./TaskRightSidebar/Poiint"

export default function TaskRightSidebar({task}: {task: task}) {
  return (
    <Sidebar side="right" collapsible="offcanvas">
      <SidebarContent>
        {/* SidebarGroup */}
        <Assignee task={task}  />
        <Reviewer task={task} />
        <Priority task={task} />
        <Status task={task} />
        <DueDate task={task} />
        <Point task={task} />
      </SidebarContent>
    </Sidebar>
  )
}