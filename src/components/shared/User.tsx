import { user } from "../../../tmp/data/user";
import Image from "next/image";

export default function User({user}: {user: user}) {
  return (
    <div className="flex flex-row space-x-2 items-center">
        <Image
            src={user.photoUrl}
            alt={user.name}
            width={32}
            height={32}
            className="rounded-full"
        />
        <span>{user.name}</span>
    </div>
  )
}
