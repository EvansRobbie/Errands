import React from 'react'
import { GeneralProp } from '../type/type'

type About ={
    about:GeneralProp
}

const About = ({about :{title, subtitle, image, text}}: About) => {
    // console.log(title)
  return (
    <div id='about' className='container max-w-[1100px]   -mt-36 md:-mt-20 '>
    <h1 >{title}</h1>
    <h3>{subtitle}</h3>
    <div className='flex flex-row-reverse w-full h-full gap-2 items-center justify-betwee px-4'>
        <div className='w-full h-[30vh] hidden md:block md:opacity-100'>
            <img className='w-full h-full object-contain' src={image} alt="" />
        </div>
        <div className='max-w-[500px] w-full h-full font-Raleway text-sm md:text-base'>
            <p className=' px-2 md:px-6'>{text}</p>
        </div>
    </div>
    </div>
  )
}

export default About