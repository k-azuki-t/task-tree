'use client'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useRouter } from "next/navigation"

const invoices = [
  {
    id: "1",
    title: "Project001",
    startdate: "2025-10-01",
    duedate: "2025-11-01",
    leader: "kurage",
    taskStatus: "done",
  },
  {
    id: "2",
    title: "Project002",
    startdate: "2025-10-01",
    duedate: "2025-11-01",
    leader: "kurage",
    taskStatus: "done",
  },
  {
    id: "3",
    title: "Project003",
    startdate: "2025-10-01",
    duedate: "2025-11-01",
    leader: "kurage",
    taskStatus: "done",
  },
  {
    id: "4",
    title: "Project004",
    startdate: "2025-10-01",
    duedate: "2025-11-01",
    leader: "kurage",
    ptaskStatus: "done",
  },
  {
    id: "5",
    title: "Project005",
    startdate: "2025-10-01",
    duedate: "2025-11-01",
    leader: "kurage",
    taskStatus: "done",
  },
  {
    id: "6",
    title: "Project006",
    startdate: "2025-10-01",
    duedate: "2025-11-01",
    leader: "kurage",
    taskStatus: "done",
  },
  {
    id: "7",
    title: "Project007",
    startdate: "2025-10-01",
    duedate: "2025-11-01",
    leader: "kurage",
    taskStatus: "done",
  },
]

export function TaskTable() {

  const router = useRouter();

  return (
    <Table className="table-fixed w-full">
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-3/12">Title</TableHead>
          <TableHead className="w-1/12">Start Date</TableHead>
          <TableHead className="w-1/12">Due Date</TableHead>
          <TableHead className="w-3/12">leader</TableHead>
          <TableHead className="w-4/12">status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.id} className="h-20" onClick={() => router.push("/dashboard")}>
            <TableCell className="text-2xl font-bold">{invoice.title}</TableCell>
            <TableCell>{invoice.startdate}</TableCell>
            <TableCell>{invoice.duedate}</TableCell>
            <TableCell>{invoice.leader}</TableCell>
            <TableCell>{invoice.taskStatus}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
