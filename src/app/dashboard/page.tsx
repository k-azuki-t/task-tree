import { Waypoints } from "lucide-react"

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center grow-1 space-y-10">
      <Waypoints className="w-64 h-64 text-blue-500" />
      <div>
        <h1 className="text-7xl font-bold">Welcome to Task Tree</h1>
      </div>
      <div className="flex flex-col items-center justify-center space-y-4">
        <p className="text-4xl font-bold text-neutral-500">Select a workspace</p>
        <p className="text-4xl font-bold text-neutral-500">or</p>
        <p className="text-4xl font-bold text-neutral-500">Create a new workspace</p>
      </div>
    </div>
  )
}
