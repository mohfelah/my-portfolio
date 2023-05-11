import React from 'react'
import about from '../assets/about.png'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-blue-600'>
              About
            </p>
          </div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div>
            <img
              src={about}
              alt="my profile"
              className="image"
            />
          </div>
          <div>
            <p>rigour, sense of commitment and responsibility are my watchwords.
              every day is a new opportunity to learn and put my skills to the test.
              passionate about innovation and new techniques, I am always ready to
              take up new challenges and challenges!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About