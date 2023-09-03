import React from 'react';
import Heading from './Heading';

import { AiOutlineGift } from 'react-icons/ai';
import { FiBookOpen } from 'react-icons/fi';
import { BsGlobe2 } from 'react-icons/bs';
import { TbPacman } from 'react-icons/tb';
import { IoLocationOutline } from 'react-icons/io5';
import Button from './Button';
import Image from 'next/image';


function About() {
    return (
        <section className='container mx-auto py-10 px-4'>
            <Heading title="About Me" />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'>
                <div>
                    <Image  src='/hero1.jpg' alt='' width={400} height={50}/>
                </div>
                <div>
                    <div className='flex items-center justify-between w-[300px]'>
                        <div className='flex flex-col gap-6'>
                            <div className='flex gap-4 items-center font-medium'>
                                <AiOutlineGift className='text-[#ff4D41] text-[22px]' />
                                Birthday
                            </div>
                            <div className='flex gap-4 items-center font-medium'>
                                <FiBookOpen className='text-[#ff4D41] text-[22px]' />
                                Study
                            </div>
                            <div className='flex gap-4 items-center font-medium'>
                                <TbPacman className='text-[#ff4D41] text-[22px]' />
                                Website
                            </div>
                            <div className='flex gap-4 items-center font-medium'>
                                <BsGlobe2 className='text-[#ff4D41] text-[22px]' />
                                Interest
                            </div>
                            <div className='flex gap-4 items-center font-medium'>
                                <IoLocationOutline className='text-[#ff4D41] text-[22px]' />
                                Location
                            </div>
                        </div>

                        <div className='flex flex-col gap-6 text-gray-600'>
                            <div>:</div>
                            <div>:</div>
                            <div>:</div>
                            <div>:</div>
                            <div>:</div>
                        </div>

                        <div className='flex flex-col gap-6 text-gray-600'>
                            <div>27.09.1999</div>
                            <div>University of chicago</div>
                            <div>www.dummy.com</div>
                            <div>Reading. blogging</div>
                            <div>4610 Riverwood Drive</div>

                        </div>

                    </div>
                    <div className='max-w-[800px]'>
                        <h2 className='font-bold mt-16 mb-10'>I am shohidul Frontend and Backend Developer</h2>
                         <p>Hi! My name is shohidul.I am a Web Developer, I am very passionate and dedi my work. With 20 years experience as professinal</p>
                         <Button link="#" text="Hire Me"/>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default About;