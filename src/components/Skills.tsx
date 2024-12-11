import React from "react";

interface SkillsProps {
    sharedSkills: {
        icons: { name: string; class: string }[];
    };
    resumeBasicInfo: {
        section_name: {
            skills: string;
        };
    };
}

const Skills: React.FC<SkillsProps> = ({ sharedSkills, resumeBasicInfo }) => {
    const skills = sharedSkills?.icons?.map((skill, index) => (
        <li className="list-inline-item mx-3" key={index}>
      <span>
        <div className="text-center skills-tile">
          <i className={skill.class} style={{ fontSize: "220%" }}>
            <p
                className="text-center"
                style={{ fontSize: "30%", marginTop: "4px" }}
            >
              {skill.name}
            </p>
          </i>
        </div>
      </span>
        </li>
    ));

    return (
        <section id="skills">
            <div className="col-md-12">
                <div className="col-md-12">
                    <h1 className="section-title">
                        <span className="text-white">{resumeBasicInfo?.section_name.skills}</span>
                    </h1>
                </div>
                <div className="col-md-12 text-center">
                    <ul className="list-inline mx-auto skill-icon">{skills}</ul>
                </div>
            </div>
        </section>
    );
};

export default Skills;
