import React from 'react'
import {motion} from 'framer-motion'

// type ServiceProp = {
//   name:string
//   x:string
//   y:string
// }
const Service = ({name, x, y}:{name:string, x:string, y:string})=>{
  return(
    <motion.div 
    whileHover={{scale:1.05}}
    initial={{x:0, y:0}}
    whileInView={{x:x, y:y}}
    transition={{duration:1.5}}
    className='flex items-center justify-between absolute 
     max-w-[100vw] xl:py-3 text-sm capitalize font-bold py-1 px-2  xl:px-6 md:py-1.5 md:px-3 lg:py-2 lg:px-4 
      rounded-full bg-transparent md:bg-slate-200 text-slate-200 hover:text-orange-500 md:hover:bg-slate-900  duration-500 ease-in  md:text-slate-900'>
    {name}
    </motion.div>
  )
}
const Services = () => {

  return (
    <div id='services' className='container max-w-[1100px] my-16'>
      <h1>Our services</h1>
      <h3>What we offer</h3>
      <div className='w-full h-full md:h-screen bg-circular relative flex items-center justify-center my-40 rounded-full'>
        <motion.div 
        whileHover={{scale:1.05}}
        
        className='flex items-center justify-center bg-transparent text-slate-200 md:bg-slate-200 md:text-slate-900 py-1.5 px-2 font-semibold md:py-3 md:px-5 rounded-full '>
        Grocery Shopping
        </motion.div>
        <Service name='House hunting' x='-20vw' y='-5vw '/>
        <Service name='Online order pick-up' x='15vw' y='-15vw'/>
        <Service name='Office to office errands' x='20vw' y='6vw '/>
        <Service name='Meal Services' x='0vw' y='12vw '/>
        <Service name='Liquor store deliveries' x='-20vw' y='-15vw '/>
        {/* <Service name='Confirmation of prices' x='15vw' y='-15vw '/> */}
        <Service name='Mama fua services' x='32vw' y='-5vw '/>
        <Service name='Laundry Pick-Up' x='0vw' y='-23vw '/>
        <Service name='Prescription Pick-Up' x='-25vw' y='18vw '/>
        <Service name='Confirmation of prices' x='18vw' y='18vw '/>
      </div>
    </div>
  )
}

export default Services