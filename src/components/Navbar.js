import React, { useState } from 'react'
import '../style/Navbar.css'
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div>
                <h1 className='yash'>Mohamed Elfelah</h1>
            </div>

            <div>
                <ul className='hidden md:flex'>
                    <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
                        <Link to='home' smooth={true} duration={500}>
                            Home
                        </Link>
                    </li>
                    <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
                        <Link to='about' smooth={true} duration={500}>
                            About
                        </Link>
                    </li>
                    <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
                        <Link to='experience' smooth={true} duration={500}>
                            Experience
                        </Link>
                    </li>
                    <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
                        <Link to='MyWork' smooth={true} duration={500}>
                            My Work
                        </Link>
                    </li>
                    <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
                        <Link to='contact' smooth={true} duration={500}>
                            Contact
                        </Link>
                    </li>
                </ul>

                {/* Hamburger */}
                <div onClick={handleClick} className='md:hidden z-10'>
                    {!nav ? <FaBars /> : <FaTimes />}
                </div>

                {/* Mobile menu */}
                <ul
                    className={
                        !nav
                            ? 'hidden'
                            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
                    }
                >
                    <li className='py-6 text-4xl'>
                        <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                            Home
                        </Link>
                    </li>
                    <li className='py-6 text-4xl'>
                        {' '}
                        <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                            About
                        </Link>
                    </li>
                    <li className='py-6 text-4xl'>
                        {' '}
                        <Link onClick={handleClick} to='experience' smooth={true} duration={500}>
                           Experience
                        </Link>
                    </li>
                    <li className='py-6 text-4xl'>
                        {' '}
                        <Link onClick={handleClick} to='MyWork' smooth={true} duration={500}>
                            My Work
                        </Link>
                    </li>
                    <li className='py-6 text-4xl'>
                        {' '}
                        <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                            Contact
                        </Link>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default Navbar