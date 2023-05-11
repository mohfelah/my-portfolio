import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/17a37431-6199-41cb-9bb8-80ac3d6eda38" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-blue-600'>Contact</p>
                <p className='text-gray-300 py-4'> Submit the form below to get in touch with me:</p>
            </div>
            <input className='bg-transparent border-2 text-white' type="text" placeholder='Enter your name' name='name' />
            <input className='my-4 border-2 bg-transparent text-white' type="email" placeholder=' Enter your email' name='email' />
            <textarea className='bg-transparent border-2 text-white' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-blue-600 hover:border-blue-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's talk</button>
        </form>
    </div>
  )
}

export default Contact