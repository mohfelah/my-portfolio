import React from 'react'
import html from '../assets/Experience/html.png'
import css from '../assets/Experience/CSS3_logo.png'
import javascript from '../assets/Experience/javascript.png'
import typescript from '../assets/Experience/Typescript.png'
import reactImg from '../assets/Experience/reactlogo.png'
import node from '../assets/Experience/nodejs1.png'
import express from '../assets/Experience/express.png'
import mongodb from '../assets/Experience/mongo.png'
import tailwind from '../assets/Experience/tailwindCss.jpg'
import github from '../assets/Experience/github.png'
import angular from '../assets/Experience/angular.png'
import postman from '../assets/Experience/postman.png'

const Experience = () => {

  const techs = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500'

    },
    {
      id: 2,
      src: css,
      title: 'Css',
      style: 'shadow-blue-500'

    },
    {
      id: 3,
      src: javascript,
      title: 'JavaScript',
      style: 'shadow-yellow-500'

    },
    {
      id: 4,
      src: typescript,
      title: 'TypeScript',
      style: 'shadow-blue-500'

    },
    {
      id: 5,
      src: tailwind,
      title: 'TailWind Css',
      style: 'shadow-sky-400'

    },
    {
      id: 6,
      src: reactImg,
      title: 'React',
      style: 'shadow-blue-600'

    },
    {
      id: 7,
      src: node,
      title: 'NodeJS',
      style: 'shadow-green-500'

    },
    {
      id: 8,
      src: express,
      title: 'ExpressJS',
      style: 'shadow-yellow-400'

    },
    {
      id: 9,
      src: mongodb,
      title: 'Mongo DB',
      style: 'shadow-green-400'

    },
    {
      id: 10,
      src: github,
      title: 'GitHub',
      style: 'shadow-gray-500'

    },
    {
      id: 11,
      src: angular,
      title: 'Angular',
      style: 'shadow-red-500'

    },
    {
      id: 12,
      src: postman,
      title: 'Postman',
      style: 'shadow-orange-700'

    },
    
  ]
  return (
    <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-blue-600 '>
          Experience
        </p>
        <p className='py-6'>These are the technologies I've worked with.</p>
        <div className='w-full grid grid-cols-4 sm:grid-cols-4 gap-4 text-center py-8 px-12 sm:px-0'>
        {techs.map(({ id, src, title, style }) => (
          <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
            <img src={src} alt="" className='w-20 h-20 mx-auto' />
            <p className='my-4'>{title}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default Experience