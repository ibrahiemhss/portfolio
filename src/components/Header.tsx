import React, { useState, useEffect, useMemo } from "react";
import Typical from "react-typical";
import Switch from "react-switch";

interface HeaderProps {
    sharedData?: {
        name?: string;
        section_name?: { about: string; };
        titles?: string[];
        description_header?: string,
        description?: string,
    };
}

const Header: React.FC<HeaderProps> = ({ sharedData }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const titles = useMemo(
        () =>
            (sharedData?.titles || [])
                .map((title) => [title.toUpperCase(), 1500])
                .flat() || [],
        [sharedData]
    );

    const handleThemeSwitchChange = (checked: boolean) => {
        setIsDarkTheme(checked);
        setTheme();
    };

    const setTheme = () => {
        const dataThemeAttribute = "data-theme";
        const body = document.body;
        const newTheme =
            body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
        body.setAttribute(dataThemeAttribute, newTheme);
    };

    useEffect(() => {
        // Set the initial theme if needed
        document.body.setAttribute(
            "data-theme",
            isDarkTheme ? "dark" : "light"
        );
    }, [isDarkTheme]);

    const HeaderTitleTypeAnimation = useMemo(
        () => (
            <Typical steps={titles} loop={50} />
        ),
        [titles]
    );

    return (
        <header
            id="home"
            style={{ height: window.innerHeight - 140, display: "block" }}
        >
            <div className="row aligner" style={{ height: "100%" }}>
                <div className="col-md-12">
                    <div>
            <span
                className="iconify header-icon"
                data-icon="la:laptop-code"
                data-inline="false"
            ></span>
                        <br />
                        <h1 className="mb-0">
                            {sharedData && <Typical steps={[sharedData.name || '']} wrapper="p" />}
                        </h1>
                        <div className="title-container">{HeaderTitleTypeAnimation}</div>
                        <Switch
                            checked={isDarkTheme}
                            onChange={handleThemeSwitchChange}
                            offColor="#baaa80"
                            onColor="#353535"
                            className="react-switch mx-auto"
                            width={90}
                            height={40}
                            uncheckedIcon={
                                <span
                                    className="iconify"
                                    data-icon="twemoji:owl"
                                    data-inline="false"
                                    style={{
                                        display: "block",
                                        height: "100%",
                                        fontSize: 25,
                                        textAlign: "end",
                                        marginLeft: "20px",
                                        color: "#353239",
                                    }}
                                ></span>
                            }
                            checkedIcon={
                                <span
                                    className="iconify"
                                    data-icon="noto-v1:sun-with-face"
                                    data-inline="false"
                                    style={{
                                        display: "block",
                                        height: "100%",
                                        fontSize: 25,
                                        textAlign: "end",
                                        marginLeft: "10px",
                                        color: "#353239",
                                    }}
                                ></span>
                            }
                            id="icon-switch"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
