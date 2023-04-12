import HeroBg from '../assets/herobg.png'
import AboutImg from '../assets/about.png'
import {FaWhatsapp, FaTwitter, FaInstagram, FaEnvelope,} from 'react-icons/fa'


const navbar ={
    links:[
        {
        id:'#home',
        name: 'Home'
    },
    {
        id:'#about',
        name: 'about'
    },
    {
        id:'#services',
        name: 'services'
    },
    {
        id:'#testimonials',
        name: 'testimonials'
    },
    {
        id:'#contacts',
        name: 'contacts'
    },
],
socialIcons:[
    
        {
            id:1,
            icon : FaWhatsapp,
            link: 'www.instagram.com'
        },
        {
            id:2,
            icon : FaTwitter,
            link: 'www.instagram.com'
        },
        {
            id:3,
            icon : FaInstagram,
            link: 'www.instagram.com'
        },
    
]
}
const hero ={
    title: 'NI2ME ERRAND SERVICES',
    subtitle:'No man is an errand! kama uko busy, Nitume.',
    image: HeroBg,
    text: "We're here to help you tackle your daily errands and make your life easier. Let us take care of the little things, so you can enjoy more free time and peace of mind."

}
const about ={
    title: 'About us',
    subtitle: 'Who we are',
    image: AboutImg,
    text:'Welcome to our errand services website! We are a dedicated team of professionals committed to making your life easier by taking care of your errands. With our expertise in running errands, you can trust us to handle all of your needs with the utmost care and attention to detail. We offer a wide range of errand services, including grocery shopping, pet care, house cleaning, laundry, and much more. Our mission is to save you time and hassle, allowing you to focus on the things that matter most to you. Contact us today to learn more about how we can help you!'
}

const services = {
    title: 'Our services',
    subtitle: 'what we Offer',
    contents:[
        {
            id:1,
            title: 'Grocery Shopping',
            image: 'https://cdn-icons-png.flaticon.com/128/9709/9709605.png'

        },
        {
            id:2,
            title: 'Online order pick-up',

        },
        {
            id:3,
            title: 'Office to office errands',

        },
        {
            id:4,
            title: 'Meal Services',

        },
        {
            id:5,
            title: 'Liquor store deliveries',

        },
        {
            id:6,
            title: 'Confirmation of prices',

        },
        {
            id:7,
            title: 'House hunting',

        },
        {
            id:8,
            title: 'Mama fua services',

        },
        {
            id:9,
            title: 'Laundry Pick-Up',

        },
        {
            id:10,
            title: 'Prescription Pick-Up',

        },
    ]
}
const testimonials ={
    title: 'Testimonials',
    subtitle: 'What they say',
    contents:[
        {
            id:1,
            name: 'Faith Mutio',
            message: "I was hesitant to try an errand service at first, but this one exceeded all of my expectations. They are friendly, professional, and really go above and beyond to make sure I am satisfied. I don't know what I would do without them!"
        },
        {
            id:2,
            name: 'Faith Mutio',
            message: "I have been using this errand service for months now, and I couldn't be happier. They are reliable, efficient, and always get the job done. I highly recommend them to anyone looking for help with their daily tasks!"
        },
        {
            id:3,
            name: 'Evanrobby Macharia',
            message: 'I recently used this errand service for the first time and was blown away by their exceptional service. They were prompt, communicative, and completed all of my tasks with ease. I will definitely be using them again in the future.'
        },
    ]
}
const frequentsQ ={
    title: "FAQ's",
    subtitle: 'some of the frequently asked questions',
    questions:[
        {
            id:1,
            question:"What is an errand service, and what kind of errands do you run?",
            answer: " An errand service is a company that provides assistance to people who are too busy to complete their errands themselves. Errands may include grocery shopping, package delivery, picking up dry cleaning, and other tasks that busy people may not have time for."
        },
        {
            id:2,
            question:"What is an errand service, and what kind of errands do you run?",
            answer: " An errand service is a company that provides assistance to people who are too busy to complete their errands themselves. Errands may include grocery shopping, package delivery, picking up dry cleaning, and other tasks that busy people may not have time for."
        },
        {
            id:3,
            question:"How much do your services cost?",
            answer: " The cost of our services depends on the type and complexity of the errand. We offer customized pricing plans for our clients based on their specific needs."
        },
        {
            id:4,
            question:"How do I schedule an errand?",
            answer: " You can schedule an errand by contacting us through phone, email, or our website. We will work with you to arrange a convenient time and date for the errand."
        },
        {
            id:5,
            question:"Do you offer same-day service?",
            answer: " Yes, we offer same-day service for most errands. However, we recommend contacting us in advance to ensure availability."
        },
        {
            id:6,
            question:"Are your employees insured and bonded?",
            answer: " Yes, all our employees are insured and bonded to protect you and your property during the errand"

            
        },
        {
            id:7,
            question:"What is your cancellation policy?",
            answer: "We have a flexible cancellation policy that allows you to cancel or reschedule an errand at no charge up to 24 hours before the scheduled time. If you cancel within 24 hours of the scheduled time, a cancellation fee may apply."
        },
        {
            id:8,
            question:"How do I pay for your services?",
            answer: "We accept various forms of payment, including cash, credit card, and online payment methods. Payment is typically due at the time of service, although we may offer billing options for regular clients."
        },
        
    ]
}
const contacts = {
    title: 'Get in touch',
    subtitle: "Let's collaborate",
    socialIcons:[
        {
            id:1,
            name:'Whatsapp',
            icon : FaWhatsapp,
            link: 'www.instagram.com'
        },
        {
            id:2,
            name:'Twitter',
            icon : FaTwitter,
            link: 'www.instagram.com'
        },
        {
            id:3,
            name:'Instagram',
            icon : FaInstagram,
            link: 'www.instagram.com'
        },
        {
            id:4,
            name:'Email',
            icon : FaEnvelope,
            link: 'www.instagram.com'
        },
    ]
}

export {navbar, hero, about, services, testimonials,frequentsQ, contacts }