import { css_icon, darkmode_icon, html_icon, js_icon, lightmode_icon, nextjs_icon, react_icon, redux_icon } from '../assets/icons';
import { amazon_clone, foodie_pos_page, hero_icon, nike_page, photography_page } from '../assets/images';

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#project", label: "Project" },
    { href: "#contact", label: "Contact" }
];

export const darklightMode = [
    {src: darkmode_icon, alt: "dark mode", text: "dark-mode"},
    {src: lightmode_icon, alt: "light mode", text: "light-mode"}
]

export const hero =[
    { src: hero_icon, alt: "hero", text: "Hero" }
]

export const skills= {
    my_skills:
    {
        title: "My Skills",
        subtitle: "My Knowledge",
        contents: [
            {
                name: "HTML",
                knowledge:"Advance",
                icon: html_icon,
                percentage: 88,
            },
            {
                name: "CSS",
                knowledge:"Advance",
                icon: css_icon,
                percentage:88,
            },
            {
                name: "Java Script",
                knowledge:"Advance",
                icon: js_icon,
                percentage: 83,
            },
            {
                name: "React JS",
                knowledge:"Intermediate",
                icon: react_icon,
                percentage: 75,
            },
            {
                name: "Next JS",
                knowledge:"Intermediate",
                icon: nextjs_icon,
                percentage: 66,
            },
            {
                name: "Redux",
                knowledge:"Beginner",
                icon: redux_icon,
                percentage:40,
            },
        ]
    }
}

export const projects_creations = {
    projects: {
        title: "Projects",
        subtitle: "My Creations",
        content: [
            {
                name: "Photography Page",
                title:"HTML Only Front-End",
                imgUrl: photography_page,
                href: "https://myhtmlcss-photoffee.netlify.app/",
            },
            {
                name: "Amazon Clone",
                title:"Nextjs and Tailwind CSS",
                imgUrl: amazon_clone,
                href: "https://x-amazon-clone-e-commerce.vercel.app/",
            },
            {
                name: "Nike Landing Page",
                title:"React Only Front-End",
                imgUrl: nike_page,
                href: "https://react-tailwindcss-nikedemo.netlify.app/",
            },
            {
                name: "Foodie-POS",
                title:"Nextjs Typescript Full Stack",
                imgUrl: foodie_pos_page,
                href: "https://foodie-pos-nextjs.vercel.app/",
            },
        ]
    }
}

export const contact_me = [
    {
        first_name:"First Name",
        last_name: "Last Name",
        user_email: "Email",
        phone_no: "Phone",
        message:"Your Message"
    }
    
]