import {useState, useEffect, type FC} from "react";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

interface ResumeData {
  // basic_info?: {
  //   name?: string;
  //   section_name?: { about: string; };
  //   titles?: string[];
  //     description_header?: string,
  //     description?: string,
  // };
  basic_info?: any;
  projects?: any;
  skills?: any;
  experience?: any;
}

export const DATA_URL = 'https://ibrahiemhss.github.io/portfolio/';

const App: FC = () => {
  const [resumeData, setResumeData] = useState<ResumeData>({});
  const [sharedData, setSharedData] = useState<ResumeData>({});

  useEffect(() => {
    loadSharedData();
    applyPickedLanguage(
        (window as any).$primaryLanguage,
        (window as any).$secondaryLanguageIconId
    );
  }, []);

  const loadSharedData = async () => {
    try {
      const response = await fetch(`${DATA_URL}/portfolio_shared_data.json`);
        console.warn("response data:", response);

        const data = await response.json();
      setSharedData(data);
      document.title = data.basic_info?.name || "Portfolio";
    } catch (error) {
      console.error("Error loading shared data:", error);
      alert(error);
    }
  };

  const loadResumeFromPath = async (path: string) => {
    try {
      const response = await fetch(path);
      const data = await response.json();
      setResumeData(data);
    } catch (error) {
      console.error("Error loading resume data:", error);
      alert(error);
    }
  };

  const applyPickedLanguage = async (
      pickedLanguage: string,
      oppositeLangIconId: string
  ) => {
    swapCurrentlyActiveLanguage(oppositeLangIconId);
    document.documentElement.lang = pickedLanguage;
    const resumePath =
        document.documentElement.lang === (window as any).$primaryLanguage
            ? `${DATA_URL}/res_primaryLanguage.json`
            : `${DATA_URL}/res_secondaryLanguage.json`;
    await loadResumeFromPath(resumePath);
  };

  const swapCurrentlyActiveLanguage = (oppositeLangIconId: string) => {
    const pickedLangIconId =
        oppositeLangIconId === (window as any).$primaryLanguageIconId
            ? (window as any).$secondaryLanguageIconId
            : (window as any).$primaryLanguageIconId;

    document
        .getElementById(oppositeLangIconId)
        ?.removeAttribute("filter");
    document
        .getElementById(pickedLangIconId)
        ?.setAttribute("filter", "brightness(40%)");
  };

  return (
      <div>
        <Header sharedData={sharedData.basic_info} />
       {/* <div className="col-md-12 mx-auto text-center language">
          <div
              onClick={() =>
                  applyPickedLanguage(
                      (window as any).$primaryLanguage,
                      (window as any).$secondaryLanguageIconId
                  )
              }
              style={{ display: "inline" }}
          >
          <span
              className="iconify language-icon mr-5"
              data-icon="twemoji-flag-for-flag-united-kingdom"
              data-inline="false"
              id={(window as any).$primaryLanguageIconId}
          ></span>
          </div>
          <div
              onClick={() =>
                  applyPickedLanguage(
                      (window as any).$secondaryLanguage,
                      (window as any).$primaryLanguageIconId
                  )
              }
              style={{ display: "inline" }}
          >
          <span
              className="iconify language-icon"
              data-icon="twemoji-flag-for-flag-romania"
              data-inline="false"
              id={(window as any).$secondaryLanguageIconId}
          ></span>
          </div>
        </div>*/}
        <About
            resumeBasicInfo={resumeData.basic_info}
            sharedBasicInfo={sharedData.basic_info}
        />
        <Projects
            resumeProjects={resumeData.projects}
            resumeBasicInfo={resumeData.basic_info}
        />
        <Skills
            sharedSkills={sharedData.skills}
            resumeBasicInfo={resumeData.basic_info}
        />
        <Experience
            resumeExperience={resumeData.experience}
            resumeBasicInfo={resumeData.basic_info}
        />
        <Footer sharedBasicInfo={sharedData.basic_info} />
      </div>
  );
};

export default App;
