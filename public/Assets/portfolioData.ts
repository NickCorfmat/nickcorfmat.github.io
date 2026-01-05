export interface Project {
  name: string;
  media: string;
  logo?: string;
  url: string;
  description: string;
}

export const games: Project[] = [
  {
    name: "Fight Fighters",
    media: "/Assets/videos/fightfighters.mp4",
    logo: "/Assets/logos/fightfighters_logo.png",
    url: "https://nickcorfmat.github.io/FightFighters/",
    description: "Fight Fighters game created with Phaser 3.",
  },
  {
    name: "Rogue Eagle",
    media: "/Assets/videos/rogueeagle.mp4",
    url: "https://nickcorfmat.github.io/EndlessRunner/",
    description: "Endless runner game created with Phaser 3.",
  },
  {
    name: "Woofmart",
    media: "/Assets/videos/woofmart.mp4",
    url: "https://nickcorf.itch.io/woofmart",
    description: "Endless runner game created with Unity.",
  },
  {
    name: "will you do it?",
    media: "/Assets/videos/willyoudoit.mp4",
    url: "https://nickcorfmat.github.io/Split-1/",
    description: "",
  },
  {
    name: "Piano Platformer",
    media: "/Assets/videos/pianoplatformer.mp4",
    url: "https://nickcorfmat.github.io/Unconventional-Game/",
    description: "",
  },
  {
    name: "Wail of the Sirenheads",
    media: "/Assets/videos/wailofthesirenheads.mp4",
    url: "https://nickcorf.itch.io/through-the-sirenheads",
    description: "",
  },
  {
    name: "Modernism Simulator",
    media: "/Assets/videos/modernsimulator.mp4",
    url: "https://nickcorf.itch.io/modernism-simulator",
    description: "",
  },
];

export const legoProjects: Project[] = [
  {
    name: 'Blackpink "Lovesick Girls"',
    media: "/Assets/images/lovesickgirls.png",
    url: "https://ideas.lego.com/projects/53056645-ba8d-4a35-a219-77d30aa6f733",
    description: "A mobile weather app with real-time updates.",
  },
  {
    name: 'Blackpink "As If It\'s Your Last"',
    media: "/Assets/images/asifitsyourlast.jpg",
    url: "https://ideas.lego.com/projects/cab13581-6986-41b5-bf93-907a474a07df",
    description: "A task management app to organize daily tasks.",
  },
  {
    name: 'Madison Beer "Reckless"',
    media: "/Assets/images/reckless.png",
    url: "https://beta.ideas.lego.com/product-ideas/9b9e3504-07dd-4060-a139-4bf98b07f7a7",
    description: "A task management app to organize daily tasks.",
  },
  {
    name: "Polaroid Onestep SX-70",
    media: "/Assets/videos/polaroid.mp4",
    url: "https://beta.ideas.lego.com/product-ideas/200dd32e-8ec8-44aa-8f7d-e4dcc6f74e5c",
    description: "A task management app to organize daily tasks.",
  },
  {
    name: "Catty Corner",
    media: "/Assets/images/cattycorner.png",
    url: "https://youtu.be/dBilv9B1Tmg?si=rLzIXHxPjl484bRz",
    description: "A task management app to organize daily tasks.",
  },
];

export const featuredProjects: Project[] = [
  {
    name: "Fight Fighters",
    media: "/Assets/videos/fightfighters.mp4",
    logo: "/Assets/logos/fightfighters_logo.png",
    url: "https://nickcorfmat.github.io/FightFighters/",
    description: "Fight Fighters game created with Phaser 3.",
  },
  {
    name: "Woofmart",
    media: "/Assets/videos/woofmart.mp4",
    url: "https://nickcorf.itch.io/woofmart",
    description: "Endless runner game created with Unity.",
  },
  {
    name: "Polaroid Onestep SX-70",
    media: "/Assets/videos/polaroid.mp4",
    url: "https://ideas.lego.com/projects/200dd32e-8ec8-44aa-8f7d-e4dcc6f74e5c",
    description: "A task management app to organize daily tasks.",
  },
];
