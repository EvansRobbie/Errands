import React from 'react'
import { GeneralProp } from '../type/type'
import circularImage from '../assets/sends.png'

type Hero = {
  hero:GeneralProp
}

const Hero = ({hero: {title, image, subtitle, text}}: Hero) => {
  // console.log(title)
  return (
    <div className='relative w-full h-screen  '>
      <div className='absolute opacity-20 top-1/2 left-[30%] -translate-x-1/2 -translate-y-1/2 z-10 lg:opacity-100 w-full max-w-[600px] h-[70vh] '>
        <img className='w-full h-full bg-contain' src={image} alt="" />
      </div>
      <div className='relative py-32 flex items-end justify-center  flex-col px-6 '>
        <h2 className=' text-[#7EA14D] text-center w-full max-w-[800px] text-2xl md:text-4xl font-cursive font-extrabold'>{title}</h2>
        <div className='absolute top-[40%] right-0 md:right-20  -translate-x-1/2 -translate-y-1/2 z-10 opacity-100 font-bold  text-orange-500 font-Raleway text-lg'>Rongai</div>
        <h3 className='text-slate-200 font-Necko my-4 text-start max-w-[550px] w-full text-xl md:text-2xl'>{subtitle}</h3>
        <p className='max-w-[550px] text-slate-200 text-start fon text-base font-Raleway'>{text}</p>
      </div>
      <div className='absolute flex justify-center items-center bottom-28 md:right-20 right-32 z-20'>
        <div className='w-[220px] h-auto  relative border-b border-orange-500 justify-center items-center rounded-full p-2 '>
          <img className='w-full h-full animate-spin-slow' src={circularImage} alt="" />
          <a className='text-slate-900 flex items-center justify-center  w-20 h-20 border hover:bg-transparent hover:text-orange-500 font-semibold  rounded-full absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 bg-orange-500 duration-500 ease-in' href="/">Send Me</a>      
        </div>
      
      </div>
    </div>
  )
}

export default Hero