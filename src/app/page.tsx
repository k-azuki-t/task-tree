import GoogleSignUp from "@/components/features/Top/components/GoogleSignUp";
import { Waypoints } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen space-x-40">
      <Waypoints className="w-64 h-64 text-blue-500" />
      <div className="flex flex-col items-center">
        <h1 className="text-7xl font-bold mb-4">Task Tree</h1>
        <p className="text-2xl mb-8">Organize your tasks visually</p>
        <GoogleSignUp />
      </div>
    </main>
  );
}
