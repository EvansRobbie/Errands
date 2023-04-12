import React, { ButtonHTMLAttributes, useEffect, useState } from 'react'
import {  NavbarProps } from '../type/type'
import { motion, AnimatePresence  } from 'framer-motion'
import {BsTelephoneFill} from 'react-icons/bs'
import {HiMenuAlt4} from 'react-icons/hi'
import {RxCross2} from 'react-icons/rx'
import MobileNav from '../MobileNav'
type Navbar = {
    navbar:NavbarProps
}

const Navbar = ({navbar:{links,socialIcons} }:Navbar) => {
    const [nav, setNav] = useState<boolean>(false)
    const [scrollNav, setScrollNav] = useState<boolean>(false);
    const handleNav:React.MouseEventHandler<HTMLDivElement> | undefined = () =>{
            setNav(!nav)
    }
    
    useEffect(() => {
      document.body.style.overflow = nav ? "hidden" : "scroll";
    }, [nav]);

    const navScroll = () => {
      window.scrollY > 30 ? setScrollNav(true) : setScrollNav(false);
    };

    useEffect(() => {
      window.addEventListener("scroll", navScroll);
      return () => {
        window.removeEventListener("scroll", navScroll);
      };
    });

   const navElements= links.map(({id, name}) =>
    <ul key={id}>
        <li className='capitalize font-Necko text-lg hover:text-orange-500 hover:scale-105 duration-500 ease-in'>
            <a href={id}>{name}</a></li>
    </ul>
   )

   const iconElements = socialIcons.map(({id, icon:Icon, link})=>
   <div key={id}>
    <a href={link} target='_blank'>
        <Icon size={25} className='hover:scale-105 hover:text-orange-500 duration-500 ease-in'/>
        
    </a>
    
   </div>
   )
  return (
    <div className='absolute top-0 left-0 z-100 h-full w-full flex items-center '>
        <div className={`${
        scrollNav
          ? "fixed bg-slate-900/50  bg-clip-padding backdrop-filter backdrop-blur bg-opacity-50 z-30"
          : "absolute "
      } w-full h-16 top-0 left-0 flex px-4  items-center justify-between opacity-100 z-50 duration-300 ease-in`}
    >

                <nav className=' hidden md:flex items-center w-full justify-between gap-4'>
                    {navElements}
                </nav>
                <div
                
                
                className='flex items-center w-ful justify-start  md:justify-center md:mx-32 h-20'>
                    <motion.p 
                    whileHover={{backgroundColor:['#ffffff', '#7EA14D', '#FFA500']}}
                    transition= {{ loop: Infinity, duration: 1 }}
                    className='text-slate-900 font-bold text-xl flex items-start md:items-center w-ful  justify-center   w-12 p-2 rounded-full h-12 bg-slate-200'>FM</motion.p>
                </div>
                <div className='hidden lg:flex items-center w-full justify-between gap-2'>
                    {iconElements}
                    <div className='flex items-center gap-2'>
                        <BsTelephoneFill size={20}/>
                    <span className='text-slate-200 text-sm'>+254 704 563 123</span>
                    </div>
                    
                </div>
                <div onClick={handleNav} className='block md:hidden absolute top-0 right-0 opacity-100 z-50'>
                {nav ? <RxCross2 size={30} className='m-2 text-slate-200 cursor-pointer'/> : <HiMenuAlt4 size={30} className='cursor-pointer m-2'/> } 
                </div>

                {/* Mobile Nav */}
            <MobileNav nav= {nav} handleNav = {handleNav} scrollNav ={scrollNav}/>
        </div>
       
    </div>
  )
}

export default Navbar