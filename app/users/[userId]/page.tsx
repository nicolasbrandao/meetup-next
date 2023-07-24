import UserPosts from "@/app/components/UserPosts"
import getUser from "@/lib/getUser"
import getUserPosts from "@/lib/getUserPosts"
import { Suspense } from "react"
import { notFound } from 'next/navigation'
import getAllUsers from "@/lib/getAllUsers"

type Params = {
  params: {
    userId: string
  }
}

export async function generateMetadata({ params: { userId } }: Params) {
  const userData: Promise<User> = getUser(userId)
  const user: User = await userData
  
  return {
      title: user.name,
      description: `This is the page of ${user.name}`
  }
}

export default async function TodosUsuario({ params: { userId } }: Params) {
  const userData: Promise<User> = getUser(userId)
  const user = await userData

  if (!user.name) notFound()

  const userPostsData: Promise<Post[]> = getUserPosts(userId)

  return (
    <main className="flex min-h-full flex-col items-center justify-between">
      <h1>USUARIO DE ID {userId}</h1>
      <Suspense fallback={<h2>Loading...</h2>}>
        <UserPosts promise={userPostsData} />
      </Suspense>
    </main>
  )
}

// export async function generateStaticParams() {
//   const usersData: Promise<User[]> = getAllUsers()
//   const users = await usersData

//   return users.map(user => ({
//       userId: user.id.toString()
//   }))
// }