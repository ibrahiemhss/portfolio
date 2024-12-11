import React, { useState } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";
import {DATA_URL} from "src/App";

interface Project {
    title: string;
    startDate: string;
    images: string[];
    technologies: { name: string; class: string }[];
    description: string;
    url?: string;
}

interface ProjectsProps {
    resumeProjects: Project[];
    resumeBasicInfo: {
        section_name: {
            projects: string;
        };
    };
}

const Projects: React.FC<ProjectsProps> = ({
                                               resumeProjects,
                                               resumeBasicInfo,
                                           }) => {
    const [modalData, setModalData] = useState<Project | null>(null);

    const handleModalClose = () => setModalData(null);

    const projects = resumeProjects?.map((project) => (
        <div
            onClick={()=>{setModalData(project)}}
            className="col-12 col-md-6 col-lg-4 col-xl"
            key={project.title}
            style={{
                cursor: "pointer",
            }}
        >
            <div className="portfolio-item d-block">
                <div
                    className="foto"
                    style={{
                        position: "relative",
                        overflow: "hidden",
                        height: "230px",
                        width: "100%",
                    }}
                >
                    <img
                        src={`${DATA_URL}images/portfolio/apps/${project.images[0]}`}
                        alt="projectImages"
                        style={{
                            height: "100%",
                            width: "100%",
                            objectFit: "fill",
                        }}
                    />
                </div>
                <span className="project-date">{project.startDate}</span>
                <br/>
                <p className="project-title-settings mt-3">{project.title}</p>
            </div>
        </div>
    ));

    return (
        <section id="portfolio">
            <div className="col-md-12">
                <h1 className="section-title" style={{color: "black"}}>
                    <span>{resumeBasicInfo?.section_name?.projects}</span>
                </h1>
                <div className="col-md-12 mx-auto text-center">
                    <div
                        className="row mx-auto"
                        style={{
                            gap: "15px",
                        }}>
                        {projects}
                    </div>
                </div>
                <ProjectDetailsModal
                    show={!!modalData}
                    onHide={handleModalClose}
                    data={modalData!}
                />
            </div>
        </section>
    );
};

export default Projects;
