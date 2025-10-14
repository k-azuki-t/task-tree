export type user = {
    uid: string,
    name: string,
    mail: string,
    photoUrl: string,
}

export const userList: user[] = [
    {
        uid: "1",
        name: "kurage",
        mail: "kurage@test.com",
        photoUrl: '/kurage.jpg'
    },
    {
        uid: "2",
        name: "dicord",
        mail: "discord@test.com",
        photoUrl: '/discordIcon.png'
    },
    {
        uid: "3",
        name: "test",
        mail: "test",
        photoUrl: '/icon.png'
    },

]

export const loginUser: user =
{
    uid: "1",
    name: "kurage",
    mail: "kurage@test.com",
    photoUrl: '/kurage.jpg'
}