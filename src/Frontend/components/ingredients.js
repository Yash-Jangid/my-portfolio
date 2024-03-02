export interface Project {
  projectName: string;
  projectDescription: string;
  projectImage: string;
  projectLink: string;
}

const mobileAppsData: Project[] = [
  {
    projectName: "Mobile App 1",
    projectDescription: "Description for Mobile App 1",
    projectImage: "Mobile_project.jpg",
    projectLink: "https://example.com/mobile-app-1",
  },
  {
    projectName: "Mobile App 2",
    projectDescription: "Description for Mobile App 2",
    projectImage: "Mobile_project.jpg",
    projectLink: "https://example.com/mobile-app-2",
  },
  // Add more projects as needed
];

const webAppsData: Project[] = [
  {
    projectName: "Web App 1",
    projectDescription: "Description for Web App 1",
    projectImage: "Mobile_project.jpg",
    projectLink: "https://example.com/web-app-1",
  },
  {
    projectName: "Web App 2",
    projectDescription: "Description for Web App 2",
    projectImage: "Mobile_project.jpg",
    projectLink: "https://example.com/web-app-2",
  },
  // Add more projects as needed
];

const wordpressData: Project[] = [
  {
    projectName: "Wordpress Project 1",
    projectDescription: "Description for Wordpress Project 1",
    projectImage: "Mobile_project.jpg",
    projectLink: "https://example.com/wordpress-project-1",
  },
  {
    projectName: "Wordpress Project 2",
    projectDescription: "Description for Wordpress Project 2",
    projectImage: "Mobile_project.jpg",
    projectLink: "https://example.com/wordpress-project-2",
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
