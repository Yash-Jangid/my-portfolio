export interface Project {
  projectName: string;
  projectDescription: string;
  projectImage: string;
  projectLink: string;
}

const mobileAppsData: Project[] = [
  {
    "category": "Mobile",
    "projectName": "Government RTO Application Development",
    "projectDescription": <ul><li>Frontend: React Native, Css, Material UI</li><li>Backend: Node.js, ExpressJS</li><li>Database: MongoDB</li><li>APIs: Video Conferencing (Zoom SDE), build Custom APIs</li></ul>,
    "projectImage": "project-1.gif",
    "projectLink": "https://example.com/mobile-app-1"
  },
  {
    "category": "Mobile",
    "projectName": "Delivery Logistics Management System",
    "projectDescription": <ul><li>Frontend: React Native, TypeScript, Css, Material UI</li><li>Backend: Node.js, ExpressJS</li><li>Database: PostgreSQL</li><li>APIs: Google Map API, Custom APIs</li></ul>,
    "projectImage": "Mobile_project.jpg",
    "github": "https://github.com/Yash-Jangid/Sahaj-Application",
    "url": "none",
    "playStore": "none",
    "video": "https://www.youtube.com/watch?v=k4L-D-Q23Jw"
  }
]

;

const webAppsData: Project[] = [
  {
    category: "webApp",
    projectName: "Web App 1",
    projectDescription: "Description for Web App 1",
    projectImage: "Mobile_project.jpg",
    projectLink: "https://example.com/web-app-1",
    github:'https://github.com/Yash-Jangid/Sahaj-Application',
    url:' none',
    playStore:'none',
    video:'https://www.youtube.com/watch?v=k4L-D-Q23Jw',
  },
  {
    category: "webApp",
    projectName: "Web App 2",
    projectDescription: "Description for Web App 2",
    projectImage: "Mobile_project.jpg",
    projectLink: "https://example.com/web-app-2",
    github:'https://github.com/Yash-Jangid/RTO',
    url:' none',
    playStore:'none',
  },
  // Add more projects as needed
];

const wordpressData: Project[] = [
  {
    category: "site",
    projectName: "Wordpress Project 1",
    projectDescription: "Description for Wordpress Project 1",
    projectImage: "yash.Gif",
    projectLink: "https://example.com/wordpress-project-1",
    github:'none',
    url:' https://www.tradehouseacademy.com/',
    playStore:'none',
  },
  {
    category: "site",
    projectName: "Wordpress Project 2",
    projectDescription: "Description for Wordpress Project 2",
    projectImage: "PRoject3N.gif",
    github:'none',
    url:'https://terrapeptide.com/',
    playStore:'none',
  },
  // Add more projects as needed
];

const allProjects: Project[] = [...mobileAppsData, ...webAppsData, ...wordpressData];

export const initialTabs: Project[][] = [
  allProjects,
  mobileAppsData,
  webAppsData,
  wordpressData,
];

