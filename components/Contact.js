import React from 'react'
import Heading from './Heading';

function Contact() {
  return (
    <section className='container mx-auto py-10 px-4'>
        <Heading title="Contact Us"/>
        <from className="flex flex-col gap-8">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <input type='text' placeholder='Name' className='inputStyle' required/>
                <input type='email' placeholder='Email' className='inputStyle' required/>
            </div>
            <input type='text' placeholder='Subject' className='inputStyle' required/>
            <textarea rows="6" placeholder='Message' className='inputStyle' required></textarea>

            <div>
                <button type='submit' className='btn'>SEND MESSAGE</button>
            </div>

        </from>

    </section>
  )
}

export default Contact;