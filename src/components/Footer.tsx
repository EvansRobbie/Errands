import React from 'react'
import {ImLocation2} from 'react-icons/im'
import {BsFillTelephoneFill,BsTelephone } from 'react-icons/bs'
import {FaEnvelope} from 'react-icons/fa'
const Footer = () => {
    const today = new Date()
  return (
    <div className=' w-full h-full flex items-center justify-between flex-col bg-slate-200/70 text-slate-900 py-4'>
        <div className='flex flex-col md:flex-row items-center w-full h-full justify-evenly border-b-2 border-slate-500 py-2'>

            <div className='flex flex-col items-center'>
                {/* Location */}
                <div className='flex w-full h-full items-center justify-between '>
                <ImLocation2 size={20}/>
                <h2 className='text-sm md:text-base font-semibold'>Rongai behind QuickMatt opp Massai Mall.</h2>
                </div>
                <div className='flex w-full h-full items-center justify-between '>
                    <BsFillTelephoneFill size={20}/>
                    <h2 className='text-sm md:text-base py-2 font-semibold'>+254 758 540 620</h2>
                </div>
                <div className='flex w-full h-full items-center justify-between '>
                    <BsTelephone size={20}/>
                <h2 className='text-sm md:text-base py-2 font-semibold'>+254 758 540 620</h2>
                </div>
                <div className='flex w-full h-full items-center justify-between '>
                    <FaEnvelope size={20}/>
                    <h2>evansitoden94@gmail.com</h2>
                </div>

            </div>
            <div className='flex items-center flex-col py-2'>
                {/* Important Links */}
                <h2 className='text-base md:text-lg font-bold capitalize underline underline-offset-2'>Important links</h2>
                <a className='text-sm md:text-base text-slate-950 hover:scale-105 duration-500 ease-in font-semibold' href="#about">About Us</a>
                <a className='text-sm md:text-base text-slate-950 hover:scale-105 duration-500 ease-in font-semibold' href="#services">Our Services</a>
                <a className='text-sm md:text-base text-slate-950 hover:scale-105 duration-500 ease-in font-semibold text-center' href="#frequent">Frequently Asked Questions <span>FAQs</span></a>
            </div>
            <div className='flex items-center py-4'>
                {/* subscribe */}
                <form action="" className='flex flex-col w-full items-center justify-between gap-4'>
                    <label htmlFor="email" className='capitalize text-sm md:text-base font-semibold'>
                        Subscribe to our newsletter
                    </label>
                    <div className='flex w-full items-center justify-between gap-4'>
                        <input type="email" placeholder='janedoe@gmail.com' id='email' className='px-4 py-1 flex items-center text-slate-200 rounded-full bg-slate-500/80 outline-none placeholder:text-slate-200/90' />
                        <button type='submit' className='bg-slate-900 text-slate-200 px-4 py-1.5 active:scale-105 hover:bg-transparent hover:text-slate-900 duration-500 ease-in hover:border border-orange-500  font-medium uppercase text-sm rounded-xl'>Subscribe</button>
                    </div>
                </form>
            </div>
        </div>
        <div className=" flex flex-col items-center w-full px-4 py-4">
        <p className="text-sm md:text-base  text-slate-950 font-semibold">
          {" "}
          &copy; {today.getFullYear()}. Nitume Errands Services. All Rights Reserved.
        </p>
        <p className="text-sm md:text-base font-semibold  text-slate-950 flex items-center justify-center">
          Made with <span className=" text-red-600 text-xl px-1 animate-pulse">&#x2764;</span> by <a href="https://evanrobbymacharia.netlify.app/" target='_blank' className="px-1 underline underline-offset-2 duration-500 transition-all hover:text-white">Robbievans</a>
        </p>
      </div>
    </div>
  )
}

export default Footer