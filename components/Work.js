import React from 'react';
import Heading from './Heading';
import Image from 'next/image';

function Work() {
  return (
   <section className='container mx-auto py-10 px-4'>
    <Heading title='Creative Works'/>
    <div className='grid grid-cols-3 gap-4'>
        <div className='row-span-2 relative group'>
            <Image src="/work.jpg" width={500} height={500} alt=''/>
            <div className='bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white'>
                Project Title
            </div>

        </div>
        <div className=' relative group'>
            <Image src="/work1.jpg" width={500} height={500} alt=''/>
            <div className='bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white'>
                Project Title
            </div>
        </div>
        <div className=' relative group'>
            <Image src="/work2.jpg" width={500} height={500} alt=''/>
            <div className='bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white'>
                Project Title
            </div>
        </div>
        <div className=' relative group'>
            <Image src="/work3.jpg" width={500} height={500} alt=''/>
            <div className='bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white'>
                Project Title
            </div>

        </div>
        <div className=' relative group'>
            <Image src="/work4.jpg" width={500} height={500} alt=''/>
            <div className='bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white'>
                Project Title
            </div>

        </div>
    </div>
   </section>
  )
}

export default Work;