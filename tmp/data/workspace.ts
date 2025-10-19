import { project, projectList1, projectList2 } from "./projet"
import { user, userList1, userList2 } from "./user"


export type workspace = {
    wid: string,
    name: string,
    member: user[],
    description: string,
    project: project[],
    createdAt: Date
}

export const workspaceList = [
    {
        wid: "1",
        name: "workspace 1",
        member: userList1,
        description: "this is a test workspace",
        project: projectList1,
        createdAt: new Date("2024-05-01")
    },
    {
        wid: "2",
        name: "workspace 2",
        member: userList2,
        description: "this is a test workspace",
        project: projectList2,
        createdAt: new Date("2024-05-01")
    }
]