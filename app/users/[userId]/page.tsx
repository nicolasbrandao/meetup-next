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
    <section className="flex flex-col gap-2 p-4">
      <h1 className="font-bold text-2xl">POSTS DO USER {user.name.toLocaleUpperCase()}</h1>
      <Suspense fallback={<h2>Loading...</h2>}>
        <UserPosts promise={userPostsData} />
      </Suspense>
    </section>
  )
}

// export async function generateStaticParams() {
//   const usersData: Promise<User[]> = getAllUsers()
//   const users = await usersData

//   return users.map(user => ({
//       userId: user.id.toString()
//   }))
// }