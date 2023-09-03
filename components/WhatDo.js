import React from 'react';
import Heading from './Heading';
import { RiLightbulbFlashFill } from 'react-icons/ri';

function WhatDo() {
  return (
    <section className='container mx-auto py-10 px-4 '> 
       <Heading title='What I Do'/>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <div className='shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#ff4d41] text-white'>
        <RiLightbulbFlashFill className='text-[28px]'/>
        <h2 className='font-medium text-[20px]'>Creative Designs</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.Nemo vitae dicta nihil cumque! officiis quasi, nesciunt at  molestias maiores enim, quia fugit ad, architecto ess quasquod expedita eius quidem?</p>

        </div>
        <div className='shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#ff4d41] text-white'>
        <RiLightbulbFlashFill className='text-[28px]'/>
        <h2 className='font-medium text-[20px]'>Creative Designs</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.Nemo vitae dicta nihil cumque! officiis quasi, nesciunt at  molestias maiores enim, quia fugit ad, architecto ess quasquod expedita eius quidem?</p>

        </div>
        <div className='shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#ff4d41] text-white'>
        <RiLightbulbFlashFill className='text-[28px]'/>
        <h2 className='font-medium text-[20px]'>Creative Designs</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.Nemo vitae dicta nihil cumque! officiis quasi, nesciunt at  molestias maiores enim, quia fugit ad, architecto ess quasquod expedita eius quidem?</p>

        </div>
    </div>
    
  
    

    </section>
    )
}

export default WhatDo;