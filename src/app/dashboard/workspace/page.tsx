import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"


export default function Page() {
  return (
    <div className="flex flex-col grow-1 space-y-10 p-10">
      <div>
        <h1 className="text-7xl font-bold">WorkSpace A</h1>
      </div>
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col space-y-2">
          <p className="text-base text-neutral-500 font-bold">Member</p>
          <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
            <Avatar className="w-10 h-10">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className="w-10 h-10">
              <AvatarImage src="https://github.com/leerob.png" alt="@leerob" />
              <AvatarFallback>LR</AvatarFallback>
            </Avatar>
            <Avatar className="w-10 h-10">
              <AvatarImage
                src="https://github.com/evilrabbit.png"
                alt="@evilrabbit"
              />
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-base text-neutral-500 font-bold">Description</p>
          <div className="text-base text-neutral-500">
            Here is a test Workspace!
          </div>
        </div>
      </div>
    </div>
  )
}
