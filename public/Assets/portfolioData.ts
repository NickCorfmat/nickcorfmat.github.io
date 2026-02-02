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
    url: "https://nickcorfmat.github.io/Split-1/",
    github: "https://github.com/NickCorfmat/Split-1",
    shortDescription: "Short narrative game prototype built using Phaser 3.",
    description: "Developed a short narrative game in 2 weeks as part of a rapid prototyping class at UCSC.",
    teamSize: 3,
    dates: "Apr 2024"
  },
  {
    name: "Piano Platformer",
    category: ["game"],
    media: "/Assets/videos/pianoplatformer.mp4",
    url: "https://nickcorfmat.github.io/Unconventional-Game/",
    github: "https://github.com/NickCorfmat/Unconventional-Game",
    shortDescription: "Short game with an unconventional twist.",
    description: "A short game developed at UCSC in 2 weeks as part of a rapid prototyping class, that takes an unconventional approach to typical platformer inputs.",
    teamSize: 3,
    dates: "May 2024"
  },
  {
    name: "Wail of the Sirenheads",
    category: ["game"],
    media: "/Assets/videos/wailofthesirenheads.mp4",
    url: "https://nickcorf.itch.io/through-the-sirenheads",
    github: "https://github.com/JaydenChung/Split2",
    demo: "https://drive.google.com/file/d/1T6xnZxpMmf_FUYoe2tHEIMAOfqRn7AB0/view?usp=sharing",
    shortDescription: "Short horror game built in UE5.",
    description: "A first-person exploration horror game developed by a team of three students at UCSC using Unreal Engine 5. This game plunges players into a chilling, dark forest inhabited by human-like creatures, and sends players through an unsettling journey of constant foreboding and unexpected encounters.",
    teamSize: 3,
    dates: "Apr 2024 - May 2024"
  },
  {
    name: "Modernism Simulator",
    category: ["game"],
    media: "/Assets/videos/modernsimulator.mp4",
    url: "https://nickcorf.itch.io/modernism-simulator",
    github: "https://github.com/NickCorfmat/ApartmentSimulator",
    demo: "https://drive.google.com/file/d/1dEgNfVd5nOl8TMtaDJuzmRiSJBPYA1W-/view?usp=sharing",
    shortDescription: "Immersive interactive world built using Unity URP.",
    description: "Built a first-person walking simulator in Unity using the Universal Render Pipeline (URP) for realistic lighting and materials. Programmed interactive objects (doors, faucet, TV) and integrated particle systems (rain, lightning) for immersion. Strategically utilized Unity’s real-time and baked lighting systems to maximize visual quality and performance.",
    teamSize: 1,
    dates: "Nov 2024"
  },
  {
    name: "Shape Up",
    category: ["game"],
    media: "/Assets/images/shapeup.png",
    url: "https://apps.apple.com/us/app/shape-up-swipe-shake-solve/id6744836423",
    github: "https://github.com/EltZ36/ShapeUp",
    trailer: "https://www.youtube.com/watch?v=hqWtVbuO-iI",
    shortDescription: "Senior capstone mobile puzzle game shipped on iOS and Android.",
    description: "Shipped a mobile iOS/Android puzzle game in Unity and C# with a 5-person team, implementing levels and UI. Integrated Analytics SDK to track player and device metrics for analysis, syncing data with Unity Cloud services. Conducted playtests, iterating on gameplay and UI through player feedback across three development sprints. Profiled builds and optimized performance using object pooling, simple colliders, singletons, and asset compression. Led iOS release pipeline, securing next-day App Store approval, and managed internal/public builds via TestFlight.",
    teamSize: 5,
    dates: "Apr 2025 - Jun 2025"
  },
  {
    name: "Crucible of Elements",
    category: ["game"],
    media: "/Assets/images/crucibleofelements.png",
    url: "https://apps.apple.com/us/app/shape-up-swipe-shake-solve/id6744836423",
    github: "https://github.com/SRparadox/KorraProject",
    trailer: "https://drive.google.com/file/d/1kA9OzkjJGnMaN6Q36k4gKBbE_ELbLyos/view?usp=sharing",
    shortDescription: "2v2 online arena battler developed in Unity.",
    description: "Built a competitive 2v2 online arena battler in Unity3D with an 8-member team during a 10-week capstone project. Engineered a modular player class with combat, abilities, health, and team mechanics for scalable gameplay. Implemented real-time networking with Unity Netcode, syncing player actions and game state across clients. Optimized runtime performance and build size via GPU instancing, asset compression, and draw call reduction.",
    teamSize: 8,
    dates: "Jan 2025 - Mar 2025"
  },
  {
    name: "Space-Mine",
    category: ["game"],
    media: "/Assets/images/crucibleofelements.png",
    github: "https://github.com/NickCorfmat/Space-Mine",
    shortDescription: "Moddable 2D mining simulator built with Phaser and TypeScript.",
    description: "Spearheaded development of a 2D mining simulator using TypeScript and Phaser, with Vite for rapid deployment. Serialized game state into a single contiguous byte array, allowing for efficient save/load and undo/redo operations. Incorporated modding capabilities via external DSL and offered game as installable offline desktop and mobile PWA. Localized the game to three languages, dynamically loading in-game text from a JSON file at runtime.",
    teamSize: 3,
    dates: "Nov 2024 - Dec 2024"
  },
  {
    name: "Chess vs. AI",
    category: ["game"],
    media: "/Assets/images/chessvsai.png",
    github: "https://github.com/NickCorfmat/ChessAI",
    shortDescription: "Chess but with a smart opponent...",
    description: "Built a Chess AI in C++ to compare thousands of possible moves and strategically execute the optimal move. Utilized minimax algorithm, alpha-beta pruning, and transposition tables to significantly reduce AI search complexity. Developed an intuitive graphical interface using the IMGUI library, enhancing the user experience. Incorporated the Universal Chess Interface (UCI) to enable the AI to play against other chess engines.",
    teamSize: 1,
    dates: "Nov 2023 - Dec 2023"
  },
  {
    name: "Public Key Cryptography",
    category: ["program"],
    media: "/Assets/images/publickeycryptography.png",
    github: "https://github.com/NickCorfmat/Public-Key-Cryptography",
    shortDescription: "Public-key encryption tool in C using GMP.",
    description: "Implemented a public-key encryption program in C on an Ubuntu VM to securely encrypt and decrypt text files. Utilized GNU Multiple Precision Arithmetic Library (GMP) for the generation of long, secure private keys.",
    teamSize: 1,
    dates: "Mar 2023"
  },
  {
    name: "LZ Compression",
    category: ["program"],
    media: "/Assets/images/lzcompression.png",
    github: "https://github.com/NickCorfmat/LZ-Compression",
    shortDescription: "Lossless text compressor implemented in C.",
    description: "Implemented a lossless text compression program in C using the LZ78 algorithm, preserving all original data. Developed and tested on Ubuntu VM, utilizing vi editor and command-line tooling for efficient workflow.",
    teamSize: 1,
    dates: "Mar 2023"
  },
  {
    name: "Recipes App",
    category: ["program"],
    media: "/Assets/images/recipeapp.png",
    github: "https://github.com/ucsc2025-cse183/project-18",
    shortDescription: "Full-stack recipe sharing app with Py4Web and Vue.",
    description: "Developed a full-stack recipe sharing app with Py4Web and Vue.js, focusing on Python backend development. Designed and implemented RESTful APIs to perform CRUD operations on recipe and ingredient data. Connected frontend with backend APIs, enabling multi-field recipe search by name, type, and ingredients. Enforced author-only recipe editing on the server side to prevent unauthorized changes to other users’ content.",
    teamSize: 6,
    dates: "May 2025 - Jun 2025"
  },
  {
    name: "WebGL Mario World",
    category: ["program"],
    media: "/Assets/images/webgldemo.png",
    github: "https://nickcorfmat.github.io/Asg4/src/World.html",
    shortDescription: "Interactive WebGl demo.",
    description: "Developed an interactive 3D demo using WebGL and GLSL shaders for diffuse, specular, and spotlight lighting. Created dynamic lighting controls (position, color, enable/disable) using HTML and CSS with live scene updates. Built a camera system with full 3D navigation (forward/back, strafe, pan, tilt) using vector math and rotation matrices. Optimized texture loading, UV mapping, and materials through efficient GLSL uniform and buffer handling.",
    teamSize: 1,
    dates: "May 2025 - Jun 2025"
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
    category: ["lego_ideas", "featured"],
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
