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
import CV from "../../../assets/Files/resume-es.pdf";
import Resume from "../../../assets/Files/resume-en.pdf";
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage, setShowText } from "../../../redux/windowsBool";


const Word = ({ currentView }) => {

  const dispatch = useDispatch();
  const { language, showText } = useSelector((state) => state.windows);

  const [translation, setTranslation] = useState(Translation);
  const [key, setKey] = useState(undefined);
  const [textSize, setTextSize] = useState("sm");
  const [fontText, setFontText] = useState("font-tahoma");
  const wordRef = useRef(null);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = language === "es" ? CV : Resume;
    link.download = 'resume.pdf';
    link.click();
  };

  useEffect(() => {
    currentView ? setKey(Object.keys(currentView)) : "";
    const handleClickOutside = (event) => {
      if (wordRef.current && !wordRef.current.contains(event.target)) {
        dispatch(setShowText(false));
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);

  const toggleLanguage = (e) => {
    dispatch(setLanguage(e.target.value));
  };

  const toggleWord = () => {
    dispatch(setShowText(!showText));
  };
  const toggleTextSize = (e) => {
    setTextSize(e.target.value);
  };
  const toggleFontText = (e) => {

    setFontText(e.target.value);
  };

  const convertEducationObjectToText = (currentView) => {
    if (!currentView || !key) return language === "en" ? "Select something to see in menu" : "Seleccione algo para ver en el menu";
    
    if (Array.isArray(currentView[key]) && currentView[key].length > 0) {
      return currentView[key].map((item, index) => (
        <ul className="list-disc" key={index}>
          {Object.keys(item).map((property, i) => (
            <li className={i === 0 ? "text-xl ml-3" : "ml-8"} key={i}>
              {translation[language][property]}: {Array.isArray(item[property]) ? item[property].map((elem, j) => <p className="ml-2" key={j}>{elem}</p>) : item[property]}
            </li>
          ))}
          {index !== currentView[key].length - 1 && <hr className="my-2 border-gray-500" />}
        </ul>
      ));
    } else if (typeof currentView[key] === "object" && currentView[key] !== null) {
      
      return Object.keys(currentView[key]).map((property, index) => (
        <ul className="list-disc" key={index}>
          <li className="ml-3 text-xl">
            {translation[language][property]}:</li>
          {Array.isArray(currentView[key][property])
            ? currentView[key][property].map((elem, j) =>
              <li className="ml-8 " key={j}>{elem}</li>)
            : <li className="ml-8">{currentView[key][property]}</li> 
          }

          {index !== Object.keys(currentView[key]).length - 1 && <hr className="my-2 border-gray-500" />}
        </ul>
      ));
    }
    return (
      <ul className="list-disc">
        <li className="text-xl ml-3 mb-2">{translation[language][key]}</li>
        <li className="ml-6 list-none mb-4">{currentView[key]}</li>
        <hr className="my-2 border-gray-500" />
      </ul>
     
    );
      
  };



  return (
    <>
      <div className="size-full flex justify-center items-center">
        <aside ref={wordRef} className={`relative flex flex-col ${!showText ? "hidden" : ""}`}  >
          <div id="header" className="w-1/2 min-w-[650px] h-3/4 bg-gray-100 shadow-lg border">
            {/* primera fila de la ventana (logo + nombre documento) */}
            <div id="info" className=" mt-2 w-full text-black flex flex-row bg-gray-100 rounded-md justify-between items-center ">
              <img src={MicrosoftWord} alt="Microsoft Word" className="size-6 mx-2" />
              <div id="nombre" className="flex flex-row">
                <p className="text-xs content-center">{language === "es" ? "Autoguardado" : "Autosave"}</p>
                <img src={Switch} className="size-6 ml-2" />
              </div>
              <p className="text-lg text-tahoma content-center w-[50%] font-bold">{currentView ? translation[language][key] : (language === "es" ? "Nuevo Documento" : "New Document")} - Word</p>
              <div id="nombre" className="flex flex-row ">
                <img src={Minimize} className="size-6 hover:bg-white ml-auto" onClick={toggleWord} />
                <img src={Maximize} className="size-6 hover:bg-white" />
                <img src={Close} className="size-6 hover:bg-red-600 mr-2" onClick={toggleWord} />
              </div>
              {/* Aqui termina la primera linea del encabezado de word */}
            </div>
            {/* Aqui empieza la linea de archivo, editar, etc */}
            <div id="barraedicion" className="w-full h-[32px] text-black flex flex-row bg-gray-100 ">
              <p className="text-sm content-center mx-2 my-2 hover:border-b-2 hover: border-blue-800 ">Archivo</p>
              <p className="text-sm content-center mx-2 my-2 hover:border-b-2 hover: border-blue-800">Editar</p>
              <p className="text-sm content-center mx-2 my-2 hover:border-b-2 hover: border-blue-800">Ver</p>
              <p className="text-sm content-center mx-2 my-2 hover:border-b-2 hover: border-blue-800">Insertar</p>
              <p className="text-sm content-center mx-2 my-2 hover:border-b-2 hover: border-blue-800">Formato</p>
              <p className="text-sm content-center mx-2 my-2 hover:border-b-2 hover: border-blue-800">Herramientas</p>
              <p className="text-sm content-center mx-2 my-2 hover:border-b-2 hover: border-blue-800">Extensiones</p>
              <p className="text-sm content-center mx-2 my-2 hover:border-b-2 hover: border-blue-800">Ayuda</p>
            </div>
            <div id="editar" className="w-full text-black flex flex-row bg-white border rounded-lg my-1 justify-between lg:justify-around ">
              <select className="mx-1 my-1 text-xs h-5 bg-white border border-gray-500 rounded" onChange={toggleFontText}>
                <option value="font-tahoma">Tahoma</option>
                <option value="font-victormono">Victor Mono</option>
                <option value="font-serif">San Serif</option>
              </select>
              <select className="mx-1 my-1 text-xs h-5 bg-white border border-gray-500 rounded" onChange={toggleTextSize}>
                <option value="sm">15</option>
                <option value="md">20</option>
                <option value="lg">30</option>
              </select>
              <p className="mx-1 my-auto ">A<sup className="text-[10px] text-sky-500 font-bold">^</sup></p>
              <p className="mx-1 my-auto ">A<sup className="text-[10px] text-sky-500 font-bold">v</sup></p>
              <p className="mx-1 my-auto text-sm">Aa<sup className="text-[10px] text-sky-500 font-bold">v</sup></p>
              <img src={Bullets} className="size-5 mx-1 my-auto" />
              <img src={List} className="size-5 mx-1 my-auto" />
              <img src={Delist} className="size-5 mx-1 my-auto" />
              <select className="mx-1 my-1 text-xs h-5 bg-white border border-gray-500 rounded" onChange={toggleLanguage} defaultValue={language}>
                <option value="none" disabled selected>{language === "es" ? "Selecciona" : "Select"}</option>
                <option value="en">English</option>
                <option value="es">Español</option>
              </select>
              <figure className="flex flex-row" onClick={handleDownload}>
                <img src={Download} alt="Download" className="size-5 mx-1 my-auto cursor-pointer" />
                <figcaption className="text-xs my-auto cursor-pointer mr-2">{language === "es" ? "Descarga CV" : "Download Resume"}</figcaption>
              </figure>
            </div>
          </div>
          {/* Aqui termina la barra de edicion */}
          <div id="body" className=" w-[650px] h-[500px] bg-white mx-auto shadow-xxl text-black border">
            {/* texto a mostrar */}
            <div id="text" className=" mx-5 my-4 border border-gray-400 text-md  max-w-1/2 h-[93%] overflow-x-auto">
              <p className={`mx-4 my-2 text-tahoma text-justify ${fontText} text-${textSize}`}>
                {convertEducationObjectToText(currentView)}
              </p>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Word;

/*
{ typeof currentView === "object" ? Array.isArray(currentView) || (typeof currentView[key] === "object" ) ? convertObject(currentView,language) : insertLineBreaks(currentView[key],50) : "Select something to see in menu / Seleccione algo para ver en el menu "}
fixed top-[9%] left-[12%] lg:top-[10%] lg:left-[22%] xl:top-[11%] xl:left-[26%]
{translation[language][key]}
{ typeof currentView === "object" ? Array.isArray(currentView) || (typeof currentView[key] === "object" ) ? convertObject(currentView,language) : insertLineBreaks(currentView[key],50) : "Select something to see in menu / Seleccione algo para ver en el menu "}
          
*/