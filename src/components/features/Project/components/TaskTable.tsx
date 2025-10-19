'use client'

import { task, taskList1_1, taskPriprityList, taskStatsList } from "../../../../../tmp/data/task";
import User from "@/components/shared/User";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useRouter } from "next/navigation"


export function TaskTable({tasks}: {tasks: task[]}) {

  const router = useRouter();

  return (
    <Table className="table-fixed w-full">
      <TableHeader>
        <TableRow>
          <TableHead className="w-4/12">Title</TableHead>
          <TableHead className="w-2/12">Assignee</TableHead>
          <TableHead className="w-2/12">Reviewer</TableHead>
          <TableHead className="w-1/12">Status</TableHead>
          <TableHead className="w-1/12">Priority</TableHead>
          <TableHead className="w-2/12">Due Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tasks.map((task) => {
            const TaskStatus = taskStatsList[task.status];
            const TaskPriority = taskPriprityList[task.priority];
            return (
                <TableRow key={task.tid} className="h-20" onClick={() => router.push("/dashboard")}>
                    <TableCell className="text-xl font-bold">{task.name}</TableCell>
                    <TableCell><User user={task.assignee} /></TableCell>
                    <TableCell><User user={task.reviewer} /></TableCell>
                    <TableCell><TaskStatus/></TableCell>
                    <TableCell><TaskPriority/></TableCell>
                    <TableCell>{task.dueDate.toDateString()}</TableCell>
                </TableRow>
            )
            })}
      </TableBody>
    </Table>
  )
}
