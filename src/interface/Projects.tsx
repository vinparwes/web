

interface ProjectDetails {
    heading: string,
    description: string,
    iconPath: string,
    alt: string,
    frameWorkIcons: Array<React.FunctionComponent<React.SVGProps<SVGSVGElement>>>,
    projectUrls: Array<string>
}

interface Project {
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
            /*ChakraLogo,
            ReactLogo,
            TypeScriptLogo,
            JavaScriptLogo*/
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
            /*AndroidLogo,
            SpringBootLogo,
            MongoDbLogo,
            KotlinLogo
            */
        ],
        projectUrls: [
            "https://github.com/patriknotvincent/rom-cli.git",
            "https://github.com/patriknotvincent/rom-server"
        ]
    }
}

export default projects;
