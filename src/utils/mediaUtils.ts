import portfolio from "../../public/Assets/portfolio.json";

export const isVideo = (media: string) => {
  return media.endsWith(".mp4");
};

export const getRandomProject = () => {
  const projects = portfolio.flatMap((row) => row.projects);
  const randomIndex = Math.floor(Math.random() * projects.length);

  return projects[randomIndex];
};
