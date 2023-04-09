import React from 'react'
import { GeneralProp } from '../type/type'

type About ={
    about:GeneralProp
}

const About = ({about :{title, subtitle, image, text}}: About) => {
    // console.log(title)
  return (
    <div className='h-full w-full max-w-[1100px] mx-auto shadow-2xl rounded-2xl shadow-slate-500 flex flex-col items-center -mt-20 justify-center'>
    <h1 className='text-4xl font-bold text-[#7EA14D] font-cursive underline underline-offset-4 pt-4 '>{title}</h1>
    <h3 className='text-orange-500 py-2'>{subtitle}</h3>
    <div className='flex flex-row-reverse w-full h-full gap-2 items-center justify-betwee px-4'>
        <div className='w-full h-[30vh] hidden md:block md:opacity-100'>
            <img className='w-full h-full object-contain' src={image} alt="" />
        </div>
        <div className='max-w-[500px] w-full h-full font-Raleway text-sm'>
            <p className=' px-2 md:px-6'>{text}</p>
        </div>
    </div>
    </div>
  )
}

export default About