import { ReactComponent as AndroidIcon } from "../assets/icons/AndroidIcon.svg"
import { ReactComponent as KotlinIcon } from "../assets/icons/KotlinIcon.svg"
import { ReactComponent as MongoDbIcon } from "../assets/icons/MongoDbIcon.svg"
import { ReactComponent as ReactIcon } from "../assets/icons/ReactIcon.svg"
import { ReactComponent as SpringBootIcon } from "../assets/icons/SpringBootIcon.svg"
import { ReactComponent as TypescriptIcon } from "../assets/icons/TypescriptIcon.svg"
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
    projectROM: ProjectDetails,
    naikan: ProjectDetails,
}

const projects: Project = {
    webProfile: {
        heading: "/web",
        description: [
            process.env.REACT_APP_PROJECT_DESC_WEB || "Default fallback text"
        ],
        iconPath: "",
        alt: "/web",
        frameWorkIcons: [
            ReactIcon,
            TypescriptIcon,
            NoneIcon,
            NoneIcon
        ],
        frameWorkHeaders: [
            "React",
            "TypeScript",
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
                process.env.REACT_APP_PROJECT_DESC_ROM || "Default fallback text"
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
            "https://github.com/vinparwes/rom-cli.git",
            "https://github.com/vinparwes/rom-server"
        ],
        images: [
            romExample,
        ]
    },
    naikan: {
        heading: "Naikan",
        description: ["Simple formatted diary adhering to Naikan meditation"],
        iconPath: "",
        alt: "Naikan",
        frameWorkIcons: [
            AndroidIcon,
            KotlinIcon
        ],
        frameWorkHeaders: [
            "Android",
            "Kotlin"
        ],
        projectUrls : [
            
        ],
        images: [

        ]

    }
}

export default projects;