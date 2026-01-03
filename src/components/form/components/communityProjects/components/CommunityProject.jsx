import React, { useContext } from 'react';
import { handleCommunityProject } from '../utils/handleCommunityProject';
import { ResumeContext } from '../../../../builder';
import { BsTrash3 } from 'react-icons/bs';
import { removeCommunityProject } from '../utils/removeCommunityProject';

const CommunityProject = ({ project, index }) => {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  return (
    <div className="flex w-fill gap-5 items-top">
      <div className="flex-1">
        <input
          type="text"
          placeholder="Project Name"
          name="name"
          className="w-full other-input"
          value={project.name}
          onChange={(e) => handleCommunityProject(resumeData, setResumeData, e, index)}
        />

        <input
          type="text"
          placeholder="Link"
          name="link"
          className="w-full other-input"
          value={project.link}
          onChange={(e) => handleCommunityProject(resumeData, setResumeData, e, index)}
        />

        <textarea
          type="text"
          placeholder="Description"
          name="description"
          className="w-full other-input h-32"
          value={project.description}
          maxLength="250"
          onChange={(e) => handleCommunityProject(resumeData, setResumeData, e, index)}
        />

        <textarea
          type="text"
          placeholder="Key Achievements"
          name="keyAchievements"
          className="w-full other-input h-40"
          value={project.keyAchievements}
          onChange={(e) => handleCommunityProject(resumeData, setResumeData, e, index)}
        />

        <div className="flex-wrap-gap-2">
          <input
            type="date"
            placeholder="Start Year"
            name="startYear"
            className="flex-1 m-0 other-input"
            value={project.startYear}
            onChange={(e) => handleCommunityProject(resumeData, setResumeData, e, index)}
          />
          <input
            type="date"
            placeholder="End Year"
            name="endYear"
            className="flex-1 m-0 other-input"
            value={project.endYear}
            onChange={(e) => handleCommunityProject(resumeData, setResumeData, e, index)}
          />
        </div>
      </div>

      <button
        type="button"
        onClick={() => {
          removeCommunityProject(resumeData, setResumeData, index);
        }}
        aria-label="Remove"
        className="p-2 h-fit text-white bg-fuchsia-700 rounded text-xl"
      >
        <BsTrash3 />
      </button>
    </div>
  );
};

export default CommunityProject;
