import IE from "../../../assets/ie.svg";
import Close from "../../../assets/ieclose.svg";
import Maximize from "../../../assets/iemaximize.svg";
import Minimize from "../../../assets/ieminimize.svg";
import Back from "../../../assets/ieback.svg";
import Next from "../../../assets/ienext.svg";
import Page from "../../../assets/pagecancel.svg";
import Refresh from "../../../assets/ierefresh.svg";
import Home from "../../../assets/iehome.svg";
import Search from "../../../assets/iesearch.svg";
import Favorites from "../../../assets/iefavorites.svg";
import History from "../../../assets/iehistory.png";
import OpenNew from "../../../assets/opennew.png";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowIE, setUrl } from "../../../redux/windowsBool";

const InternetExplorer = () => {

    const dispatch = useDispatch();
    const {showIE, project, language, url} = useSelector((state) => state.windows);
    
    useEffect(() => {
     
      return () => {
        dispatch(setUrl(null));
      }
    }, [project]);

    const toggleIE = () => {
        dispatch(setShowIE(!showIE));
    }
   
  return (
    <aside className="relative flex justify-center items-center w-[fit-content] h-screen mx-auto">
      {/* Marco total */}
      <div className="border min-w-[680px] w-[fit-content] min-h-1/2 h-[650px] mx-auto bg-gray-800 border-4 border-blue-700 rounded-md shadow-md border">
        {/* Primera línea del encabezado */}
        <div className="flex h-[35px] w-full bg-blue-700 justify-between items-center shadow-md shadow-white">
        <img src={IE} alt="Internet Explorer" className="w-5 h-5 ml-2 mx-3" />
        <p className="mx-2 text-white">Main Page - {project?.title ? project.title : language === "es" ? "Nueva Busqueda" : "New Search" } - Microsoft Internet Explorer</p>
        <div className="flex mr-1">
        < div className="mr-[2px] size-6 rounded border shadow-white shadow-sm border-white bg-blue-700 flex item-center" ><img src={Minimize} onClick={toggleIE} /></div>
            <div className="mr-[2px] size-6 rounded border shadow-white shadow-sm border-white bg-blue-700 flex items-center justify-center" ><img className="size-5" src={Maximize} onClick={toggleIE} /></div>
            <div className="mr-[2px] size-6 rounded border shadow-white shadow-sm border-white bg-red-500 flex items-center justify-center hover:bg-red-700" onClick={toggleIE} ><img className="size-4" src={Close} /></div>
        </div>
          </div>
           {/* Barra edicion */}
          <div className="flex flex-row justify-start bg-gray-200 items-center text-black text-sm">
          <p className="p-1 mx-1 hover:border-b-2 hover: border-blue-700">{language ==="en" ? "File" :"Archivo"}</p>
          <p className="p-1 mx-1 hover:border-b-2 hover: border-blue-700">{language ==="en" ? "Edit" :"Editar"}</p>
          <p className="p-1 mx-1 hover:border-b-2 hover: border-blue-700">{language ==="en" ? "View" :"Ver"}</p>
          <p className="p-1 mx-1 hover:border-b-2 hover: border-blue-700">{language ==="en" ? "Favorites" :"Favoritos"}</p>
          <p className="p-1 mx-1 hover:border-b-2 hover: border-blue-700">{language ==="en" ? "Tools" :"Herramientas"}</p>
          <p className="p-1 mx-1 hover:border-b-2 hover: border-blue-700">{language ==="en" ? "Help" :"Ayuda"}</p>
        </div>
        {/* Barra de navegacion */}      
            <div className="flex flex-row justify-start bg-gray-200 items-center text-black text-sm">
                <div className="flex border-2 border-gray-300 items-center">
                <img src={Back} className="size-9 mx-2 " /><p className="mx-1">{language ==="en" ? "Back" :"Atras"}</p>
                <img src={Next} className="size-8 mx-2 " /><p className="mr-2 ml-1">{language ==="en" ? "Next" :"Siguiente"}</p>
                <img src={Page} className="size-8 bg-blue-100 mx-2 " />
                <img src={Refresh} className="size-8 mx-2 " />
                <img src={Home} className="size-8 mx-2 " />
                </div>
                <div className="flex border-2 border-gray-300 items-center">
                <img src={Search} className="size-9 mx-2 " /><p>{language ==="en" ? "Search" :"Buscar"}</p>
                <img src={Favorites} className="size-8 mx-2 " /><p>{language ==="en" ? "Favorites" :"Favoritos"}</p>
                <img src={History} className="size-8 mx-2 " /><p className="">{language ==="en" ? "History" :"Historial"}</p>
                <a href={url} target="_blank" className="flex mr-[30px] text-black hover:bg-blue-200 ml-3 items-center"><img src={OpenNew} className="size-7" />{language ==="en" ? "Open in Browser" :"Abrir en tu navegador"}</a>
                </div>
            </div>
            {/* Barra de navegacion */}
            <div className="flex flex-row justify-start bg-gray-200 items-center text-black text-sm">
                <p className="mx-2 p-1 text-gray-400">{language ==="en" ? "Address" :"Dirección"}</p>
                <img src={IE} className="size-4 mx-2 " />
                <input type="text" className="w-full h-5 mx-1 bg-white border border-gray-500 rounded p-3" value={url} />
                <img src={Next} className="size-6 ml-2" /><p className="mx-2">{language ==="en" ? "Go" :"Ir"}</p>
            </div>
            <div className="flex flex-1 justify-center">
                    <iframe className={`w-full h-[510px] border-4 ${url ? "" : "hidden"}`} src={url ? url : "https://portfolio-erick-pajares-projects.vercel.app/"} />
                    <p className={`text-white font-bold ${url ? "hidden" : ""}`} >{
                      language === "es" ? "No hay nada que mostrar, escriba una dirección y haga click en Go o seleccione un proyecto para cargar" : "There's nothing to show, write it down and click go or select a project to load"
                    }</p>
            </div>
        </div>
        
             
    </aside>
  );
};

export default InternetExplorer;
