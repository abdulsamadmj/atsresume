export const addCommunityProject = (resumeData, setResumeData) => {
  const emptyProject = {
    name: "",
    link: "",
    description: "",
    keyAchievements: "",
    startYear: "",
    endYear: "",
  };

  const newProjects = resumeData.communityProjects ? [...resumeData.communityProjects] : [];
  newProjects.push(emptyProject);

  setResumeData({
    ...resumeData,
    communityProjects: newProjects,
  });
};
