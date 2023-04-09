import HeroBg from '../assets/herobg.png'
import AboutImg from '../assets/about.png'
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

const Services = {
    title: 'Our services',
    subtitle: 'what we Offer',
    contents:[
        {
            id:1,
            title: 'Grocery Shopping',

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
const Testimonials ={
    title: 'Testimonials',
    subtitle: 'What they say.',
    content:[
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

const Contacts = {
    title: 'Get in touch',
    subTitle: "Let's collaborate"
}

export {hero, about, Services, Testimonials, Contacts }