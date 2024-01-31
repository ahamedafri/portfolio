import React from 'react'
import {Bars3Icon} from "@heroicons/react/20/solid";

interface Props {
  openNav:()=> void;
}

function Navbar({openNav}:Props) {
  return (
    <div className='w-[100%] sticky z-[10000] top-0 h-[12vh] shadow-md bg-[#010101]'>
        <div className='flex items-center justify-between w-[80%] mx-auto h-[100%]'>
            <h1 className='text-white font-bold text-[25px] cursor-pointer flex-[0.6]'>Portfolio</h1>
            <div className='nav-link'>Home</div>
            <div className='nav-link'>Education</div>
            <div className='nav-link'>Skills</div>
            <div className='nav-link'>Projects</div>
            <div onClick={openNav}>
              <Bars3Icon className='w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300' />
            </div>
        </div>
    </div>
  )
}

export default Navbar