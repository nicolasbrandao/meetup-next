import Link from "next/link"

function Navbar() {
  return (
    <nav className="bg-slate-800 h-15 flex items-center p-4">
      <ul>
        <li><Link href="/users">users</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar