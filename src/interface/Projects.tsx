import { ReactComponent as NoneIcon } from "../assets/icons/QuestionMarkIcon.svg"
import { ReactComponent as AndroidIcon } from "../assets/icons/AndroidIcon.svg"
import { ReactComponent as KotlinIcon } from "../assets/icons/KotlinIcon.svg"
import { ReactComponent as MongoDbIcon } from "../assets/icons/MongoDbIcon.svg"
import { ReactComponent as ReactIcon } from "../assets/icons/ReactIcon.svg"
import { ReactComponent as SpringBootIcon } from "../assets/icons/SpringBootIcon.svg"
import { ReactComponent as TypescriptIcon } from "../assets/icons/TypescriptIcon.svg"
import { ReactComponent as JetPackComposeIcon } from "../assets/icons/JetPackComposeIcon.svg"

import webPageImage from '../assets/images/my_page.png'
import naikanImage1 from "../assets/images/naikan_1.png"
import naikanImage2 from "../assets/images/naikan_2.png"
import naikanImage3 from "../assets/images/naikan_3.png"
import naikanImage4 from "../assets/images/naikan_4.png"
import naikanImage5 from "../assets/images/naikan_5.png"
import naikanImage6 from "../assets/images/naikan_6.png"
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
        description:
            [
                process.env.REACT_APP_PROJECT_DESC_NAI || "This is a test to check whether the box automatically does stuff when the text is long enough...."
            ],
        iconPath: "",
        alt: "Naikan",
        frameWorkIcons: [
            AndroidIcon,
            KotlinIcon,
            JetPackComposeIcon
        ],
        frameWorkHeaders: [
            "Android",
            "Kotlin",
            "Jetpack Compose"
        ],
        projectUrls: [
            "https://github.com/vinparwes/naikan.git"
        ],
        images: [
            naikanImage1,
            naikanImage2,
            naikanImage3,
            naikanImage4,
            naikanImage5,
            naikanImage6,
        ]

    }
}

export default projects;