import { UserButton } from '@clerk/nextjs';
import { db } from '../drizzle/db';

export default function Home() {
  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello there</h1>
      <UserButton 
        afterSignOutUrl="/"
      />
    </main>
  )
}
