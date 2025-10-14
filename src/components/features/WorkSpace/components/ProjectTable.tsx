'use client'

import { projectList } from "../../../../../tmp/data/projet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useRouter } from "next/navigation"

export function ProjectTable() {

  const router = useRouter();

  return (
    <Table className="table-fixed w-full">
      <TableHeader>
        <TableRow>
          <TableHead className="w-3/12">Title</TableHead>
          <TableHead className="w-2/12">Due Date</TableHead>
          <TableHead className="w-3/12">leader</TableHead>
          <TableHead className="w-4/12">status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {projectList.map((project) => (
          <TableRow key={project.pid} className="h-20" onClick={() => router.push("/dashboard")}>
            <TableCell className="text-xl font-bold">{project.name}</TableCell>
            <TableCell>{project.dueDate.toDateString()}</TableCell>
            <TableCell>
              <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2">
                {project.leader.map((leader) => (
                  <Avatar className="w-10 h-10" key={leader.uid}>
                    <AvatarImage src={leader.photoUrl} alt="@shadcn" />
                    <AvatarFallback>{leader.name}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
              </TableCell>
            <TableCell>test field</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}