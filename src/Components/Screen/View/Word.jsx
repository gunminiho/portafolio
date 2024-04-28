import MicrosoftWord from "../../../assets/word.svg";
import Switch from "../../../assets/switch.svg";
import Minimize from "../../../assets/minimize.svg";
import Maximize from "../../../assets/maximize.svg";
import Close from "../../../assets/close.svg";
import Bullets from "../../../assets/bullets.svg";
import List from "../../../assets/list.svg";
import Delist from "../../../assets/delist.svg";
import Download from "../../../assets/download.svg";
import insertLineBreaks from "../../../Helpers/insertLineBreak";
import convertObject from "../../../Helpers/convertObject";
import Translation from "../../../assets/translation.json"
import { useState, useEffect } from "react";

const Word = ({ tittle, currentView,setCurrentView, showText, setShowText,language,setLanguage }) => {

  const [key,setKey] = useState(Object.keys(currentView));
  //console.log(currentView[key]);
  const [translation,setTranslation] = useState(Translation);
  useEffect(() => {

    return () => {
      setCurrentView();
    }
  }, []);

  return (
    <>
      <aside >
        <div id="header" className="w-1/2 min-w-[650px] mt-2 h-3/4 bg-gray-100 m-auto shadow-lg border">
          {/* primera fila de la ventana (logo + nombre documento) */}
          <div id="info" className=" mt-2 w-full text-black flex flex-row bg-gray-100 rounded-md justify-between items-center "> 
            <img src={MicrosoftWord} alt="Microsoft Word" className="size-6 mx-2" />
            <div id="nombre" className="flex flex-row">
              <p className="text-xs content-center">Autoguardado</p>
              <img src={Switch} className="size-6 ml-2" />
            </div>
            <p className="text-xs content-center w-[50%] font-bold">{tittle} - Word</p>
            <div id="nombre" className="flex flex-row ">
              <img src={Minimize} className="size-6 hover:bg-white ml-auto" />
              <img src={Maximize} className="size-6 hover:bg-white" />
              <img src={Close} className="size-6 hover:bg-red-600 mr-2" onClick={()=>setShowText(!showText)} />
            </div>
            {/* Aqui termina la primera linea del encabezado de word */}
          </div>
          {/* Aqui empieza la linea de archivo, editar, etc */}
          <div id="barraedicion" className="w-full text-black flex flex-row bg-gray-100  ">
          <p className="text-xs content-center mx-2 my-2 hover:border-b-2 hover: border-blue-800 ">Archivo</p>
          <p className="text-xs content-center mx-2 my-2 hover:border-b-2 hover: border-blue-800">Editar</p>
          <p className="text-xs content-center mx-2 my-2 hover:border-b-2 hover: border-blue-800">Ver</p>
          <p className="text-xs content-center mx-2 my-2 hover:border-b-2 hover: border-blue-800">Insertar</p>
          <p className="text-xs content-center mx-2 my-2 hover:border-b-2 hover: border-blue-800">Formato</p>
          <p className="text-xs content-center mx-2 my-2 hover:border-b-2 hover: border-blue-800">Herramientas</p>
          <p className="text-xs content-center mx-2 my-2 hover:border-b-2 hover: border-blue-800">Extensiones</p>
          <p className="text-xs content-center mx-2 my-2 hover:border-b-2 hover: border-blue-800">Ayuda</p>
          </div>
          <div id="editar" className="w-full text-black flex flex-row bg-white border rounded-lg my-1 justify-between lg:justify-around ">
          <select className="mx-1 my-1 text-xs h-5 bg-white border border-gray-500 rounded">
          <option value="1">{`Calibri (Cuerpo)`}</option>
          <option value="2">Comic Sans MS</option>
          <option value="3">Times New Roman</option>
          </select>
          <select className="mx-1 my-1 text-xs h-5 bg-white border border-gray-500 rounded">
          <option value="1">8</option>
          <option value="2">11</option>
          <option value="3">14</option>
          </select>
          <p className="mx-1 my-auto ">A<sup className="text-[10px] text-sky-500 font-bold">^</sup></p>
          <p className="mx-1 my-auto ">A<sup className="text-[10px] text-sky-500 font-bold">v</sup></p>
          <p className="mx-1 my-auto text-sm">Aa<sup className="text-[10px] text-sky-500 font-bold">v</sup></p>
          <img src={Bullets} className="size-5 mx-1 my-auto"/>
          <img src={List} className="size-5 mx-1 my-auto"/>
          <img src={Delist} className="size-5 mx-1 my-auto"/>
          <select className="mx-1 my-1 text-xs h-5 bg-white border border-gray-500 rounded" onChange={(e)=> setLanguage(e.target.value)}>
          <option value="none" disabled selected>{`Select  / Selecciona`}</option>
          <option value="en">English</option>
          <option value="es">Español</option>
          </select>
          <figure className="flex flex-row">
          <img src={Download} alt="Download" className="size-5 mx-1 my-auto cursor-pointer"/>
          <figcaption className="text-xs my-auto cursor-pointer mr-2">download resume</figcaption>
          </figure>
          </div>
        </div>
        {/* Aqui termina la barra de edicion */}
        <div className="border w-1/2 min-w-[650px] mx-auto max-h-fit bg-white shadow-xl text-black">----------------------------------</div>
        <div id="body" className="w-1/2 min-w-[650px] h-[600px] bg-white mx-auto shadow-xxl text-black border overflow-auto">
          {/* texto a mostrar */}
          <div className=" mx-5 my-4 border-2 border-gray-400 text-sm min-w-fit h-full">
          <pre className="mx-4 my-2 text-left text-xl font-bold">
          {language !== "none" && currentView ? translation[language][key] : "Select language / Selecciona un idioma"}
          </pre>
          <pre className={`mx-4 my-2 text-justify text-lg`}>
           {language !== "none" ? Array.isArray(currentView) || (typeof currentView[key] === "object" ) ? convertObject(currentView,language) : insertLineBreaks(currentView[key],50) : "...."}
          </pre>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Word;