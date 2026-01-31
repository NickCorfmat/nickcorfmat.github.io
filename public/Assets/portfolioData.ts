export type ProjectCategory = 
  | "game"
  | "lego_ideas"
  | "program"
  | "featured";

export interface Project {
  name: string;
  category: ProjectCategory[];
  media: string;
  logo?: string;
  url?: string;
  github?: string;
  trailer?: string;
  demo?: string;
  shortDescription?: string;
  description?: string;
  teamSize: number;
  dates: string;
}

export const projects: Project[] = [
  {
    name: "Fight Fighters",
    category: ["game", "featured"],
    media: "/Assets/videos/fightfighters.mp4",
    logo: "/Assets/logos/fightfighters_logo.png",
    url: "https://nickcorfmat.github.io/FightFighters/",
    github: "https://github.com/NickCorfmat/FightFighters",
    shortDescription: "2P fighting game created with Phaser 3.",
    description: "Brought the game 'Fight Fighters' into life as a two-player browser game using JavaScript and the Phaser 3 HTML5 framework. The game is directly inspired from S1 Episode 10 of the Disney television series, 'Gravity Falls.'",
    teamSize: 2,
    dates: "Feb 2024 - Mar 2024"
  },
  {
    name: "Rogue Eagle",
    category: ["game"],
    media: "/Assets/videos/rogueeagle.mp4",
    url: "https://nickcorfmat.github.io/EndlessRunner/",
    github: "https://github.com/NickCorfmat/EndlessRunner",
    shortDescription: "Endless runner game created with Phaser 3.",
    description: "Endless runner built using Phaser 3, Javascript, and HTML. Employed one-dimension perlin noise to generate unique terrain for every run.",
    teamSize: 1,
    dates: "Feb 2024"
  },
  {
    name: "Woofmart",
    category: ["game", "featured"],
    media: "/Assets/videos/woofmart.mp4",
    url: "https://nickcorf.itch.io/woofmart",
    github: "https://github.com/jchen577/dog_sim_125",
    trailer: "https://drive.google.com/file/d/1ZzLdmguxykcHSb12pyFnLuZfHL9X8wYJ/view?usp=sharing",
    shortDescription: "Endless runner game created in Unity.",
    description: "Worked with a team of 5 students in creating this exciting endless runner in Unity, where players take on the role of a loose dog striving to unleash as much chaos in a supermarket while trying to dodge AI enemy employees.",
    teamSize: 5,
    dates: "Nov 2024 - Dec 2024"
  },
  {
    name: "will you do it?",
    category: ["game"],
    media: "/Assets/videos/willyoudoit.mp4",
    shortDescription: "",
    url: "https://nickcorfmat.github.io/Split-1/",
    github: "https://github.com/NickCorfmat/Split-1",
    description: "This is an example description. It is merely for testing purposes and is not intended to be used in the final production build of this website. This sentence is meant to add extra length to the description.",
    teamSize: 3,
    dates: "Apr 2024"
  },
  {
    name: "Piano Platformer",
    category: ["game"],
    media: "/Assets/videos/pianoplatformer.mp4",
    shortDescription: "",
    url: "https://nickcorfmat.github.io/Unconventional-Game/",
    github: "https://github.com/NickCorfmat/Unconventional-Game",
    description: "This is an example description. It is merely for testing purposes and is not intended to be used in the final production build of this website. This sentence is meant to add extra length to the description.",
    teamSize: 3,
    dates: "Sept 2021 - Jun 2025"
  },
  {
    name: "Wail of the Sirenheads",
    category: ["game"],
    media: "/Assets/videos/wailofthesirenheads.mp4",
    shortDescription: "",
    url: "https://nickcorf.itch.io/through-the-sirenheads",
    github: "https://github.com/JaydenChung/Split2",
    demo: "https://drive.google.com/file/d/1T6xnZxpMmf_FUYoe2tHEIMAOfqRn7AB0/view?usp=sharing",
    description: "This is an example description. It is merely for testing purposes and is not intended to be used in the final production build of this website. This sentence is meant to add extra length to the description.",
    teamSize: 3,
    dates: "Sept 2021 - Jun 2025"
  },
  {
    name: "Modernism Simulator",
    category: ["game"],
    shortDescription: "",
    media: "/Assets/videos/modernsimulator.mp4",
    url: "https://nickcorf.itch.io/modernism-simulator",
    github: "https://github.com/NickCorfmat/ApartmentSimulator",
    demo: "https://drive.google.com/file/d/1dEgNfVd5nOl8TMtaDJuzmRiSJBPYA1W-/view?usp=sharing",
    description: "This is an example description. It is merely for testing purposes and is not intended to be used in the final production build of this website. This sentence is meant to add extra length to the description.",
    teamSize: 1,
    dates: "Sept 2021 - Jun 2025"
  },
  {
    name: "Shape Up",
    category: ["game"],
    shortDescription: "",
    media: "/Assets/images/shapeup.png",
    url: "https://apps.apple.com/us/app/shape-up-swipe-shake-solve/id6744836423",
    github: "https://github.com/EltZ36/ShapeUp",
    trailer: "https://www.youtube.com/watch?v=hqWtVbuO-iI",
    description: "This is an example description. It is merely for testing purposes and is not intended to be used in the final production build of this website. This sentence is meant to add extra length to the description.",
    teamSize: 5,
    dates: "Sept 2021 - Jun 2025"
  },
  {
    name: "Crucible of Elements",
    category: ["game"],
    shortDescription: "",
    media: "/Assets/images/crucibleofelements.png",
    url: "https://apps.apple.com/us/app/shape-up-swipe-shake-solve/id6744836423",
    github: "https://github.com/SRparadox/KorraProject",
    trailer: "https://drive.google.com/file/d/1kA9OzkjJGnMaN6Q36k4gKBbE_ELbLyos/view?usp=sharing",
    description: "This is an example description. It is merely for testing purposes and is not intended to be used in the final production build of this website. This sentence is meant to add extra length to the description.",
    teamSize: 8,
    dates: "Sept 2021 - Jun 2025"
  },
  {
    name: "Space-Mine",
    category: ["game"],
    shortDescription: "",
    media: "/Assets/images/crucibleofelements.png",
    github: "https://github.com/NickCorfmat/Space-Mine",
    description: "This is an example description. It is merely for testing purposes and is not intended to be used in the final production build of this website. This sentence is meant to add extra length to the description.",
    teamSize: 3,
    dates: "Sept 2021 - Jun 2025"
  },
  {
    name: "Chess vs. AI",
    category: ["game", "featured"],
    shortDescription: "",
    media: "/Assets/images/chessvsai.png",
    github: "https://github.com/NickCorfmat/ChessAI",
    description: "This is an example description. It is merely for testing purposes and is not intended to be used in the final production build of this website. This sentence is meant to add extra length to the description.",
    teamSize: 1,
    dates: "Sept 2021 - Jun 2025"
  },
  {
    name: "Jewel Heist",
    category: ["game"],
    shortDescription: "",
    media: "/Assets/images/jewelheist.png",
    github: "https://github.com/NickCorfmat/JewelHeist",
    description: "This is an example description. It is merely for testing purposes and is not intended to be used in the final production build of this website. This sentence is meant to add extra length to the description.",
    teamSize: 1,
    dates: "Sept 2021 - Jun 2025"
  },
  {
    name: "Public Key Cryptography",
    category: ["program"],
    media: "/Assets/images/publickeycryptography.png",
    github: "https://github.com/NickCorfmat/Public-Key-Cryptography",
    shortDescription: "",
    description: "",
    teamSize: 1,
    dates: "Sept 2021 - Jun 2025"
  },
  {
    name: "LZ Compression",
    category: ["program"],
    media: "/Assets/images/lzcompression.png",
    github: "https://github.com/NickCorfmat/LZ-Compression",
    shortDescription: "",
    description: "",
    teamSize: 1,
    dates: "Sept 2021 - Jun 2025"
  },
  {
    name: "Recipes App",
    category: ["program"],
    media: "/Assets/images/recipeapp.png",
    github: "https://github.com/ucsc2025-cse183/project-18",
    shortDescription: "",
    description: "",
    teamSize: 6,
    dates: "Sept 2021 - Jun 2025"
  },
  {
    name: 'Blackpink "Lovesick Girls"',
    category: ["lego_ideas"],
    media: "/Assets/images/lovesickgirls.png",
    url: "https://ideas.lego.com/projects/53056645-ba8d-4a35-a219-77d30aa6f733",
    teamSize: 1,
    dates: "Sept 2021 - Jun 2025"
  },
  {
    name: 'Blackpink "As If It\'s Your Last"',
    category: ["lego_ideas"],
    media: "/Assets/images/asifitsyourlast.jpg",
    url: "https://ideas.lego.com/projects/cab13581-6986-41b5-bf93-907a474a07df",
    teamSize: 1,
    dates: "Sept 2021 - Jun 2025"
  },
  {
    name: 'Madison Beer "Reckless"',
    category: ["lego_ideas"],
    media: "/Assets/images/reckless.png",
    url: "https://beta.ideas.lego.com/product-ideas/9b9e3504-07dd-4060-a139-4bf98b07f7a7",
    teamSize: 1,
    dates: "Sept 2021 - Jun 2025"
  },
  {
    name: "Polaroid Onestep SX-70",
    category: ["lego_ideas"],
    media: "/Assets/videos/polaroid.mp4",
    url: "https://beta.ideas.lego.com/product-ideas/200dd32e-8ec8-44aa-8f7d-e4dcc6f74e5c",
    teamSize: 2,
    dates: "Sept 2021 - Jun 2025"
  },
  {
    name: "Catty Corner",
    category: ["lego_ideas"],
    media: "/Assets/images/cattycorner.png",
    url: "https://youtu.be/dBilv9B1Tmg?si=rLzIXHxPjl484bRz",
    teamSize: 2,
    dates: "Sept 2021 - Jun 2025"
  },
  {
    name: "Miffy",
    category: ["lego_ideas"],
    media: "/Assets/images/miffy.png",
    url: "https://beta.ideas.lego.com/product-ideas/2329f799-f3bd-4c1e-83fd-49443332ae96",
    teamSize: 1,
    dates: "Sept 2021 - Jun 2025"
  }
];
