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
import StartUp from "./StartUp";
import Folder from "../Views/Folder";
import { setLanguage } from "../../../redux/windowsBool";
import { useSelector, useDispatch } from "react-redux";
import Info from "../Views/Information";

const ScreenLayout = ({idiom, width, height}) => {

    const [resume, setResume] = useState(CV); 
    const [currentView, setCurrentView] = useState();
    const [project, setProject] = useState();

    const dispatch = useDispatch();
    const {language, startUp, allProjects,showText, showWindow, showIE, showFolder, showResources, showInfo} = useSelector((state) => state.windows);
  
    useEffect(() => {
        if(idiom){
            dispatch(setLanguage(idiom));
        }
    }
    ,[language]);

  return (
    <div>
      <header>{/* Contenido del encabezado  */}  </header>
      <main className={`bg-[url('https://wgoqatar.com/wp-content/uploads/2021/03/windows_xp_original-wallpaper-2880x1800-1-780x470.jpg')] absolute top-0 left-0 bottom-0 right-0 z-0 bg-cover bg-no-repeat bg-center`}  >
      { language !== "none" &&  <DesktopIcons height={height} />}
       { !startUp && language === "none" ? <StartUp /> : <Menu setCurrentView={setCurrentView} resume={resume} name={resume?.name} />}
       { showText  && <Word currentView={currentView} />}
       { showWindow && <Window />}
       {showIE && <InternetExplorer />}
       { allProjects && <AllProjects />}
       { startUp && <CMD /> }
       { showFolder && <Folder width={width} height={height} /> }
       { showResources && <Resources height={height} />}
       { showInfo && <Info height={height} />}
      </main>
      <footer>
        {/* Contenido del pie de página */}
        { language !== "none" ? <Taskbar width={width} currentView={currentView} /> : ""}
      </footer>
      
    </div>
  );
};

export default ScreenLayout;

/* <Loading /> */
