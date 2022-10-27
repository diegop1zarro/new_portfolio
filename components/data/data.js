import { Settings, CropRotate, ViewInAr, PieChart, Code, BarChart, CloudOutlined, FavoriteBorder, Public, PersonOutlined, AddLocationAltOutlined, PhoneIphone, EmailOutlined, Facebook, Twitter, Instagram, YouTube } from "@mui/icons-material"
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
  {
    url: "/Services",
    text: "Services",
  },
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
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
]
export const about = [
  {
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur",
    desc1: "magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor si voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur",
    cover: "/img/man.png",
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
    category: "General",
    title: "Node JS",
  },
  {
    id: 3,
    cover: javascriptIcon,
    name: "Javascript",
    category: "General",
    title: "Brex Logo",
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
]

export const projects = [
  {
    id: 1,
    title: "Master These Awesome",
    date: "Jun 27, 2022",
    author: "Dorian Gray",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: "/img/blog/b1.png",
  },
  {
    id: 2,
    title: "Best Design Items to Appeal",
    date: "Jun 27, 2022",
    author: "Dorian Gray",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: "/img/blog/b2.png",
  },
  {
    id: 3,
    title: "The 20 Best Lightroom Presets",
    date: "Jun 27, 2022",
    author: "Dorian Gray",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: "/img/blog/b3.png",
  },
]
export const contact = [
  {
    icon: <AddLocationAltOutlined />,
    text1: "2651 Main Street, Suit 124",
    text2: "Seattle, WA, 98101",
  },
  {
    icon: <PhoneIphone />,
    text1: "0123456789",
    text2: "0345627891",
  },
  {
    icon: <EmailOutlined />,
    text1: "hello@thetheme.io",
    text2: "inf0@brex-theme.io",
  },
]
export const social = [
  {
    icon: <Facebook />,
  },
  {
    icon: <Twitter />,
  },
  {
    icon: <Instagram />,
  },
  {
    icon: <YouTube />,
  },
]