import React, { useContext } from 'react';
import { ResumeContext } from '../../../../builder';
import { addCommunityProject } from '../utils/addCommunityProject';
import CommunityProject from '../components/CommunityProject';
import { MdAddCircle } from 'react-icons/md';

const CommunityProjects = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  return (
    <div className="flex-col-gap-2">
      <h2 className="input-title">Community Projects</h2>
      {resumeData.communityProjects && resumeData.communityProjects.map((project, index) => (
        <CommunityProject
          key={index}
          project={project}
          index={index}
        />
      ))}
      <button
        type="button"
        onClick={() => {
          addCommunityProject(resumeData, setResumeData);
        }}
        aria-label="Add"
        className="p-2 w-[37px] text-white bg-fuchsia-700 rounded text-xl"
      >
        <MdAddCircle />
      </button>
    </div>
  );
};

export default CommunityProjects;
