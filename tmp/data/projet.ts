import { CircleCheckBig, CircleDashed, LoaderCircle, LucideIcon } from "lucide-react";
import { task, taskList1_1, taskList1_2, taskList2_1, taskList2_2 } from "./task"
import { user, userList1, userList2 } from "./user"

type projectStatus = "pending" | "in-progress" | "completed";
export const projectStatusList: Record<projectStatus, LucideIcon> = {
    "pending": CircleDashed,
    "in-progress": LoaderCircle,
    "completed": CircleCheckBig,
}

export type project = {
    pid: string,
    name: string,
    description: string,
    leader: user[],
    task: task[],
    tag: string[],
    status: projectStatus,
    createdAt: Date,
    startedAt: Date,
    finishedAt: Date,
    dueDate: Date,
}

export const projectList1: project[] = [
    {
        pid: "1",
        name: "project 1-1",
        description: "this is a test Project",
        leader: userList1,
        task: taskList1_1,
        tag: [],
        status: "in-progress",
        createdAt: new Date("2025-10-11"),
        startedAt: new Date("2025-10-11"),
        finishedAt: new Date("2025-10-11"),
        dueDate: new Date("2025-10-11"),
    },
    {
        pid: "2",
        name: "project 1-2",
        description: "this is a test Project",
        leader: userList1,
        task: taskList1_2,
        tag: [],
        status: "pending",
        createdAt: new Date("2025-10-11"),
        startedAt: new Date("2025-10-11"),
        finishedAt: new Date("2025-10-11"),
        dueDate: new Date("2025-10-11"),
    }
]

export const projectList2: project[] = [
    {
        pid: "1",
        name: "project 2-1",
        description: "this is a test Project",
        leader: userList2,
        task: taskList2_1,
        tag: [],
        status: "completed",
        createdAt: new Date("2025-10-11"),
        startedAt: new Date("2025-10-11"),
        finishedAt: new Date("2025-10-11"),
        dueDate: new Date("2025-10-11"),
    },
    {
        pid: "2",
        name: "project 2-2",
        description: "this is a test Project",
        leader: userList2,
        task: taskList2_2,
        tag: [],
        status: "in-progress",
        createdAt: new Date("2025-10-11"),
        startedAt: new Date("2025-10-11"),
        finishedAt: new Date("2025-10-11"),
        dueDate: new Date("2025-10-11"),
    }
]