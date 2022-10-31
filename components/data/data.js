import { Settings, CropRotate, ViewInAr, PieChart, Code, BarChart,AddLocationAltOutlined, PhoneIphone, EmailOutlined,GitHub, Email , LinkedIn , WhatsApp} from "@mui/icons-material"
import postgresqlIcon from '@iconify-icons/logos/postgresql';
import css3 from '@iconify-icons/logos/css-3';
import nodejsIcon from '@iconify-icons/logos/nodejs-icon';
import javascriptIcon from '@iconify-icons/logos/javascript';
import html5 from '@iconify-icons/logos/html-5';
import bootstrapIcon from '@iconify-icons/logos/bootstrap';
import reactIcon from '@iconify-icons/logos/react';
import reduxIcon from '@iconify-icons/logos/redux';
import sequelizeIcon from '@iconify-icons/logos/sequelize';
import expressIcon from '@iconify-icons/logos/express';
import sassIcon from '@iconify-icons/logos/sass';

export const navlink = [
  {
    url: "/",
    text: "Home",
  },
  {
    url: "/About",
    text: "About",
  },
  // {
  //   url: "/Services",
  //   text: "Services",
  // },
  {
    url: "/Skills",
    text: "Skills",
  },
  {
    url: "/Projects",
    text: "Projects",
  },
  {
    url: "/Contact",
    text: "Contact",
  },
]
export const home = [
  {
    text: "HELLO I'M",
    name: "DIEGO PIZARRO",
    post: "DEVELOPER WEB",
    design: "FULL STACK",
    desc: "Welcome to my portfolio, I am an enthusiastic developer, eager to continue learning and improving day by day. Do not hesitate to contact me",
  },
]
export const about = [
  {
    desc: "It's time to tell a little about myself, in February 2022 I took a programming course, an intensive bootcamp for I am Henry, in which I spent more than 900 hours of coding, graduating as a full stack in July of that same year",
    desc1: "I am currently looking for a job, I really want to be able to work on what I am passionate about, improve myself every day, learn new technologies and perfect myself in the ones I already know.",
    cover: "/img/man.jpg",
  },
]
export const services = [
  {
    id: 1,
    icon: <Settings />,
    title: "Creative Design",
    desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  },
  {
    id: 2,
    icon: <CropRotate />,
    title: "Clean Code",
    desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  },
  {
    id: 3,
    icon: <ViewInAr />,
    title: "Responsive Design",
    desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  },
  {
    id: 4,
    icon: <PieChart />,
    title: "Material UI	",
    desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  },
  {
    id: 5,
    icon: <Code />,
    title: "Material UI Icons",
    desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  },
  {
    id: 6,
    icon: <BarChart />,
    title: "Awesome Support",
    desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  },
]

export const skills = [
  {
    id: 1,
    cover: css3,
    name: "Css",
    category: "Front-End",
    title: "Css 3",
  },
  {
    id: 2,
    cover: nodejsIcon,
    name: "Node JS",
    category: "Back-End",
    title: "Node JS",
  },
  {
    id: 3,
    cover: javascriptIcon,
    name: "Javascript",
    category: "General",
    title: "Javascript",
  },
  {
    id: 4,
    cover: html5,
    name: "HTML 5",
    category: "Front-End",
    title: "HTML 5",
  },
  {
    id: 5,
    cover: bootstrapIcon,
    name: "Bootstrap",
    category: "Front-End",
    title: "Bootstrap",
  },
  {
    id: 6,
    cover: reactIcon,
    name: "React",
    category: "Front-End",
    title: "React",
  },
  {
    id: 7,
    cover: reduxIcon,
    name: "Redux",
    category: "Front-End",
    title: "Redux",
  },
  {
    id: 8,
    cover: sequelizeIcon,
    name: "Sequelize",
    category: "Back-End",
    title: "Sequelize",
  },
  {
    id: 9,
    cover: expressIcon,
    name: "Express",
    category: "Back-End",
    title: "Express",
  },
  {
    id: 10,
    cover: sassIcon,
    name: "Sass",
    category: "Front-End",
    title: "Sass",
  },
  {
    id: 11,
    cover: postgresqlIcon,
    name: "postgresSql",
    category: "Back-End",
    title: "PostgresSql",
  },
]

export const projects = [
  {
    id: 1,
    title: "Videogames",
    date: "June, 2022",
    author: "Diego Pizarro",
    desc: "'SPA' App that includes: searches, filters, order and creation, with additions to eliminate a creation of mine, for the Front-end I used React, Redux, HTML and pure CSS, the Back-end was developed in Node.js with Express. Database in PostgreSQL and Sequelize.",
    cover: "/img/project/videogame.png",
    page:"https://videogame-app.vercel.app",
    code:"https://github.com/diegop1zarro/proyect-videogames"
  },
  {
    id: 2,
    title: "Dogs",
    date: "June, 2022",
    author: "Diego Pizarro",
    desc: "'SPA' App that includes: searches, filters, order and creation, with additions to eliminate a creation of mine, for the Front-end I used React, Redux, HTML and pure CSS, the Back-end was developed in Node.js with Express. Database in PostgreSQL and Sequelize.",
    cover: "/img/project/dogs.png",
    page:"https://deploy-dogs.vercel.app",
    code:"https://github.com/diegop1zarro/proyect-Dogs"
  },
  {
    id: 3,
    title: "Henry Shoes",
    date: "July, 2022",
    author: "Diego Pizarro",
    desc: "This project was made for a final presentation of Henry's bootcamp, it consists of an E-commerce for sneakers, which allows us to log in, add products to our cart, see the status of our purchase, etc. It also has an Admin panel to add products, categories, brands, change the status of purchases, etc.",
    cover: "/img/project/henryshoes.png",
    page:'https://app-henry-shoes.herokuapp.com',
    code:"https://github.com/alemosmusi/ecommerce"
  },
]
export const contact = [
  {
    icon: <AddLocationAltOutlined />,
    text1: "Córdoba, Argentina",
    // text2: "",
  },
  {
    icon: <PhoneIphone />,
    text1: "3516137592",
    // text2: "0345627891",
  },
  {
    icon: <EmailOutlined />,
    text1: "diego.cab.1016@gmail.com",
    // text2: "inf0@brex-theme.io",
  },
]
export const social = [
  {
    link:'https://api.whatsapp.com/send/?phone=%2B543516137592&text&type=phone_number&app_absent=0',
    icon: <WhatsApp/>,
  },
  {
    link:'https://github.com/diegop1zarro',
    icon: <GitHub/>,
  },
  {
    link:'https://www.linkedin.com/in/diegopizarro10/',
    icon: <LinkedIn />,
  },
  {
    link:'mailto:diego.cab.1016@gmail.com?Subject=Aquí%20el%20asunto%20del%20mail',
    icon: <Email/>,
  },
]