export interface Project {
  name: string;
  media: string;
  logo?: string;
  url?: string;
  github?: string;
  trailer?: string;
  demo?: string;
  shortDescription: string;
  description: string;
  teamSize: number;
  dates: string;
}

export const games: Project[] = [
  {
    name: "Fight Fighters",
    media: "/Assets/videos/fightfighters.mp4",
    logo: "/Assets/logos/fightfighters_logo.png",
    url: "https://nickcorfmat.github.io/FightFighters/",
    github: "https://github.com/NickCorfmat/FightFighters",
    shortDescription: "2-player fighting game created with Phaser 3.",
    description: "This is an example description. It is merely for testing purposes and is not intended to be used in the final production build of this website. This sentence is meant to add extra length to the description.",
    teamSize: 2,
    dates: "Sept 2021 - Jun 2025"
  },
  {
    name: "Rogue Eagle",
    media: "/Assets/videos/rogueeagle.mp4",
    url: "https://nickcorfmat.github.io/EndlessRunner/",
    github: "https://github.com/NickCorfmat/EndlessRunner",
    shortDescription: "Endless runner game created with Phaser 3.",
    description: "This is an example description. It is merely for testing purposes and is not intended to be used in the final production build of this website. This sentence is meant to add extra length to the description.",
    teamSize: 1,
    dates: "Sept 2021 - Jun 2025"
  },
  {
    name: "Woofmart",
    media: "/Assets/videos/woofmart.mp4",
    url: "https://nickcorf.itch.io/woofmart",
    github: "https://github.com/jchen577/dog_sim_125",
    trailer: "https://drive.google.com/file/d/1ZzLdmguxykcHSb12pyFnLuZfHL9X8wYJ/view?usp=sharing",
    shortDescription: "Endless runner game created with Unity.",
    description: "This is an example description. It is merely for testing purposes and is not intended to be used in the final production build of this website. This sentence is meant to add extra length to the description.",
    teamSize: 5,
    dates: "Sept 2021 - Jun 2025"
  },
  {
    name: "will you do it?",
    media: "/Assets/videos/willyoudoit.mp4",
    shortDescription: "",
    url: "https://nickcorfmat.github.io/Split-1/",
    github: "https://github.com/NickCorfmat/Split-1",
    description: "This is an example description. It is merely for testing purposes and is not intended to be used in the final production build of this website. This sentence is meant to add extra length to the description.",
    teamSize: 3,
    dates: "Sept 2021 - Jun 2025"
  },
  {
    name: "Piano Platformer",
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
    shortDescription: "",
    media: "/Assets/videos/modernsimulator.mp4",
    url: "https://nickcorf.itch.io/modernism-simulator",
    github: "https://github.com/NickCorfmat/ApartmentSimulator",
    demo: "https://drive.google.com/file/d/1dEgNfVd5nOl8TMtaDJuzmRiSJBPYA1W-/view?usp=sharing",
    description: "This is an example description. It is merely for testing purposes and is not intended to be used in the final production build of this website. This sentence is meant to add extra length to the description.",
    teamSize: 1,
    dates: "Sept 2021 - Jun 2025"
  },
];

export const legoProjects: Project[] = [
  {
    name: 'Blackpink "Lovesick Girls"',
    media: "/Assets/images/lovesickgirls.png",
    url: "https://ideas.lego.com/projects/53056645-ba8d-4a35-a219-77d30aa6f733",
    shortDescription: "",
    description: "A mobile weather app with real-time updates.",
    teamSize: 1,
    dates: "Sept 2021 - Jun 2025"
  },
  {
    name: 'Blackpink "As If It\'s Your Last"',
    media: "/Assets/images/asifitsyourlast.jpg",
    url: "https://ideas.lego.com/projects/cab13581-6986-41b5-bf93-907a474a07df",
    shortDescription: "",
    description: "A task management app to organize daily tasks.",
    teamSize: 1,
    dates: "Sept 2021 - Jun 2025"
  },
  {
    name: 'Madison Beer "Reckless"',
    media: "/Assets/images/reckless.png",
    url: "https://beta.ideas.lego.com/product-ideas/9b9e3504-07dd-4060-a139-4bf98b07f7a7",
    shortDescription: "",
    description: "A task management app to organize daily tasks.",
    teamSize: 1,
    dates: "Sept 2021 - Jun 2025"
  },
  {
    name: "Polaroid Onestep SX-70",
    media: "/Assets/videos/polaroid.mp4",
    url: "https://beta.ideas.lego.com/product-ideas/200dd32e-8ec8-44aa-8f7d-e4dcc6f74e5c",
    shortDescription: "",
    description: "A task management app to organize daily tasks.",
    teamSize: 2,
    dates: "Sept 2021 - Jun 2025"
  },
  {
    name: "Catty Corner",
    media: "/Assets/images/cattycorner.png",
    url: "https://youtu.be/dBilv9B1Tmg?si=rLzIXHxPjl484bRz",
    shortDescription: "",
    description: "A task management app to organize daily tasks.",
    teamSize: 2,
    dates: "Sept 2021 - Jun 2025"
  },
];

export const featuredProjects: Project[] = [
  {
    name: "Fight Fighters",
    media: "/Assets/videos/fightfighters.mp4",
    logo: "/Assets/logos/fightfighters_logo.png",
    url: "https://nickcorfmat.github.io/FightFighters/",
    shortDescription: "",
    description: "Fight Fighters game created with Phaser 3.",
    teamSize: 2,
    dates: "Sept 2021 - Jun 2025"
  },
  {
    name: "Woofmart",
    media: "/Assets/videos/woofmart.mp4",
    url: "https://nickcorf.itch.io/woofmart",
    shortDescription: "",
    description: "Endless runner game created with Unity.",
    teamSize: 5,
    dates: "Sept 2021 - Jun 2025"
  },
  {
    name: "Polaroid Onestep SX-70",
    media: "/Assets/videos/polaroid.mp4",
    url: "https://ideas.lego.com/projects/200dd32e-8ec8-44aa-8f7d-e4dcc6f74e5c",
    shortDescription: "",
    description: "A task management app to organize daily tasks.",
    teamSize: 2,
    dates: "Sept 2021 - Jun 2025"
  },
];
