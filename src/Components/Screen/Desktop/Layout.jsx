import Taskbar from "../Taskbar/Taskbar";
import Menu from "../Taskbar/Menu/Menu";
import Word from "../Views/Word";
import Window from "../Views/Window";
import InternetExplorer from "../Views/IE";
import AllProjects from "../Views/AllProjects";
import CMD from "../Views/CMD";
import DesktopIcons from "./DesktopIcons";
import Resources from "../Views/Resources";
import { useEffect, useState } from "react";
import CV from "../../../assets/cv.json"
import Resume from "../../../assets/resume.json";
import StartUp from "./StartUp";
import Folder from "../Views/Folder";
import Tutorial from "../Views/Tutorial";
import { useSelector } from "react-redux";
import Info from "../Views/Information";
import Background from "../../../assets/descarga.webp";

const ScreenLayout = ({ width, height }) => {

  const [currentView, setCurrentView] = useState();
  const { language, startUp, allProjects, showText, showWindow, showIE, showFolder, showResources, showInfo, tutorial } = useSelector((state) => state.windows);
  const [resume, setResume] = useState();

  useEffect(() => {
    if (language !== "none")
      setResume(language === "es" ? CV : Resume);
  }
    , [language]);

  return (
    <div>
      <header>{/* Contenido del encabezado  */}  </header>
      <main className={`absolute top-0 left-0 bottom-0 right-0 z-0 bg-cover bg-no-repeat bg-center`} style={{ backgroundImage: `url(${Background})` }} >
        {language !== "none" && <DesktopIcons height={height} />}
        {!startUp && language === "none" ? <StartUp /> : <Menu setCurrentView={setCurrentView} resume={resume} name={resume?.name} />}
        {showText && <Word currentView={currentView} />}
        {showWindow && <Window />}
        {showIE && <InternetExplorer />}
        {allProjects && <AllProjects />}
        {startUp && <CMD />}
        {showFolder && <Folder width={width} height={height} />}
        {showResources && <Resources height={height} />}
        {showInfo && <Info height={height} />}
        {tutorial && <Tutorial />}
      </main>
      <footer>
        {/* Contenido del pie de página */}
        {language !== "none" ? <Taskbar width={width} currentView={currentView} /> : ""}
      </footer>

    </div>
  );
};

export default ScreenLayout;
