import { ReactComponent as AndroidIcon } from "../assets/icons/AndroidIcon.svg"
import { ReactComponent as KotlinIcon } from "../assets/icons/KotlinIcon.svg"
import { ReactComponent as MongoDbIcon } from "../assets/icons/MongoDbIcon.svg"
import { ReactComponent as ReactIcon } from "../assets/icons/ReactIcon.svg"
import { ReactComponent as SpringBootIcon } from "../assets/icons/SpringBootIcon.svg"
import { ReactComponent as TypescriptIcon } from "../assets/icons/TypescriptIcon.svg"
import { ReactComponent as HerokuIcon } from "../assets/icons/HerokuIcon.svg"
import { ReactComponent as NoneIcon } from "../assets/icons/QuestionMarkIcon.svg"

import webPageImage from '../assets/images/my_page.png'
import romExample from '../assets/images/app_rom_in_progress_priv.png'

export interface ProjectDetails {
    heading: string,
    description: Array<string>,
    iconPath: string,
    alt: string,
    frameWorkIcons: React.ElementType[],
    frameWorkHeaders: Array<string>,
    projectUrls: Array<string>,
    images: Array<string>
}

export interface Project {
    webProfile: ProjectDetails,
    projectROM: ProjectDetails
}

const projects: Project = {
    webProfile: {
        heading: "/web",
        description: ["I wanted a portfolio-esque website where I can play around with frameworks and eventually implement cool stuff. Built with React, styled with Chakra, hosted with Heroku."],
        iconPath: "",
        alt: "No icon found",
        frameWorkIcons: [
            ReactIcon,
            TypescriptIcon,
            HerokuIcon,
            NoneIcon,
            NoneIcon
        ],
        frameWorkHeaders: [
            "React",
            "TypeScript",
            "Heroku",
            "TSParticles",
            "Chakra UI"
        ],
        projectUrls: [
            "https://github.com/patriknotvincent/web"
        ],
        images: [
            webPageImage,
        ]
    },
    projectROM: {
        heading: "Project ROM",
        description:
            [
                "Bachelor's thesis with PITT and MAU. Android app for the purposes of measuring shoulder ROM using the MediaPipe package",
                "It's effectively a client server relationship between the end-user and app acting as the client for a central server which physicians could use to interact with the data.",
                "Measuring through the Mediapipe package is effectively done and proven to work-ish, but the method still needs testing in a clinical setting.",
            ],
        iconPath: "",
        alt: "No icon found",
        frameWorkIcons: [
            AndroidIcon,
            SpringBootIcon,
            MongoDbIcon,
            KotlinIcon
        ],
        frameWorkHeaders: [
            "Android",
            "Spring Boot",
            "Mongo DB",
            "Kotlin"
        ],
        projectUrls: [
            "https://github.com/patriknotvincent/rom-cli.git",
            "https://github.com/patriknotvincent/rom-server",
            `{}`

        ],
        images: [
            romExample,
        ]
    }
}

export default projects;