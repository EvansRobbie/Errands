import React from 'react'
import {motion, AnimatePresence} from 'framer-motion'

const MobileNav = ({nav, handleNav, scrollNav}:{nav:boolean, handleNav:React.MouseEventHandler<HTMLElement> | undefined, scrollNav:boolean}) => {
    // Link animation
    const SingleLink = {
        hidden:{
          opacity:0,
          y:-10
        },
        visible:{
          opacity:1,
          y:0
        },
        exit:{
          opacity:0,
          y:-10
        }
      }
  return (
    <div
    className={` ${
      nav ? "top-0 h-screen" : " -top-[120%]  " 
    } md:hidden fixed left-0 w-full z-30  bg-slate-900/60  bg-clip-padding backdrop-filter backdrop-blur bg-opacity-50 transition-all duration-300 delay-200
     opacity-100`}
  >
    <AnimatePresence>
        {
          nav && (

        <motion.ul
          onClick={handleNav}
          className={`${scrollNav? 'max-h-[60vh] pt-20': 'max-h-[50vh]'} bg-opacity-100 backdrop-blur flex flex-col  h-full w-full items-center justify-between py-10  bg-slate-200/50 `}
        >
          <motion.li 
          key='about'
          variants={SingleLink}
          initial='hidden'
          animate='visible'
          exit='exit'
          transition={{delay: 0.2, duration: 0.02}}
          className="mobile_li">
            <a href="#home">Home</a>
          </motion.li>
          <motion.li
          key='services'
          variants={SingleLink}
          initial='hidden'
          animate='visible'
          exit='exit'
          transition={{delay: 0.5, duration: 0.03}}
          onClick={handleNav} className="mobile_li">
            <a href="#about">About</a>
          </motion.li>
          <motion.li 
          key='health'
          variants={SingleLink}
          initial='hidden'
          animate='visible'
          exit='exit'
          transition={{delay:0.8, duration: 0.05}}
          onClick={handleNav} className="mobile_li">
          <a href="#services">Services</a>
          </motion.li>
          <motion.li
           key='career'
           variants={SingleLink}
           initial='hidden'
           animate='visible'
           exit='exit'
           transition={{delay:1, duration: 0.08}}
          onClick={handleNav} className="mobile_li">
            <a href="#testimonials">Testimonials</a>
          </motion.li>
          <motion.li
           key='contacts'
           variants={SingleLink}
           initial='hidden'
           animate='visible'
           exit='exit'
           transition={{delay:1.2, duration: 0.1}}
          onClick={handleNav} className="mobile_li">
            <a href="#contacts">Contact Us</a>
          </motion.li>
        </motion.ul>
          )
        }
    </AnimatePresence>
  </div>
  )
}

export default MobileNav