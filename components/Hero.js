import React from 'react'
import Typewriter from 'typewriter-effect';
import Button from './Button';

function Hero() {
    return (
        <div className='bg-[url("/hero2.jpg")] h-screen bg-cover bg-center bg-fixed flex items-center'>
            <div className='container mx-auto px-4'>
                <div className='max-w-[450] text-white flex flex-col gap-[40px]'>
                    <div>
                        <h1 className='text-5xl text-blue-500'>I'm Shohidul Islam</h1>
                        <h4 className='text-2xl mt-3'>
                            <Typewriter
                                options={{
                                    strings: ['Frontend and Backend Developer', 'UI/UX Designer'],
                                    autoStart: true,
                                    changeDelay: 3,
                                    changeDeleteSpeed:2,
                                    loop: true,
                                }}
                            />
                        </h4>
                    </div>

                    <div className='bg-[#ff4d41] h-[2px] w-[40px]'></div>

                    <div>
                        <p>In a professional context it often happens that private clients corder apublication to be made.</p>
                        <Button link="#" text="Learn More"/>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Hero