import React from 'react'
import {
    FaGithub,
    FaLinkedin,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import cv from '../assets/resume.pdf'

const Social = () => {
    return (
        <div className='hidden lg:flex fixed flex-col top-[35%]'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-5px] duration-300 bg-blue-600'>
                    <a
                        className='flex justify-around items-center w-full text-gray-300'
                        href='https://www.linkedin.com/in/elfelah-mohamed-38761222b/'
                    >
                        Linkedin <FaLinkedin size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a
                        className='flex justify-around items-center w-full text-gray-300'
                        href='https://github.com/mohfelah'
                    >
                        Github <FaGithub size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565858]'>
                    <a
                        className='flex justify-around items-center w-full text-gray-300'
                        href="mailto:felahmohamed34@gmail.com"
                    >
                        Email <HiOutlineMail size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a
                        className='flex justify-around items-center w-full text-gray-300'
                        href={cv} download={cv}>
                        Resume <BsFillPersonLinesFill size={30} />
                    </a>
                </li>
            </ul>
        </div>

    )
}

export default Social