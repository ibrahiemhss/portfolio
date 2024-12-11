import * as React from "react";
import { Icon } from "@iconify/react";
import linkedinIcon from "@iconify/icons-logos/linkedin-icon";
import githubIcon from "@iconify/icons-logos/github";
import stackOverflowIcon from "@iconify/icons-logos/stackoverflow-icon";
import {DATA_URL} from "src/App";

interface BasicInfo {
    image: string;
}

interface ResumeBasicInfo {
    section_name: {
        about: string;
    };
    description_header: string;
    description: string;
}

interface AboutProps {
    sharedBasicInfo?: BasicInfo;
    resumeBasicInfo?: ResumeBasicInfo;
}

const About: React.FC<AboutProps> = ({ sharedBasicInfo, resumeBasicInfo }) => {
    const profilePic = sharedBasicInfo
        ? `${DATA_URL}images/${sharedBasicInfo.image}`
        : `${DATA_URL}images/default.png`;

    const sectionName = resumeBasicInfo?.section_name.about || "About Me";
    const hello = resumeBasicInfo?.description_header || "Hello!";
    const about = resumeBasicInfo?.description || "Welcome to my profile.";

    return (
        <section id="about">
            <div className="col-md-12">
                <h1 style={{ color: "black" }}>
                    <span>{sectionName}</span>
                </h1>
                <div className="row center mx-auto mb-5">
                    <div className="col-md-4 mb-5 center">
                        <div className="polaroid">
              <span style={{ cursor: "auto" }}>
                <img
                    height="250px"
                    src={profilePic}
                    alt="Avatar placeholder"
                />
                <Icon
                    icon={linkedinIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%", cursor: "pointer" }}
                    onClick={() => window.open("https://www.linkedin.com/in/ibrahim-husin/", "_blank")}
                />
                <Icon
                    icon={githubIcon}
                    style={{ fontSize: "120%", margin: "9% 5% 0 5%", cursor: "pointer" }}
                    onClick={() => window.open("https://github.com/ibrahiemhss", "_blank")}
                />
                <Icon
                    icon={stackOverflowIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%", cursor: "pointer" }}
                    onClick={() => window.open("https://stackoverflow.com/users/28703635/ibrahim-hss", "_blank")}
                />
              </span>
                        </div>
                    </div>

                    <div className="col-md-8 center">
                        <div className="col-md-10">
                            <div className="card">
                                <div className="card-header">
                  <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                  ></span>{" "}
                                    &nbsp;{" "}
                                    <span
                                        className="iconify"
                                        data-icon="twemoji:yellow-circle"
                                        data-inline="false"
                                    ></span>{" "}
                                    &nbsp;{" "}
                                    <span
                                        className="iconify"
                                        data-icon="twemoji:green-circle"
                                        data-inline="false"
                                    ></span>
                                </div>
                                <div
                                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                                    style={{
                                        height: "auto",
                                        fontSize: "132%",
                                        lineHeight: "200%",
                                    }}
                                >
                                    <br />
                                    <span className="wave">{hello} :) </span>
                                    <br />
                                    <br />
                                    {about}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
