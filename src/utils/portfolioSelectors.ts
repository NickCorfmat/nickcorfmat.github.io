import { Project, ProjectCategory } from "../../public/Assets/portfolioData";

export const getProjectsByCategory = (
  projects: Project[],
  category: ProjectCategory
) => {
  return projects.filter(project =>
    project.category.includes(category)
  );
};

export const getRandomProject = (projects: Project[]) => {
  const randomIndex = Math.floor(Math.random() * projects.length);
  return projects[randomIndex];
};
