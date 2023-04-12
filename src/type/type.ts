import { IconType } from "react-icons"

export interface GeneralProp  {
   
    title: string
    subtitle: string
    image: string,
    text: string

}
export interface NavbarProps {
    links:{
        id:string
        name:string
    }[]
    socialIcons:{
        id:number
        icon: IconType
        link?: string
        phoneNumber?: string
    }[]
}
export interface ServicesProp {
    title: string
    subtitle: string
}
export interface TestimonialProp {
    title: string
    subtitle: string
    contents:{
        id: number
        name:string
        message:string
    }[]
}
export interface ContactProp {
    title: string
    subtitle: string
    socialIcons:{
        id: number
        name:string
        icon:IconType
        link:string
    }[]
}
