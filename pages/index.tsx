import Hero from '@/components/Hero'
import MobileNavbar from '@/components/MobileNavbar'
import Navbar from '@/components/Navbar'
import React, { useState } from 'react'

function HomePage() {
 
  const [nav,setNav] = useState(false)
  const openNav = () => setNav(true)
  const closeNav = () => setNav(false)

  return (
    <div className="overflow-x-hidden">
       <div>
          <MobileNavbar nav={nav} closeNav={closeNav}/>
          <Navbar openNav={openNav} />
          <Hero/>
       </div>
    </div>
  )
}

export default HomePage