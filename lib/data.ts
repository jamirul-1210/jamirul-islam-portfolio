
export const info = {
    name: "Jamirul Islam",
    email: "developer@jamirul.site",
    description: "Full Stack Developer building exceptional digital experiences.",
    location: "Kolkate, India",
    about:`
    I'm a Full Stack Developer with a passion for building exceptional digital experiences. I specialize in creating dynamic, responsive web applications with a focus on user experience. I have experience working with both front-end and back-end technologies, and I'm always looking to expand my skill set.`,
    resumeLink:"https://drive.google.com/file/d/1VQmpxExsyU2AAJHU_RTD1gnPcN712mNs/view?usp=sharing"
}

export const socialLinks = {
    github:"https://github.com/jamirul-1210",
    linkedIn:"https://www.linkedin.com/in/jamirul/",
    twitter:"https://x.com/myself_jamirul",
    mail:`mailto:${info.email}`
}

export const projects = [
    {
        title: "Real-time Chat App",
        description: "Real-time chat application with user authentication and online status",
        image: "/chatapp.png",
        technologies: ["Next.js", "TypeScript", "Express.js", "MongoDb", "Socket.io", "Tailwind CSS",],
        liveUrl: "https://chatapp.jamirul.site/",
        githubUrl: "https://github.com/jamirul-1210/mern-chat-app",
        category: "fullstack"
    },

    {
        title: "Real-time Analytics Dashboard",
        description: "Interactive dashboard for real-time data visualization",
        image: "/todo.png",
        technologies: ["React.js", "Redux", "Typescript"],
        liveUrl: "",
        githubUrl: "https://github.com/jamirul-1210/react-redux-typescript",
        category: "frontend"
    },
    {
        title: "Video Transcoding Service",
        description: "video transcoding and processing",
        image: "/video-transcoding.jpg",
        technologies: ["AWS","lambda","S3","MediaConvert","Typescript"],
        liveUrl: "",
        githubUrl: "https://github.com/jamirul-1210/video-transcoding",
        category: "devops"
    },
]

export const skills = {
    frontend:[
        {
            name: "HTML",
            icon: "",
            level: "85%"
        },
        {
            name: "CSS",
            icon: "",
            level: "85%"
        },
        {
            name: "JavaScript",
            icon: "",
            level: "85%"
        },
        {
            name: "TypeScript",
            icon: "",
            level: "65%"
        },
        {
            name: "React.js",
            icon: "",
            level: "72%"
        },

        {
            name: "Next.js",
            icon: "",
            level: "76%"
        },
        {
            name: "Tailwind",
            icon: "",
            level: "75%"
        },

    ] ,
    backend: [
        {
            name: "Node.js",
            icon: "",
            level: "90%"
        },
        {
            name: "Express",
            icon: "",
            level: "90%"
        },
        {
            name:"MongoDb",
            icon:"",
            level:"70%"
        },
        {
            name: "PostgreSQL",
            icon: "",
            level: "60%"
        },
        {
            name: "Prisma",
            icon: "",
            level: "75%"
        },
        {
            name: "GraphQL",
            icon: "",
            level: "20%"
        },
        {
            name: "Socket.io",
            icon: "",
            level: "60%"
        }

    ],
    devops: [
        {
            name: "Docker",
            icon: "",
            level: "90%"
        },
        {
            name: "Kubernetes",
            icon: "",
            level: "20%"
        },
        {
            name: "AWS",
            icon: "",
            level: "60%"
        },
        {
            name:"Cloudflare",
            icon:"",
            level:"40%"
        }
    ],
    tools: [
        {
            name: "Git",
            icon: "",
            level: "70%"
        },
        {
            name: "Jenkins",
            icon: "",
            level: "40%"
        },
    ]
};