import React from 'react'
import contact from '../assets/Projects/contactlist.png'
import commerce from '../assets/Projects/ecommerce.png'
import crysa from '../assets/Projects/crysa.png'
import movie from '../assets/Projects/movieapp.png'
import blog from '../assets/Projects/blog.png'

const MyWork = () => {

    // projects file
    const Projects = [
        {
            id:1,
            image: contact,
            github: "https://github.com/mohfelah/contact-list"
        },
        {
            id:2,
            image: commerce,
            github: "https://github.com/mohfelah/ecommerce-App"
        },
        {
            id:3,
            image: crysa
        },
        {
            id:4,
            image:  movie,
            github: "https://github.com/mohfelah/reactApp"
        },
        {
            id:5,
            image:  blog,
            github: "https://github.com/mohfelah/MERN-BLOG-PROJECT"
        },
    ];
    return (
        <div name='MyWork' className='w-full md:h-screen text-gray-300 bg-gradient-to-b from-gray-800 to-black'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-blue-600'>
                        My Work
                    </p>
                    <p className='py-6'>Check out some of my recent work</p>
                </div>

                {/* container for projects */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 px-12 sm:px-0">

                    {/* Gird Item */}
                    {Projects.map(({id, image ,github}) => (
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <img
                            src={image} alt=""
                            className='rounded-md duration-200 hover:scale-105'
                            /> 
                            <div className='flex items-center justify-center' >
                            <a href={github} target="_blank" rel="noreferrer">
                                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                                    code
                                </button>
                                </a>
                            </div>
                        </div>
                    ))}


                </div>
            </div>
        </div>
    )
}

export default MyWork