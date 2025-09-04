export interface Project {
  name: string;
  description: string;
  github: string;
  demo: string;
}

const projects: Project[] = [
  {
    name: "Project 1",
    description: "Website pertamaku menggunakan HTML",
    github: "https://github.com/zizaaa54/websiteku.git",
    demo: "https://ziza-alpukat.vercel.app/",
  },
  {
    name: "Project 2",
    description: "websiteku menggunakan vite",
    github: "https://github.com/zizaaa54/viteku.git",
    demo: "https://viteku.vercel.app/",
  },
    {
    name: "Project 3",
    description: "Project aplikasi Telkomsel",
    github: "https://zizaaa54.github.io/ukktelkom/",
    demo: "-",
  },
];

export default projects;
