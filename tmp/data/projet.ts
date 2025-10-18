import { task, taskList } from "./task"
import { user, userList1, userList2 } from "./user"

export type project = {
    pid: string,
    name: string,
    description: string,
    leader: user[],
    task: task[],
    tag: string[],
    createdAt: Date,
    startedAt: Date,
    finishedAt: Date,
    dueDate: Date,
}

export const projectList1: project[] = [
    {
        pid: "1",
        name: "project",
        description: "this is a test Project",
        leader: userList1,
        task: taskList,
        tag: [],
        createdAt: new Date("2025-10-11"),
        startedAt: new Date("2025-10-11"),
        finishedAt: new Date("2025-10-11"),
        dueDate: new Date("2025-10-11"),
    },
    {
        pid: "2",
        name: "project",
        description: "this is a test Project",
        leader: userList1,
        task: taskList,
        tag: [],
        createdAt: new Date("2025-10-11"),
        startedAt: new Date("2025-10-11"),
        finishedAt: new Date("2025-10-11"),
        dueDate: new Date("2025-10-11"),
    }
]

export const projectList2: project[] = [
    {
        pid: "1",
        name: "project",
        description: "this is a test Project",
        leader: userList2,
        task: taskList,
        tag: [],
        createdAt: new Date("2025-10-11"),
        startedAt: new Date("2025-10-11"),
        finishedAt: new Date("2025-10-11"),
        dueDate: new Date("2025-10-11"),
    },
    {
        pid: "2",
        name: "project",
        description: "this is a test Project",
        leader: userList2,
        task: taskList,
        tag: [],
        createdAt: new Date("2025-10-11"),
        startedAt: new Date("2025-10-11"),
        finishedAt: new Date("2025-10-11"),
        dueDate: new Date("2025-10-11"),
    }
]