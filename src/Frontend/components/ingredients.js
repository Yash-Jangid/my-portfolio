const mobileAppsData = [
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
    "projectImage": "Project 2.gif",
    "github": "https://github.com/Yash-Jangid/Sahaj-Application",
    "url": "none",
    "playStore": "none",
    "video": "https://www.youtube.com/watch?v=k4L-D-Q23Jw"
  }
]

  ;

const webAppsData = [
  {
    category: "webApp",
    projectName: "Web App 1",
    projectDescription: "Description for Web App 1",
    projectImage: "Mobile_project.jpg",
    projectLink: "https://example.com/web-app-1",
    github: 'https://github.com/Yash-Jangid/Sahaj-Application',
    url: ' none',
    playStore: 'none',
    video: 'https://www.youtube.com/watch?v=k4L-D-Q23Jw',
  },
  {
    category: "webApp",
    projectName: "Web App 2",
    projectDescription: "Description for Web App 2",
    projectImage: "Mobile_project.jpg",
    projectLink: "https://example.com/web-app-2",
    github: 'https://github.com/Yash-Jangid/RTO',
    url: ' none',
    playStore: 'none',
  },
  // Add more projects as needed
];

const wordpressData = [
  {
    'category': "site",
    'projectName': "Lerning Management System (LMS)",
    'projectDescription': <ul>
      <li> • Developed an LMS usingWordPress, HTML,
        CSS, and PHP, enabling user authentication
        through login and signup features.</li>
      <li> • Implemented a subscription-based model allowing
        users to choose and purchase plans for
        learning resources</li>
      <li>• Integrated payment gateways to enable secure and seamless transactions</li>
    </ul>,
    'projectImage': "yash.Gif",
    'projectLink': "https://example.com/wordpress-project-1",
    'github': 'none',
    'url': ' https://www.tradehouseacademy.com/',
    'playStore': 'none',
  },
  {
    'category': "site",
    'projectName': "E-commerce Website",
    'projectDescription': <ul>
      <li>• Developed an E-commerce website using WordPress, HTML, CSS, and PHP, enabling user authentication through login and signup features.</li>
      <li>• Implemented a custom product authentication plugin allowing users to purchase Product and can Verify Delivered Product is 100% genuine or not</li>
      <li>• Integrated payment gateways to enable secure and seamless transactions</li>
    </ul>,
    'projectImage': "PRoject3N.gif",
    'github': 'none',
    'url': 'https://terrapeptide.com/',
    'playStore': 'none',
  },
  {
    'category': "site",
    'projectName': "Business Website",
    'projectDescription': <ul>
      <li>•WordPress Website Development: Built a modern website on WordPress.</li>
      <li>• API Integration: Integrated APIs for enhanced functionality, including payment gateways and communication channels.</li>
      <li>• Segmented Business Fields: Developed tailored sections for diverse business areas.</li>
    </ul>,
    'projectImage': "WordpresProject3.gif",
    'github': 'none',
    'url': 'https://www.imaker.technology/',
    'playStore': 'none',
  },
  // Add more projects as needed
];

const allProjects = [...mobileAppsData, ...webAppsData, ...wordpressData];

export const initialTabs = [
  allProjects,
  mobileAppsData,
  webAppsData,
  wordpressData,
];

