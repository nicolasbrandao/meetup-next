import getAllUsers from "@/lib/getAllUsers"
import Link from "next/link"

export default async function Users() {
  const usersData: Promise<User[]> = getAllUsers()

  const users = await usersData

  return (
    <section className="flex flex-col gap-2 p-4">
      <h1 className="font-bold text-2xl">USERS</h1>
      {users.map(user => {
        return (
          <p key={user.id} className="border rounded p-4">
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </p>
        )
      })}
    </section>
  )
}