import { featuredProjects } from "../../public/Assets/portfolioData";

export const isVideo = (media: string) => {
  return media.endsWith(".mp4");
};

export const getRandomProject = () => {
  const randomIndex = Math.floor(Math.random() * featuredProjects.length);
  return featuredProjects[randomIndex];
};
