import Link from 'next/link';
import React from 'react'

function Navbar() {
  return (
    <div className='bg-red-500 fixed top-o w-[100%] z-10'>
        <div className='container mx-auto flex justify-between items-center py-4'>
            <div className='text-[24px]'>Eva Rouse</div>
            <div className='flex gap-6'>
                <Link href="/"><p className='hover:text-[#ff4D41]'>Home</p></Link>
                <Link href="/"><p className='hover:text-[#ff4D41]'>About</p></Link>
                <Link href="/"><p className='hover:text-[#ff4D41]'>Protfolio</p></Link>
                <Link href="/"><p className='hover:text-[#ff4D41]'>Blog</p></Link>

               
            </div>

        </div>
    </div>
  )
}

export default Navbar;