import { projects } from "../../public/Assets/portfolio";

export const isVideo = (media: string) => {
  return media.endsWith(".mp4");
};

export const getRandomProject = () => {
  const allProjects = projects.flatMap((category) => category.projects);
  const randomIndex = Math.floor(Math.random() * allProjects.length);

  return allProjects[randomIndex];
};
