import Toma from "./assets/TomaPortfolio.png";
import AnkiDroid from "./assets/AnkiDroid.png";
import Ford from "./assets/FordPortfolio.png";

const experienceData = [
    {
        title: "Toma",
        description: `Lead engineer for the company's outbound product: spearheaded a full-stack redesign of the [b:PostgreSQL] schema, data structures, and end-to-end [b:Temporal] workflows. Also lead engineer for an in-app dashboard project, designing new metrics and cutting worst-case load times by [b:4x].`,
        image: Toma,
        link: "https://www.toma.com/",
        year: "2026",
        color: "8cd18e"
    },
    {
        title: "Google Summer of Code 2025: AnkiDroid",
        description: `One of the [b:8%] of applicants admitted for the [b:Google]-sponsored [link:Summer of Code|https://summerofcode.withgoogle.com/] open-source software development program's 2025 iteration. Used [b:Kotlin] to completely re-architect the notifications system for the open-source AnkiDroid [b:Android] mobile app ([b:10M+] downloads) from the ground up.`,
        image: AnkiDroid,
        link: "https://github.com/ericli3690/gsoc-ankidroid-report/blob/main/README.md",
        year: "2025",
        color: "94d6ff"
    },
    {
        title: "Ford",
        description: `Integrated Apple CarPlay into Ford and Lincoln in-vehicle infotainment systems via [b:Kotlin, Android]. Implemented next-generation digital experience features including device status displays, the SQLite backend for an app discovery feature, and backend navigation data APIs.`,
        image: Ford,
        link: "https://www.ford.com/",
        year: "2025",
        color: "4359e5"
    },
];

export default experienceData;
