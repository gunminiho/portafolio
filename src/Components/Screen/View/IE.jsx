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
import { useState } from "react";

const InternetExplorer = ({ project, showIE, setShowIE }) => {

    const [url, setUrl] = useState(project?.deploy);
   
  return (
    <aside className="relative flex justify-center items-center w-[fit-content] h-screen mx-auto">
      {/* Marco total */}
      <div className="border min-w-[680px] w-[fit-content] min-h-1/2 h-[650px] mx-auto bg-gray-800 border-4 border-blue-700 rounded-md shadow-md border">
        {/* Primera línea del encabezado */}
        <div className="flex h-[35px] w-full bg-blue-700 justify-between items-center shadow-md shadow-white">
        <img src={IE} alt="Internet Explorer" className="w-5 h-5 ml-2 mx-3" />
        <p className="mx-2 text-white">Main Page - {project?.title ? project?.title : ""} - Microsoft Internet Explorer</p>
        <div className="flex mr-1">
        < div className="mr-[2px] size-6 rounded border shadow-white shadow-sm border-white bg-blue-700 flex item-center" ><img src={Minimize} /></div>
            <div className="mr-[2px] size-6 rounded border shadow-white shadow-sm border-white bg-blue-700 flex items-center justify-center" ><img className="size-5" src={Maximize} /></div>
            <div className="mr-[2px] size-6 rounded border shadow-white shadow-sm border-white bg-red-500 flex items-center justify-center hover:bg-red-700" onClick={()=>{setShowIE(!showIE)}} ><img className="size-4" src={Close} /></div>
        </div>
          </div>
           {/* Barra edicion */}
          <div className="flex flex-row justify-start bg-gray-200 items-center text-black text-sm">
          <p className="p-1 mx-1 hover:border-b-2 hover: border-blue-700">Archivo</p>
          <p className="p-1 mx-1 hover:border-b-2 hover: border-blue-700">Editar</p>
          <p className="p-1 mx-1 hover:border-b-2 hover: border-blue-700">Ver</p>
          <p className="p-1 mx-1 hover:border-b-2 hover: border-blue-700">Favoritos</p>
          <p className="p-1 mx-1 hover:border-b-2 hover: border-blue-700">Herramientas</p>
          <p className="p-1 mx-1 hover:border-b-2 hover: border-blue-700">Ayuda</p>
        </div>
        {/* Barra de navegacion */}      
            <div className="flex flex-row justify-start bg-gray-200 items-center text-black text-sm">
                <div className="flex border-2 border-gray-300 items-center">
                <img src={Back} className="size-9 mx-2 " /><p className="mx-1">Back</p>
                <img src={Next} className="size-8 mx-2 " /><p className="mr-2 ml-1">Next</p>
                <img src={Page} className="size-8 bg-blue-100 mx-2 " />
                <img src={Refresh} className="size-8 mx-2 " />
                <img src={Home} className="size-8 mx-2 " />
                </div>
                <div className="flex border-2 border-gray-300 items-center">
                <img src={Search} className="size-9 mx-2 " /><p>Search</p>
                <img src={Favorites} className="size-8 mx-2 " /><p>Favorites</p>
                <img src={History} className="size-8 mx-2 " /><p className="">History</p>
                <a href={url} target="_blank" className="flex mr-[30px] text-black hover:bg-blue-200 ml-3 items-center"><img src={OpenNew} className="size-7" />Open in browser</a>
                </div>
            </div>
            {/* Barra de navegacion */}
            <div className="flex flex-row justify-start bg-gray-200 items-center text-black text-sm">
                <p className="mx-2 p-1 text-gray-400">Address</p>
                <img src={IE} className="size-4 mx-2 " />
                <input type="text" className="w-full h-5 mx-1 bg-white border border-gray-500 rounded p-3" disabled value={url} />
                <img src={Next} className="size-6 ml-2" /><p className="mx-2">Go</p>
            </div>
            <div className="flex flex-1">
                    <iframe className="w-full h-[510px] border-4" src={url} />
            </div>
        </div>
        
             
    </aside>
  );
};

export default InternetExplorer;
