// ---------------------------------------------------------------------------
// Site content. Edit these arrays to change copy / projects without touching
// the components. Drop project + portrait images into /public/images and update
// the `image` paths below.
// ---------------------------------------------------------------------------

export const PROFILE = {
  name: "Ben King",
  available: true,
  intro:
    "I'm Ben King — a fullstack software developer building web apps and automations.",
  email: "benking1293@gmail.com",
  linkedin: { url: "https://www.linkedin.com/in/ben-king-software-engineer" },
  github: { url: "https://github.com/GreenEagleKing" },
  portrait: "/images/headshot.jpg", // replace with your photo
};

export const FACTS = [
  { label: "Based in", value: "London / Brighton, UK" },
  { label: "Focus", value: "Fullstack & Automation" },
  { label: "Experience", value: "4+ Years" },
  { label: "Status", value: "Open to work" },
];

export const CURRENT_ROLE = {
  title: "Junior Software Developer",
  company: "ITV",
  description:
    "Playing a critical role in enhancing operational efficiency within the ITV workplace team by automating manual processes, from user-focused design to release.",
  projects: [
    {
      id: "order-transparency",
      name: "Order Transparency Enhancement",
      desc: "Built a workflow to collect order data and improve transparency for employees ordering new kit — running on GCP Cloud Functions triggered by Cron jobs, with Node.js event logic and Puppeteer for scraping.",
    },
    {
      id: "device-exception",
      name: "Device Exception Management",
      desc: "Built a device exception UI integrated with backend logic to streamline device removal from existing processes, with automated notifications via Nodemailer.",
    },
    {
      id: "vodafone-automation",
      name: "Vodafone Account Automation",
      desc: "Automated closure of mobile accounts via a daily Cloud Run scheduled task — extracting CSV data, handling errors via automated emails, and sending closure/transfer notifications.",
    },
    {
      id: "tessa",
      name: "Tessa",
      desc: "A custom-built asset management system — supporting the tech support team by resolving issues and improving device management processes based on user feedback and testing.",
    },
    {
      id: "n8n-workflow",
      name: "n8n Workflow",
      desc: "Reduced manual ticket intervention by recommending device replacement based on API-fetched device model data.",
    },
    {
      id: "api-integration",
      name: "External API Integration",
      desc: "Connected a repairs service API via HTTPS for creating, approving, and editing repairs, with webhooks ingested through GCP using an API gateway, Pub/Sub topics, and Cloud Functions to reduce risk and increase security.",
    },
  ],
};

export const MARQUEE = [
  "React",
  "Claude",
  "ThreeJs",
  "PHP",
  "NodeJs",
  "Google Cloud",
  "n8n",
];

export const PROJECTS = [
  {
    id: "slaps",
    no: "01",
    name: "Slaps",
    desc: "A sports sun-protection startup e-commerce site — animated design with custom mailing-list automations built in Make.",
    tags: ["React", "TailwindCSS", "Make", "Notion"],
    web: "https://weslaps.com/",
    github: "https://github.com/GreenEagleKing/we-slaps",
    image: "./images/slapsWebsite.gif",
  },
  {
    id: "passmap",
    no: "02",
    name: "PassMap",
    desc: "A What3Words password-recovery app that lets users recover their password using memorable map locations.",
    tags: ["React", "Three.js", "What3Words API", "Firebase"],
    web: "https://passmap.netlify.app/",
    github: "https://github.com/GreenEagleKing/w3w-app",
    image: "/images/w3w-gif.gif",
  },
  {
    id: "fabpad",
    no: "03",
    name: "Fabpad",
    desc: "A full-stack marketplace where creators and engineers find hard-to-source, 3D-printed parts.",
    tags: ["MongoDB", "Express", "EJS", "JavaScript", "TailwindCSS"],
    web: "https://fabpad.onrender.com/",
    github: "https://github.com/GreenEagleKing/100hrs-project",
    image: "/images/fabpad-gif.gif",
  },
  {
    id: "cocktail",
    no: "04",
    name: "Thirsty Cocktail",
    desc: "A virtual bar open 24/7 that helps you discover your next favourite cocktail through a playful, guided flow.",
    tags: ["JavaScript", "CSS", "CocktailDB API"],
    web: "https://thethirstycocktail.netlify.app/",
    github: "https://github.com/GreenEagleKing/the-thirsty-cocktail",
    image: "/images/cocktail-showcase.gif",
  },
  {
    id: "fridge",
    no: "05",
    name: "In My Fridge",
    desc: "A recipe finder that turns the ingredients you already have at home into meals you can cook tonight.",
    tags: ["HTML", "CSS", "JavaScript"],
    web: "https://whatisinthefridge.netlify.app/",
    github: "https://github.com/GreenEagleKing/recipeapp",
    image: "/images/fridgeApp.gif",
  },
  {
    id: "mars",
    no: "06",
    name: "Mars Explorer",
    desc: "An interactive explorer for NASA Mars rover imagery and mission data.",
    tags: ["HTML", "CSS", "JavaScript", "NASA API"],
    web: "https://curiosityrover.netlify.app/",
    github: "https://github.com/GreenEagleKing/nasa-rover",
    image: "/images/curiosity-rover-gif.gif",
  },
  {
    id: "magna",
    no: "07",
    name: "Magna Fish Bar",
    desc: "A modern, mobile-first ordering site for a local fish & chip shop.",
    tags: ["HTML", "CSS", "JavaScript"],
    web: "https://magna-fish-bar.netlify.app/",
    github: "https://github.com/GreenEagleKing/fish-bar",
    image: "/images/magna-fish-bar.gif",
  },
];
