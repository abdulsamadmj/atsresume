export const removeCommunityProject = (resumeData, setResumeData, index) => {
  const newProjects = [...(resumeData.communityProjects || [])].filter((_, idx) => idx !== index);
  setResumeData({ ...resumeData, communityProjects: newProjects });
};
