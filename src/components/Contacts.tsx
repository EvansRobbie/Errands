import { Tilt } from 'react-tilt'
import { ContactProp } from '../type/type'
type Contacts ={
    contacts:ContactProp
}

const Contacts = ({contacts:{title, subtitle, socialIcons}}:Contacts) => {
    const SocialElements = socialIcons.map(({id, name, icon: Icon, link}) =>
            <Tilt key={id} options={{speed:450, scale:1.1, max:45}} className='w-[150px] h-[20vh] md:w-[200px] md:h-[25vh] rounded-xl group border-2 flex items-center justify-center cursor-pointer border-black shadow-slate-900 shadow-md hover:shadow-orange-500 duration-500 ease-in'>
                {/* {icon} */}
                <a href={link} className='flex flex-col items-center gap-4' target='_blank' rel=''>
                <Icon size={30} className='text-slate-500 group-hover:scale-105 duration-500 ease-in'/>
                    <p>{name}</p>
                </a>
            </Tilt>
        
    )
  return (
    <div id='contacts' className='container max-w-[1100px] my-16 py-10'>
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <div className='flex flex-wrap gap-4 w-full items-center justify-evenly py-10'>
            {SocialElements}
        </div>
    </div>
  )
}

export default Contacts