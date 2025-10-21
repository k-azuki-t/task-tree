import Image from "next/image"
import * as React from "react"

// user型をインポート or 定義してください
import { user } from "$/data/user"

type UserProps = React.HTMLAttributes<HTMLDivElement> & {
  user: user
}

const User = React.forwardRef<HTMLDivElement, UserProps>(
  ({ user, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props} // ← asChildで渡されたイベントやクラスがここに渡る！
        className={`flex flex-row space-x-2 items-center h-10 ${props.className ?? ""}`}
      >
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
)

// forwardRefを使うときはdisplayNameをつけるのが慣例
User.displayName = "User"

export default User;
