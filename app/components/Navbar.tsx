import Link from "next/link"

function Navbar() {
  return (
    <nav className="bg-orange-500 h-15 flex items-center p-4">
      <ul className="list-none flex gap-4 font-bold text-purple-700">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/users">Users</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar