import Link from 'next/link';
import React from 'react'
import {HiDocumentDownload} from 'react-icons/hi';
import {FiMenu} from 'react-icons/fi';


function Navbar() {
  return (
    <div className='bg-white fixed top-o w-[100%] z-10'>
        <div className='container mx-auto flex justify-between items-center py-4 px-4'>
            <div className='text-[24px]'>Eva Rouse</div>
            <div className='hidden md:flex gap-6'>
                <Link href="/"><p className='hover:text-[#ff4D41]'>Home</p></Link>
                <Link href="/"><p className='hover:text-[#ff4D41]'>About</p></Link>
                <Link href="/"><p className='hover:text-[#ff4D41]'>Protfolio</p></Link>
                <Link href="/"><p className='hover:text-[#ff4D41]'>Blog</p></Link> 
            </div>
            <a href='#' className='hidden md:flex border border-[#ff4D41] px-4 py-1 text-[#ff4D41] rounded-[5px] items-center gap-2 hover:bg-[#ff4D41] hover:text-white transition duration-200'>
                Download
               < HiDocumentDownload/>
            </a>
            <div className='md:hidden text-[24px]'>
              <FiMenu/>
            </div>

        </div>
    </div>
  )
}

export default Navbar;