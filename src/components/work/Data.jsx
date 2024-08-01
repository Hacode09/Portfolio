import InstaClone from "../../assests/instaclone.jpg";
import Codeditor from "../../assests/code-editor.jpg";
import gymImage from "../../assests/fitness-club.jpg";
import realtimechat from "../../assests/chatapp.avif";
import microservices from "../../assests/microservices.png";
import calculator from "../../assests/calculator.jpg";

export const projectsData = [
    {
        id: 1,
        image: realtimechat,
        title: "Real Time Chat Application",
        category: "backend",
        url: "https://github.com/Hacode09/Nodejs-Chat-application",
        skills: "Node.Js, Web Socket, Chat Engine, JavaScript, HTML, CSS",
        demo: "https://github.com/Hacode09/Nodejs-Chat-application",
    },

    {
        id: 2,
        image: gymImage,
        title: "Fitness Club",
        category: "frontend",
        url: "https://github.com/Hacode09/my-gym-website",
        skills: "ReactJs, JavaScript, HTML, CSS",
        demo: "https://er-rahulgym-web.netlify.app/",
    },
    {
        id: 3,
        image: InstaClone,
        title: "Instagram Clone",
        category: "frontend",
        url: "https://github.com/Hacode09/insta-clone",
        skills: "ReactJs, JavaScript, Firebase, HTML, CSS",
        demo: "https://github.com/Hacode09/insta-clone",
    },

    {
        id: 4,
        image: microservices,
        title: "Microservices Connector",
        category: "backend",
        url: "https://github.com/Hacode09/nest-rbtmq-jwt-auth-mservices",
        skills: "JavaScript, NestJs, RabbitMQ, JWT, MongoDB, HTML",
        demo: "https://github.com/Hacode09/nest-rbtmq-jwt-auth-mservices",
    },

    {
        id: 5,
        image: Codeditor,
        title: "Code Editor",
        category: "frontend",
        url: "https://github.com/Hacode09/REditor",
        skills: "HTML, CSS, JavaScript",
        demo: "https://github.com/Hacode09/REditor",
    },

    {
        id: 6,
        image: calculator,
        title: "Calculator",
        category: "frontend",
        url: "https://github.com/Hacode09/Calculator",
        skills: "HTML, CSS, JavaScript",
        demo: "hhttps://hacode09.github.io/Calculator/",
    },

];

export const projectsNav = [
    {
        name: "all",
    },
    {
        name: "frontend",
    },
    {
        name: "backend",
    },
    {
        name: "projects",
    },
];
