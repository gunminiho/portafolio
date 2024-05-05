import FolderIcon from "../../../assets/Folder Icons/folder.ico";
import CloseIcon from "../../../assets/ieclose.svg"
import Minimize from "../../../assets/ieminimize.svg";
import Maximize from "../../../assets/iemaximize.svg";
import Back from "../../../assets/ieback.svg";
import Next from "../../../assets/ienext.svg";
import Page from "../../../assets/pagecancel.svg";
import Refresh from "../../../assets/ierefresh.svg";
import Home from "../../../assets/iehome.svg";
import Search from "../../../assets/iesearch.svg";
import Favorites from "../../../assets/iefavorites.svg";
import History from "../../../assets/iehistory.png";
import OpenNew from "../../../assets/opennew.png";
import FolderOpened from "../../../assets/Folder Icons/opened.ico";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setShowFolder, setUrl } from "../../../redux/windowsBool";
import MyProjects from "../../../assets/projects.json";
import MisProyectos from "../../../assets/proyectos.json";

const Folder = ({width, height}) => {
   
    const dispatch = useDispatch();
    const {showFolder} = useSelector((state) => state.windows);
    const [projects, setProjects] = useState();
    const [viewProject, setViewProject] = useState(undefined);
    const [selectedProject, setSelectedProject] = useState(undefined);

    const {language, url} = useSelector((state) => state.windows);

    useEffect(() => {
        if(language === "es") {
            setProjects(MisProyectos);
        } else {
            setProjects(MyProjects);
        }
    }, [language]);

    const setProjectToView = (index) => {
        setViewProject(projects[index]);
        setSelectedProject(index);
        dispatch(setUrl(projects[index].deploy));
    };

    const toggleFolder = () => {
        dispatch(setShowFolder(!showFolder));
    };

    const getReaminHeight = () => {
        const heightPercent = 0.6;
        return Math.ceil((height * heightPercent) -( 27 + 35 + 40 + 8 )); // 55% - (Barra de edicion + Barra de navegacion + 8px de borde)
    }

    return (
        <>
        <aside id="background" className="size-full flex items-center justify-center relative">
            <div id="header" className=" border-4 border-blue-700 w-[70%] min-w-[650px] h-[60%] rounded">
            <div id="tittle" className="flex items-center justify-start bg-blue-700 h-[35px] rounded font-bold"><img src={FolderIcon} className="mx-2 size-5" />
            C:\Users\Erick\Projects
            <div id="buttons" className="w-full h-[27px] mb-1 flex items-center justify-end" >
            <div className="mr-[2px] size-6 rounded border shadow-white shadow-sm border-white bg-blue-700 flex item-center" ><img src={Minimize} onClick={toggleFolder}  /></div>
            <div className="mr-[2px] size-6 rounded border shadow-white shadow-sm border-white bg-blue-700 flex items-center justify-center" ><img className="size-5" src={Maximize} /></div>
            <div className="mr-[2px] size-6 rounded border shadow-white shadow-sm border-white bg-red-500 flex items-center justify-center hover:bg-red-700" onClick={toggleFolder} ><img className="size-4" src={CloseIcon} /></div>
            </div>
            </div>
           {/* Barra edicion */}
          <div className="flex flex-row justify-start bg-gray-200 items-center text-black text-sm h-[25px]">
          <p className="p-1 mx-1 hover:border-b-2 hover: border-blue-700">{language ==="en" ? "File" :"Archivo"}</p>
          <p className="p-1 mx-1 hover:border-b-2 hover: border-blue-700">{language ==="en" ? "Edit" :"Editar"}</p>
          <p className="p-1 mx-1 hover:border-b-2 hover: border-blue-700">{language ==="en" ? "View" :"Ver"}</p>
          <p className="p-1 mx-1 hover:border-b-2 hover: border-blue-700">{language ==="en" ? "Favorites" :"Favoritos"}</p>
          <p className="p-1 mx-1 hover:border-b-2 hover: border-blue-700">{language ==="en" ? "Tools" :"Herramientas"}</p>
          <p className="p-1 mx-1 hover:border-b-2 hover: border-blue-700">{language ==="en" ? "Help" :"Ayuda"}</p>
        </div>
          {/* Barra de navegacion */}      
          <div className="flex flex-row justify-start bg-gray-200 items-center text-black text-sm min-w-[fit-content]">
                <div className="flex border-2 border-gray-300 items-center min-w-[fit-content]">
                <img src={Back} className="size-9 mx-2 " /><p className={`mx-1 ${width < 1000 ? "hidden" : "" }`}>{language ==="en" ? "Back" :"Atras"}</p>
                <img src={Next} className="size-8 mx-2 " /><p className={`mr-2 ml-1 ${width < 1000 ? "hidden" : "" }`}>{language ==="en" ? "Next" :"Siguiente"}</p>
                <img src={Page} className={`size-8 bg-blue-100 mx-2`} />
                <img src={Refresh} className={`size-8 mx-2`}  />
                <img src={Home} className={`size-8 mx-2 `} />
                </div>
                <div className={`flex border-2 border-gray-300 items-center min-w-[fit-content] w-[72%] `}>
                <img src={Search} className={`size-9 mx-2 `} /><p className={`${width < 1130 ? "hidden" : "" }`}>{language ==="en" ? "Search" :"Buscar"}</p>
                <img src={Favorites} className={`size-8 mx-2`} /><p className={`${width < 1130 ? "hidden" : "" }`}>{language ==="en" ? "Favorites" :"Favoritos"}</p>
                <img src={History} className={`size-8 mx-2 `} /><p className={`${width < 1330 ? "hidden" : "" }`}>{language ==="en" ? "History" :"Historial"}</p>
                <a target="_blank" href={url} className="flex text-black hover:bg-blue-200 ml-3 items-center"><img src={OpenNew} className="size-7" /><p className={`${width < 500 ? "hidden" : "" }`}>{language ==="en" ? "Open in browser" :"Abrir en tu navegador"}</p></a>
                </div>
            </div>
            {/* Contenido de la ventana */}
            <div className={`w-full flex flex-row bg-white text-black overflow-y-auto`} style={{height:getReaminHeight()}}>
                {/* Barra de navegacion de proyectos */}
                
                <dl id="barraizquierda" className=" w-1/4 min-w-[fit-content] text-sm px-2 ">
                    <dt className="text-xl mb-2 ml-1">{language === "es" ? "Mis Proyectos" : "My Projects"}</dt>
                    {projects?.map((project, index) => {
                        return <dd onClick={()=>setProjectToView(index)} key={index} className="ml-2 hover:cursor-pointer hover:bg-gray-100"><div className="size-4 border-b-2 border-l-2 border-black inline-block mb-1"></div><img src={FolderOpened} className="size-4 mb-1 inline-block" /><span className="ml-1">{project.title}</span></dd>
                    })}
                </dl>
               
                {/* Destalle del proyecto */}
                <div id="barraderecha"  className="border w-3/4 h-[max-content] min-h-full p-2">
                <p className="text-center text-[25px]">{viewProject?.title}</p>
                <p className="font-bold">{viewProject ? (language === "es" ? "Resumen: " : "Summary: ") : ""}{viewProject?.description}</p>
                <p className="font-bold">{viewProject ? (language === "es" ? "Descripción: " : "Description: ") : ""}
                <ul class="ml-10 my-2 list-disc">
                {viewProject?.full.map((paragraph, index) => {
                    return (
                    <li key={index}>{paragraph}</li>
                )
                })}
                </ul>
                </p>
                <p className="font-bold">{viewProject ? (language === "es" ? "Hecho para: " : "Made for: ") : ""}{viewProject?.type}</p>
                <p className="font-bold">{viewProject ? (language === "es" ? "Link: " : "Link: ") : ""}{viewProject?.deploy}</p>
                </div>
            
            </div>
            </div>
        </aside>
        </>
    );
    }

export default Folder;