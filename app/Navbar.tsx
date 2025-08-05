import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav>
        <Link href="/">Logo</Link>
        <ul>
            <li><Link href="/">Dashboard</Link></li>
            <li></li>
        </ul>
    </nav>
  )
}

export default Navbar