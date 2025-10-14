import { task, taskList } from "./task"
import { user, userList } from "./user"

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

export const projectList: project[] = [
    {
        pid: "1",
        name: "project",
        description: "this is a test Project",
        leader: userList,
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
        leader: userList,
        task: taskList,
        tag: [],
        createdAt: new Date("2025-10-11"),
        startedAt: new Date("2025-10-11"),
        finishedAt: new Date("2025-10-11"),
        dueDate: new Date("2025-10-11"),
    }
]