import Taskbar from "./Taskbar/Taskbar";
import Menu from "./Taskbar/Menu/Menu";
import Word from "./View/Word";
import Window from "./View/Window";
import InternetExplorer from "./View/IE";
import AllProjects from "./View/AllProjects";
import CMD from "./View/CMD";
import { useEffect, useState } from "react";
import CV from "../../assets/cv.json"
import StartUp from "./Desktop/StartUp";

const ScreenLayout = ({idiom}) => {

    const [resume, setResume] = useState(CV); 
    const [currentView, setCurrentView] = useState();
    const [startMenu, setStartMenu] = useState(false);
    const [startUp, setStartUp] = useState(true);
    const [showText, setShowText] = useState(false);
    const [showWindow, setShowWindow] = useState(false);
    const [showIE, setShowIE] = useState(false);
    const [language,setLanguage] = useState("none");
    const [allProjects, setAllProjects] = useState(false);
    const [project, setProject] = useState();

    useEffect(() => {
        if(idiom){
            setLanguage(idiom);
            alert(startUp);
        }
    }
    ,[language]);


  return (
    <div>
      <header>{/* Contenido del encabezado */}
      </header>
      <main className={`bg-[url('https://wgoqatar.com/wp-content/uploads/2021/03/windows_xp_original-wallpaper-2880x1800-1-780x470.jpg')] absolute top-0 left-0 bottom-0 right-0 z-0 bg-cover bg-no-repeat bg-center`}>
       { language === "none" ? <StartUp setLanguage={setLanguage} /> : <Menu startMenu={startMenu} setStartMenu={setStartMenu} showWindow={showWindow} setShowWindow={setShowWindow} setCurrentView={setCurrentView} resume={resume} setShowText={setShowText} showText={showText} name={resume?.name} allProjects={allProjects} setAllprojects={setAllProjects} />}
       { showText && currentView && <Word tittle={resume.name} currentView={currentView} setCurrentView={setCurrentView} setShowText={setShowText} showText={showText} language={language} setLanguage={setLanguage}  />}
       { showWindow && <Window showWindow={showWindow} setShowWindow={setShowWindow} />}
       {showIE && <InternetExplorer project={project} showIE={showIE} setShowIE={setShowIE} />}
       { allProjects && <AllProjects allProjects={allProjects} setAllProjects={setAllProjects} setProject={setProject} setShowIE={setShowIE} />}
       { startUp && <CMD setStartUp={setStartUp} /> }
      </main>
      <footer>
        {/* Contenido del pie de página */}
        { language !== "none" ? <Taskbar setStartMenu={setStartMenu} startMenu={startMenu} language={language} /> : ""}
      </footer>
    </div>
  );
};

export default ScreenLayout;

/* <Loading /> */
