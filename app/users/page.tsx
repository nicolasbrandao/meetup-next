import getAllUsers from "@/lib/getAllUsers"
import Link from "next/link"

export default async function Users() {
  const usersData: Promise<User[]> = getAllUsers()

  const users = await usersData

  return (
  <section>
    <h2 className="mt-20">
        <Link href="/" className="font-bold">Voltar para Home</Link>
    </h2>
    <br />
    {users.map(user => {
        return (
            <>
                <p key={user.id}>
                    <Link href={`/users/${user.id}`}>{user.name}</Link>
                </p>
                <br />
            </>
        )
    })}
  </section>
)
}