import Link from 'next/link';
import React from 'react';
import { RiCloseFill } from 'react-icons/ri';


function Sidebar({inOpen,toggleSidebar}) {
  return (
    <div className={`w-screen h-screen ${inOpen ? "fixed" : "hidden"} top-0 left-0 bg-gray-800 z-20 text-white grid place-items-centen `}>
        <div className='absolute top-0 right-0 mr-[30px] mt-[10px] text-[24px] hover:cursor-pointer' onClick={toggleSidebar}>
            <RiCloseFill/>
        </div>
        
        <div className='flex flex-col gap-4 text-[28px]'>
            <Link href="/" className='hover:text-[#ff4D41]'>Home</Link>
            <Link href="/about" className='hover:text-[#ff4D41]'>About</Link>
            <Link href="/protfolio" className='hover:text-[#ff4D41]'>Protfolio</Link>
            <Link href="/blog" className='hover:text-[#ff4D41]'>Blogs</Link>
            <Link href="/contact" className='hover:text-[#ff4D41]'>Contact</Link>

        </div>

    </div>
  )
}

export default Sidebar;