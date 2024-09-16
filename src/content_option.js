import Sociate from '../src/assets/images/Sociate.png'
import Scribblr from '../src/assets/images/Scribblr.png'
import Cashly from '../src/assets/images/cashly.png'
import Emart from '../src/assets/images/emart.png'
import StreamVid from '../src/assets/images/StreamVid.png'
import Ecommerce from '../src/assets/images/Ecommerce.png'
import Facebook from '../src/assets/images/Facebook.png'


const logotext = "Shreenarayan | Full Stack Maverick  🚀";
const meta = {
    title: "Shreenarayan J.",
    description: "I’m Shreenarayan Mern stack dev _ Full stack devloper,currently working in Mumbai",
};

const introdata = {
    title: "I’m Shreenarayan Jaiswal",
    animated: {
        first: "I work from concept to  deployment",
        second: "I create seamless experiences from ideas",
        third: "I craft engaging, innovative websites",
    },
    description: "I breathe life into web applications that don't just meet expectations – they shatter them.",
    your_img_url: "https://raw.githubusercontent.com/developedbyed/react-portofolio-with-tailwind/main/public/dev-ed-wave.png",
};

const dataabout = {
    title: "a bit about my self",
    aboutme: "My code is my canvas, and every project is a masterpiece in the making.",
};


const skills = [{
        name: "C++",
        value: 50,
    },
    {
        name: "TypeScript",
        value: 70,
    },
    {
        name: "Javascript",
        value: 90,
    },
    {
        name: "MERN",
        value: 90,
    },
    {
        name: "PostgreSQL",
        value: 90,
    },
];



const dataportfolio = [
    {
        img: Scribblr,
        name:"Scribblr",
        description: "Your Ultimate Blogging Hub—Create, Connect, and Curate with Profile Management, Author Following, Blog Publishing, Bookmarking, and More!",
        tech:["React.js", "clouflare-workers", "postgreSQL", "tailwindCSS", "firebase", "prisma"],
        link: "",
        code:"https://github.com/shreenarayan123/Scribblr",
    },
    {
        img:Sociate,
        name:"Sociate",
        description: "The All-in-One Social Media Experience—Chat, Share, and Connect!",
        tech:["React.js", "express.js", "mongodb","redux", "firebase", "socket.io", "css", "bcrypt", "multer"],
        link: "",
        code:"https://github.com/shreenarayan123/Sociate",
    },
    {
        img: Cashly,
        name:"Cashly",
        description: "Experiance seamless digital payments",
        tech:["React.js", "express.js", "mongodb", "tailwindCSS"],
        link: "https://cashly-eight.vercel.app",
        code:"https://github.com/shreenarayan123/cashly"
    },
    {
        img: Emart,
        name:"Emart",
        description: "Your ultimate online shopping destination! Sign up, browse endless categories, filter like a pro, and rock a wishlist with easy checkout. ",
        tech:["React.js", "sass", "strapi CMS", "stripe","redux","cloudinary", "postgreSQL"],
        link: "https://emart-k5vl.vercel.app",
        code:"https://github.com/shreenarayan123/emart"
    },
    {
        img: StreamVid,
        name:"StreamVid",
        description: "Your next-gen video hub! Browse, filter by category and likes, and enjoy a seamless viewing experience with our signup-free access!",
        tech:["React.js", "tailwindCSS", "rapidApi"],
        link: "https://youtube-livid-beta.vercel.app/",
        code:"https://github.com/shreenarayan123/youtube"
    },

    {
        img: Ecommerce,
        name:"E-commerce",
        description: "Modern E-commerce platform landing page",
        tech:["html" ,"css", "javascript", "bootstrap"],
        link: "https://shreenarayan123.github.io/E-commerce/",
        code:"https://github.com/shreenarayan123/E-commerce"
    },
    {
        img: Facebook,
        name:"Pulse",
        description: "A Facebook-like social media app responsive lading page with theme and font customization",
        tech:["html" ,"css", "javascript"],
        link: "https://shreenarayan123.github.io/Facebook-clone/",
        code:"https://github.com/shreenarayan123/Facebook-clone"
    }
];

const contactConfig = {
    YOUR_EMAIL: "narayanjaiswal030@gmail.com",
    YOUR_FONE: "9819280322",
        // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/shreenarayan123",
    linkedin: "https://www.linkedin.com/in/shreenarayan-jaiswal-092025283/",
    twitter: "https://x.com/Shreenarayan521",
};
export {
    meta,
    dataabout,
    dataportfolio,
    skills,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};