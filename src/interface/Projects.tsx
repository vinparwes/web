import { ReactComponent as AndroidIcon } from "../assets/icons/AndroidIcon.svg"
import { ReactComponent as ChakraIcon } from "../assets/icons/ChakraIcon.svg"
import { ReactComponent as KotlinIcon } from "../assets/icons/KotlinIcon.svg"
import { ReactComponent as MongoDbIcon } from "../assets/icons/MongoDbIcon.svg"
import { ReactComponent as ReactIcon } from "../assets/icons/ReactIcon.svg"
import { ReactComponent as SpringBootIcon } from "../assets/icons/SpringBootIcon.svg"
import { ReactComponent as TypescriptIcon } from "../assets/icons/TypescriptIcon.svg"

export interface ProjectDetails {
    heading: string,
    description: string,
    iconPath: string,
    alt: string,
    frameWorkIcons: React.ElementType[],
    frameWorkHeaders: Array<string>,
    projectUrls: Array<string>
}

export interface Project {
    webProfile: ProjectDetails,
    projectROM: ProjectDetails
}

const projects: Project = {
    webProfile: {
        heading: "This page.. :)",
        description: "Felt like a traditional CV doesn't represent the breadth. I made a website.",
        iconPath: "",
        alt: "No icon found",
        frameWorkIcons: [
            ChakraIcon,
            ReactIcon,
            TypescriptIcon
        ],
        frameWorkHeaders: [
            "Chrakra",
            "React",
            "TypeScript"
        ],
        projectUrls: [
            "https://github.com/patriknotvincent/web"
        ]
    },
    projectROM: {
        heading: "Project ROM",
        description: "Bachelor's thesis and continuing effort with PITT and MAU. Android app for the purposes of measuring shoulder ROM using the MediaPipe package",
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
            "https://github.com/patriknotvincent/rom-server"
        ]
    }
}

export default projects;
