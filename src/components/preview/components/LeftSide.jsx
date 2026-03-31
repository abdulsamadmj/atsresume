import Skills from "../components/Skills";
import DateRange from "../../utility/DateRange";
import Language from "../components/Language";
import Certification from "../components/Certification";
import Link from "next/link";
import { Draggable, Droppable } from "@hello-pangea/dnd";

const LeftSide = ({ resumeData }) => {
  return (
    <div className="col-span-1 space-y-2">
      {resumeData.summary.length > 0 && (
        <div className="mb-1">
          <h2 className="section-title mb-1 border-b-2 border-gray-300">
            Summary
          </h2>
          <p className="content break-words">{resumeData.summary}</p>
        </div>
      )}

      {resumeData.education.length > 0 && (
        <div className="mb-1">
          <h2 className="section-title mb-1 border-b-2 border-gray-300">
            Education
          </h2>
          {resumeData.education.map((item, index) => (
            <div key={index} className="mb-1">
              <p className="content i-bold">{item.degree}</p>
              <p className="content">{item.school}</p>
              <DateRange
                startYear={item.startYear}
                endYear={item.endYear}
                id={`education-start-end-date`}
              />
            </div>
          ))}
        </div>
      )}

      <Droppable droppableId="skills" type="SKILLS">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {resumeData.skills.map((skill, index) => (
              <Draggable
                key={`SKILLS-${index}`}
                draggableId={`SKILLS-${index}`}
                index={index}
              >
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={`mb-1 ${
                      snapshot.isDragging &&
                      "outline-dashed outline-2 outline-gray-400 bg-white"
                    }`}
                  >
                    <Skills title={skill.title} skills={skill.skills} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <Language title="Languages" languages={resumeData.languages} />
      <Certification
        title="Certifications"
        certifications={resumeData.certifications}
      />

      {resumeData.communityProjects &&
        resumeData.communityProjects.length > 0 && (
          <div className="mb-1">
            <h2 className="section-title mb-1 border-b-2 border-gray-300">
              Community Projects
            </h2>
            {resumeData.communityProjects.map((item, index) => (
              <div key={index} className="mb-1">
                <div className="flex flex-row justify-between space-y-1">
                  <p className="content i-bold">{item.name}</p>
                  <DateRange
                    startYear={item.startYear}
                    endYear={item.endYear}
                    id={`community-projects-start-end-date-${index}`}
                  />
                </div>

                {item.link && (
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="content"
                  >
                    {item.link}
                  </Link>
                )}

                {item.description && (
                  <p className="sub-content">{item.description}</p>
                )}

                {typeof item.keyAchievements === "string" &&
                  item.keyAchievements.split("\n").length > 0 && (
                    <ul className="list-disc ul-padding content">
                      {item.keyAchievements.split("\n").map((ach, idx) => (
                        <li
                          key={idx}
                          className="sub-content"
                          dangerouslySetInnerHTML={{ __html: ach }}
                        />
                      ))}
                    </ul>
                  )}
              </div>
            ))}
          </div>
        )}
    </div>
  );
};

export default LeftSide;
