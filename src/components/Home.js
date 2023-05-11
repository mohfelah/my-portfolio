import React from 'react'
import '../style/Home.css'
import mohamed from '../assets/mohamedFelah.jpg'
import {MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';


const Home = () => {
    
    return (
        <div name="home" className="h-screen w-full bg-white">
            <div className='max-w-screen-lg mx-auto flex flex-col
            items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h1 className='text-4xl sm:text-7xl font-bold text-blue-500'>I'm a Full Stack Developer</h1>
                    
                    <p className='text-gray-500 py-4 max-w-md'> I'am a Full Stack JavaScript Developer proficient in developing complex and interactive
                        web applications and problem solving, i have good understanding of web technologies such as HTML, CSS, and JavaScript and
                        JavaScript frameworks such as React, Angular as well as i have a strong knowlage about Node.js and espress
                        for back-end development.</p>
                    <Link to="MyWork" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                        My Portfolio
                        <span  className="group-hover:rotate-90 duration-300">
                            <MdOutlineKeyboardDoubleArrowRight />
                        </span>
                    </Link>
                </div>
                <div>
                    <img
                        src={mohamed}
                        alt="my profile"
                        className="image"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home