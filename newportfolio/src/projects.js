import AnkiDroid from "./assets/AnkiDroid.png";
import LifeLink from "./assets/LifeLink.png";
import Seedpod from "./assets/Seedpod.png";
import Chronicler from "./assets/ChroniclerCloudy.png";
import MidSun from "./assets/MidSun.png";
import Spontaneity from "./assets/Spontaneity.png";
import Asna from "./assets/Asna.png";
import WaterlooDates from "./assets/WaterlooDates.png";
import RubbleRecon from "./assets/RubbleRecon.png";
import TheTrees from "./assets/TheTrees.png";
import Python from "./assets/Python.png";

const projectsData = [
    {
        title: "Google Summer of Code 2025: AnkiDroid",
        description: `One of the [b:8%] of applicants admitted for the [b:Google]-sponsored [link:Summer of Code|https://summerofcode.withgoogle.com/] open-source software development program's 2025 iteration. Used [b:Kotlin] to completely re-architect the notifications system for the open-source AnkiDroid [b:Android] mobile app ([b:10M+] downloads) from the ground up.`,
        image: AnkiDroid,
        link: "https://github.com/ericli3690/gsoc-ankidroid-report/blob/main/README.md",
        year: "2025",
        color: "94d6ff"
    },
    {
        title: "🏆 LifeLink: 1st Place Winner at MediHacks 2024",
        description: "[b:React Native] and [b:NativeWind (TailwindCSS)] mobile app to help first responders in developing countries. Integrated the [b:Nominatim API] for reverse geocoding, a [b:Google Firebase] chat system, native notifications, and the [b:Google Maps API]. Beat 450+ other contestants at a hackathon and received a $2000 award.",
        image: LifeLink,
        link: "https://devpost.com/software/lifelink-24fd3g",
        year: "2024",
        color: "ff9991"
    },
    {
        title: "🏆 Seedpod: 1st Place Winner at Hack the Change 2023",
        description: "[b:NextJS] and [b:TailwindCSS] app with a [b:Python Flask] backend that communicates with modular plant pots over an ESP32. Utilized the [b:Google Maps API] and [b:Google Firebase]. Received an award of $5000 at one of the [b:University of Calgary]'s largest hackathons.",
        image: Seedpod,
        link: "https://devpost.com/software/seedpod-empowering-individual-agriculture",
        year: "2023",
        color: "d7ffbf"
    },
    {
        title: "Chronicler",
        description: `[b:Java Android] mobile app built in Android Studio for creating and managing history flashcards. Features an interactive history trivia game. Stores data using the Google GSON library.`,
        image: Chronicler,
        link: "https://github.com/ericli3690/chronicler",
        year: "2024",
        color: "ffecab"
    },
    {
        title: "MidSun Solar Car Design Team",
        description: "Member of the University of Waterloo solar car design team, specifically the strategy subteam. Using [b:AWS], [b:PostgreSQL], and [b:Python] to design an irradiance database and driving optimization model.",
        image: MidSun,
        link: "https://www.uwmidsun.com/",
        year: "2025",
        color: "ffd891"
    },
    {
        title: "Spontaneity",
        description: "[b:Java Android] mobile app built in Android Studio which allows users to create spontaneous reminders delivered at random time intervals. Beneficial for habit building.",
        image: Spontaneity,
        link: "https://github.com/ericli3690/spontaneity",
        year: "2023",
        color: "abffd7"
    },
    {
        title: "🏆 Top 3 Finalist at ASNA Case Competition / Hackathon",
        description: "In a group that placed as finalists by using [b:Python] and [i:pandas] to train multiple machine learning models, ex. [b:XGBoost] decision tree models. Achieved 93.6% accuracy at predicting insurance claim data.",
        image: Asna,
        link: "https://anea-asna.ca/hackathon/",
        year: "2024",
        color: "f3bdff"
    },
    {
        title: "🏆 RubbleRecon: 3rd Place Winner at STEMist Hacks II",
        description: "Used [b:ReactJS] and [b:TailwindCSS] to create an app for helping first responders perform autonomous robotic search-and-rescue missions. Won 3rd place at a hackathon against 600+ other participants.",
        image: RubbleRecon,
        link: "https://devpost.com/software/rubblerecon",
        year: "2023",
        color: "7488a1"
    },
    {
        title: "🏆 WaterlooDates: Runner-Up Sponsor Prize Winner at Hack the Six",
        description: "Created a full-stack [b:NextJS + MongoDB] dating app, featuring a comedic professional twist on meeting significant others. Worked on integrating [b:Google Gemini] and AI APIs including RibbonAI for conversational interviews and VellumAI for [b:LLM tool chaining]. Won a $1000 sponsor prize in a field of 350+ contestants.",
        image: WaterlooDates,
        link: "https://devpost.com/software/waterloodates",
        year: "2025",
        color: "ffbafd"
    },
    {
        title: "🏆 \"The Trees\": 3rd Place Winner at Simplihacks 2.0",
        description: "MERN app dedicated to making environmental charity fun and accessible. Won 3rd place at a hackathon against 400+ other participants. Utilized [b:ReactJS].",
        image: TheTrees,
        link: "https://devpost.com/software/the-trees",
        year: "2022",
        color: "abffd7"
    },
    {
        title: "Assorted Python Projects",
        description: "A published [link:significant figures|https://pypi.org/project/esoteric-sigdigs/] [i:pip] package, [link:automatic poll generators|https://github.com/ericli3690/PollProject2], a Discord [link:soccer betting bot|https://github.com/pranavUl/Soccer-Betting-Bot]...",
        image: Python,
        link: "https://github.com/ericli3690",
        year: "2022",
        color: "a8ffc0"
    },
    // {
    //     title: "'Quarterly', 'Technik', 'MorningMixer'...",
    //     description: "More to come.",
    //     image: "src/assets/DotDotDot.png",
    //     link: "https://www.linkedin.com/in/song-eric-li/"
    // },
]

export default projectsData;

// 300 x 480
// description: "This is a simple description with [b:bold text], [i:italicized text], and a [link:link to GitHub|https://github.com].",
// https://github.com/gitname/react-gh-pages