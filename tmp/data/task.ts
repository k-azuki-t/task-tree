import { loginUser, user } from "./user"

type status = "pending" | "processing" | "reviewing" | "done" | "duplicate";
type priority = "low" | "medium" | "high" | "argent";

export type chat = {
    cid: string,
    user: user,
    content: string,
    createdAt: Date,
    updatedAt: Date,
}

export type task = {
    tid: string,
    name: string,
    assignee: user,
    reviewer: user,
    priority: priority,
    status: status,
    point: number,
    description: string,
    parentTask: string | null,
    tag: string[],
    createdAt: Date,
    startedAt: Date,
    finishedAt: Date,
    dueDate: Date,
    chat: chat[],
}


export const taskList: task[] = [
    {
        tid: "1",
        name: "Task1",
        assignee: loginUser,
        reviewer: loginUser,
        priority: "low",
        status: "pending",
        point: 1,
        description: "this is a test task",
        parentTask: null,
        tag: [],
        createdAt: new Date("2025-10-11"),
        startedAt: new Date("2025-10-11"),
        finishedAt: new Date("2025-10-11"),
        dueDate: new Date("2025-10-11"),
        chat: [],
    },
    {
        tid: "2",
        name: "Task2",
        assignee: loginUser,
        reviewer: loginUser,
        priority: "medium",
        status: "pending",
        point: 1,
        description: "this is a test task",
        parentTask: '1',
        tag: [],
        createdAt: new Date("2025-10-11"),
        startedAt: new Date("2025-10-11"),
        finishedAt: new Date("2025-10-11"),
        dueDate: new Date("2025-10-11"),
        chat: [],
    },
    {
        tid: "3",
        name: "Task3",
        assignee: loginUser,
        reviewer: loginUser,
        priority: "medium",
        status: "pending",
        point: 1,
        description: "this is a test task",
        parentTask: '2',
        tag: [],
        createdAt: new Date("2025-10-11"),
        startedAt: new Date("2025-10-11"),
        finishedAt: new Date("2025-10-11"),
        dueDate: new Date("2025-10-11"),
        chat: [],
    },
]