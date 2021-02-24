import React from 'react'
import Link from 'next/link'

const Home = () => <div>
  <p>Welcome to Shrink url!</p>
  <Link href='/shrink'><a>start shrinking a link now</a></Link>
</div>

export default Home;