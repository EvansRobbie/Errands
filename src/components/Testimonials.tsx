import { TestimonialProp } from "../type/type"
import {GrBlockQuote} from 'react-icons/gr'
import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
type Testimonial = {
    testimonials: TestimonialProp
}
type FadeIn ={
    direction:string,
    type:string
    delay:number
    duration:number
}
const Testimonials = ({testimonials:{title, subtitle, contents}}:Testimonial) => {
    const Options = {
        max:45,
        scale:1,
        speed:450
    }
    const fadeIn = (direction:string, type:string, delay:number, duration:number) => {
        return {
          hidden: {
            x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
            y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
            opacity: 0,
          },
          show: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
              type: type,
              delay: delay,
              duration: duration,
              ease: "easeOut",
            },
          },
        };
      };
    const testimonialElement = contents.map((content, index)=>{
        const {id, name, message} = content
        return(
            <Tilt 
           
            options = {Options}
            key={id} 
            >
                <motion.div
                variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
                initial='hidden'
                animate='show'
            className='relative border-2 font-Raleway shadow-md group shadow-slate-900 hover:shadow-orange-500 duration-500 ease-in border-black px-2 py-3 rounded-xl'>
                <h2 className="text-sm md:text-base ">{message}</h2>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-50">
                    <GrBlockQuote size={100} className='text-slate-200/30'/>
                </div>
                
                <h3 className="text-end font-Necko font-bold text-base group-hover:text-[#7EA14D]">~ {name}</h3>
                </motion.div>
            </Tilt>
        )
    })
  return (
    <div id="testimonials" className='container max-w-[1100px] my-16'>
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 gap-6 py-5">
            {testimonialElement}
        </div>
    </div>
  )
}

export default Testimonials