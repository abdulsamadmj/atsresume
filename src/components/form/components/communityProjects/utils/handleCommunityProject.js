export const handleCommunityProject = (resumeData, setResumeData, e, index) => {
  const newProjects = [...(resumeData.communityProjects || [])];
  newProjects[index] = { ...(newProjects[index] || {}) };
  newProjects[index][e.target.name] = e.target.value;
  setResumeData({ ...resumeData, communityProjects: newProjects });
};
