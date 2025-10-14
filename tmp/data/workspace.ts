import { project, projectList } from "./projet"
import { user, userList } from "./user"


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
        name: "test1",
        member: userList,
        description: "this is a test workspace",
        project: projectList,
        createdAt: new Date("2024-05-01")
    },
    {
        wid: "2",
        name: "test2",
        member: userList,
        description: "this is a test workspace",
        project: projectList,
        createdAt: new Date("2024-05-01")
    }
]