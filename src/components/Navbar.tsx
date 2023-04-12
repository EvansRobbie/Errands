import React from 'react'
import {  NavbarProps } from '../type/type'
import { motion  } from 'framer-motion'
import {BsTelephoneFill} from 'react-icons/bs'
type Navbar = {
    navbar:NavbarProps
}

const Navbar = ({navbar:{links,socialIcons} }:Navbar) => {
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
    <div className='hidden absolute top-0 left-0 z-10 opacity:100 md:flex w-full h-16 items-center justify-between px-4'>
        <nav className='flex items-center w-full justify-between'>
            {navElements}
        </nav>
        <motion.div
        whileHover={{backgroundColor:['#ffffff', '#7EA14D', '#FFA500']}}
        transition= {{ loop: Infinity, duration: 1 }}
        
        className='flex items-center w-ful justify-center w-12 p-2 rounded-full h-12 bg-slate-200 mx-32'>
            <p className='text-slate-900 font-bold text-xl'>FM</p>
        </motion.div>
        <div className='flex items-center w-full justify-between'>
            {iconElements}
            <div className='flex items-center gap-4'>
                <BsTelephoneFill size={20}/>
            <span className='text-slate-200'>+254 704 563 123</span>
            </div>
            
        </div>
    </div>
  )
}

export default Navbar