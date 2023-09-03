import React from 'react';
import Heading from './Heading';

function Skills() {
  return (
      <section className='container mx-auto py-10 px-4'>
          <Heading title="About Me" />
          <p className='text-gray-600 -mt-10 mb-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.Nemo vitae dicta nihil cumque! officiis quasi, nesciunt at molestias maiores enim, quia fugit ad, architecto ess quasquod expedita eius quidem?</p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
            <p>React.js</p>
            <div className='relative bg-gray-400 h-[4px] mt-2'>
                <div className='bg-[#ff4D41] absolute h-[4px] w-[90%]'></div>
            </div>
            </div>

            <div>
            <p>Next.js</p>
            <div className='relative bg-gray-400 h-[4px] mt-2'>
                <div className='bg-[#ff4D41] absolute h-[4px] w-[70%]'></div>
            </div>
            </div>

            <div>
            <p>Node.js</p>
            <div className='relative bg-gray-400 h-[4px] mt-2'>
                <div className='bg-[#ff4D41] absolute h-[4px] w-[40%]'></div>
            </div>
            </div>

            <div>
            <p>Express.js</p>
            <div className='relative bg-gray-400 h-[4px] mt-2'>
                <div className='bg-[#ff4D41] absolute h-[4px] w-[60%]'></div>
            </div>
            </div>

            <div>
            <p>Redux</p>
            <div className='relative bg-gray-400 h-[4px] mt-2'>
                <div className='bg-[#ff4D41] absolute h-[4px] w-[70%]'></div>
            </div>
            </div>
            
          </div>

      </section>
  )
}

export default Skills;