import * as React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";

interface WorkExperience {
    years: string;
    title: string;
    company: string;
    technologies: string[];
    mainTech: string[];
}

interface BasicInfo {
    section_name: {
        experience: string;
    };
}

interface ExperienceProps {
    resumeExperience?: WorkExperience[];
    resumeBasicInfo?: BasicInfo;
}

const Experience: React.FC<ExperienceProps> = ({
                                                   resumeExperience,
                                                   resumeBasicInfo,
                                               }) => {
    const sectionName = resumeBasicInfo?.section_name.experience || "Experience";

    const workElements = resumeExperience?.map((work, i) => {
        const mainTechBadges = work.mainTech?.map((tech, index) => (
            <Badge pill className="main-badge mr-2 mb-2" key={index}>
                {tech}
            </Badge>
        ));

        const techBadges = work.technologies?.map((tech, index) => (
            <Badge pill className="experience-badge mr-2 mb-2" key={index}>
                {tech}
            </Badge>
        ));

        return (
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={work.years}
                iconStyle={{
                    background: "#AE944F",
                    color: "#fff",
                    textAlign: "center",
                }}
                icon={i === 0 ? <i className="fab fa-react experience-icon"></i>: <i className="fas fa-briefcase experience-icon"></i>}
                key={i}
            >
                <div style={{ textAlign: "left", marginBottom: "4px" }}>
                    {mainTechBadges}
                </div>

                <h3
                    className="vertical-timeline-element-title"
                    style={{ textAlign: "left" }}
                >
                    {work.title}
                </h3>
                <h4
                    className="vertical-timeline-element-subtitle"
                    style={{ textAlign: "left" }}
                >
                    {work.company}
                </h4>
                <div style={{ textAlign: "left", marginTop: "15px" }}>{techBadges}</div>
            </VerticalTimelineElement>
        );
    });

    return (
        <section id="resume" className="pb-5">
            <div className="col-md-12 mx-auto">
                <div className="col-md-12">
                    <h1 className="section-title" style={{ color: "black" }}>
            <span className="text-black" style={{ textAlign: "center" }}>
              {sectionName}
            </span>
                    </h1>
                </div>
            </div>
            <div className="col-md-8 mx-auto">
                <VerticalTimeline>
                    {workElements}
                    <VerticalTimelineElement
                        iconStyle={{
                            background: "#AE944F",
                            color: "#fff",
                            textAlign: "center",
                        }}
                        icon={
                            <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
                        }
                    />
                </VerticalTimeline>
            </div>
        </section>
    );
};

export default Experience;
