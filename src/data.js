// ---------------------------------------------------------------------------
// Site content. Edit these arrays to change copy / projects without touching
// the components. Drop project + portrait images into /public/images and update
// the `image` paths below.
// ---------------------------------------------------------------------------

export const PROFILE = {
  name: 'Ben King',
  role: 'Full-stack engineer from London',
  available: true,
  intro:
    "I'm Ben King — I design and build web applications that feel effortless to use, from first idea to shipped interface.",
  email: 'hello@benking.dev',
  linkedin: { label: '/in/benking', url: 'https://www.linkedin.com/in/benking' },
  github: { label: '/benking', url: 'https://github.com/benking' },
  portrait: '/images/portrait.jpg', // replace with your photo
};

export const FACTS = [
  { label: 'Based in', value: 'London / Brighton, UK' },
  { label: 'Focus', value: 'Fullstack & Automation' },
  { label: 'Experience', value: '4+ Years' },
  { label: 'Status', value: 'Open to work' },
];

export const MARQUEE = [
  'React',
  'Claude',
  'ThreeJs',
  'PHP',
  'NodeJs',
  'Google Cloud',
  'n8n'
];

export const PROJECTS = [
  {
    id: 'passmap',
    no: '01',
    name: 'PassMap',
    desc: 'A What3Words password-recovery app that lets users recover their password using memorable map locations.',
    tags: ['React', 'What3Words API'],
    web: '#',
    github: '#',
    image: '/images/passmap.jpg',
  },
  {
    id: 'fabpad',
    no: '02',
    name: 'Fabpad',
    desc: 'A full-stack marketplace where creators and engineers find hard-to-source, 3D-printed parts.',
    tags: ['Full-stack', 'Node', 'PostgreSQL'],
    web: '#',
    github: '#',
    image: '/images/fabpad.jpg',
  },
  {
    id: 'cocktail',
    no: '03',
    name: 'Thirsty Cocktail',
    desc: 'A virtual bar open 24/7 that helps you discover your next favourite cocktail through a playful, guided flow.',
    tags: ['JavaScript', 'API'],
    web: '#',
    github: '#',
    image: '/images/cocktail.jpg',
  },
  {
    id: 'fridge',
    no: '04',
    name: 'In My Fridge',
    desc: 'A recipe finder that turns the ingredients you already have at home into meals you can cook tonight.',
    tags: ['React', 'API'],
    web: '#',
    github: '#',
    image: '/images/fridge.jpg',
  },
  {
    id: 'mars',
    no: '05',
    name: 'Mars Explorer',
    desc: 'An interactive explorer for NASA Mars rover imagery and mission data.',
    tags: ['React', 'NASA API'],
    web: '#',
    github: '#',
    image: '/images/mars.jpg',
  },
  {
    id: 'magna',
    no: '06',
    name: 'Magna Fish Bar',
    desc: 'A modern, mobile-first ordering site for a local fish & chip shop.',
    tags: ['Web', 'JavaScript'],
    web: '#',
    github: '#',
    image: '/images/magna.jpg',
  },
];
