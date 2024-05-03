import Github from "../../../../assets/github-logo.svg";
import Linkedin from "../../../../assets/LinkedIn.svg";
import Contact from "../../../../assets/contact.svg";
import Next from "../../../../assets/AllPrograms.svg";
import FolderIcon from "../../../../assets/MyProfileFolder.ico";
import WorkExp from "../../../../assets/Laptop.ico";
import Education from "../../../../assets/ListFile.ico";
import TechSkill from "../../../../assets/InternetProperties.ico";
import Languages from "../../../../assets/Earth.ico";
import References from "../../../../assets/Users.ico";
import ContactMe from "../../../../assets/Phone.ico";
import Resources from "../../../../assets/Server.ico";
import LogOff from "../../../../assets/logoff.svg";
import Photo from  "../../../../assets/selfie.png";
import { Transition } from "@headlessui/react";
import { useRef, useEffect } from 'react';
import { setStartMenu, setAllProjects, setShowText, setShowWindow, setShowResources } from "../../../../redux/windowsBool";
import { useSelector, useDispatch } from "react-redux";

const Menu = ({name, resume, setCurrentView}) => {

  const menuRef = useRef(null);
  const dispatch = useDispatch();
  const { startMenu, allProjects, showText, showWindow, language, showResources } = useSelector((state) => state.windows);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        dispatch(setStartMenu(false));
        dispatch(setAllProjects(false));
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuRef, setStartMenu, startMenu]);

  const setViewInfo = async (view) => {
    await setCurrentView({[view]:resume[view]});
    await dispatch(setStartMenu(!startMenu));
    await dispatch(setShowText(!showText));
  };

  const setWindow = async () => {
    await dispatch(setStartMenu(!startMenu));
    await dispatch(setShowWindow(!showWindow));
  };

  const setResources = async () => {
    await dispatch(setStartMenu(!startMenu));
    await dispatch(setShowResources(!showResources));
  };

  const handleAllProjects = async () => {
    await dispatch(setAllProjects(!allProjects));
  }

  return (
    <>
    <Transition
      show={startMenu}
      enter="transition-opacity ease-out duration-500"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity ease-in duration-500"
      leaveFrom="opacity-100"
      leaveTo="opacity-35">
      {() => (
        <div
          ref={menuRef} className=" fixed bottom-11 border-2 border-blue-600 h-auto w-[25rem] rounded-t-lg transition-opacity transition-transform" >
        <div className="bg-gradient-to-br from-blue-800 to-blue-400 p-4 flex items-left font-bold">
          <img src={Photo} className="size-14 border-2 border-white rounded-md mr-2" /><p className="text-tahoma content-center mr-auto">{name}</p><img src={LogOff} className=" size-9 my-auto border-2 rounded-md bg-red-500 hover:bg-red-900" onClick={()=>setStartMenu(!startMenu)} />&nbsp;&nbsp;<p className="text-tahoma my-auto">{language==="es" ? "Cerrar" : "Close"}</p>
        </div>
        <div className="flex flex-row">
          {/* DIV DE LA PRIMERA MITAD DEL MENU*/}
          <div className="py-3 px-2 bg-white text-black text-left w-1/2">
            <section className="flex flex-row mb-3 cursor-pointer">
              <div className="w-[fit-content]">
                <img src={Github} alt="Github" className="size-10" />
              </div>
              <div className="ml-2 w-[fit-content] leading-none">
                <a href="https://github.com/gunminiho" target="_blank" ><p className="mt-2 text-[14px] font-bold text-black" href="sad">{language==="es" ? "Github de Erick" : "Erick's Github"}</p></a>
                <a href="https://github.com/gunminiho" target="_blank"><p className="text-gray-500 text-[11px]">{language === "es" ? "Repositorio & Proyectos" : "Repos & projects"}</p></a>
              </div>
            </section>
            <section className="flex flex-row mb-2 cursor-pointer border-b-2 border-gray-300">
              <div className="w-[fit-content]">
                <img src={Linkedin} alt="Github" className="size-10" />
              </div>
              <div className="ml-2 w-[fit-content] leading-none">
              <a href="https://www.linkedin.com/in/gunminiho/" target="_blank" ><p className="mt-2 text-[14px] font-bold text-black">Erick Pajares</p></a>
              <a href="https://www.linkedin.com/in/gunminiho/" target="_blank" ><p className="text-gray-500 text-[11px] mb-6 ">
                  {language === "en" ? " LinkedIn Profile" : "Perfil de LinkedIn"}
                </p></a>
              </div>
            </section>
            <section>
              <section className="flex flex-row my-4 cursor-pointer">
                <div className="w-[fit-content]">
                  <img src={Contact} alt="Github" className="size-10" />
                </div>
                <div className="ml-2 w-[fit-content] leading-none" onClick={()=>{setViewInfo("contact_information");}}>
                  <p className="mt-2 text-[14px]">{language === "en" ? "Contact Information" : "Datos Personales"}</p>
                  <p className="text-gray-500 text-[10px] ">
                    {language === "es"? "Teléfono, correo, dirección, etc" : "Phone, email, address, etc"}
                  </p>
                </div>
              </section>
            </section>
            <section className="flex flex-row my-4 cursor-pointer">
              <div className="w-[fit-content]">
                <img src={FolderIcon} alt="Github" className="size-10" />
              </div>
              <div className="ml-2 w-[fit-content] leading-none" onClick={()=>{setViewInfo("professional_summary")}}>
                <p className="mt-2 text-[13px]">{language === "es" ? "Resumen Profesional" : "Professional Summary"}</p>
                <p className="text-gray-500 text-[9px] ">
                  {language === "es" ? "Sobre mi & logros profesionales" : "About me & professional goals"}
                </p>
              </div>
            </section>
            <section className="flex flex-row my-4 cursor-pointer">
              <div className="w-[fit-content]">
                <img src={WorkExp} alt="Github" className="size-10" />
              </div>
              <div className="ml-2 w-[fit-content] leading-none " onClick={()=>{setViewInfo("work_experience")}}>
                <p className="mt-2 text-[14px]">{language === "es" ? "Experiencia Laboral" : "Work Experience"}</p>
                <p className="text-gray-500 text-[10px] ">
                  {language === "es" ? "Cargo, empresa, fechas, etc" : "Job title, company, dates, etc"}
                </p>
              </div>
            </section>
            <section className="flex flex-row my-4 cursor-pointer border-b-2 border-gray-300">
              <div className="w-[fit-content]">
                <img src={Education} alt="Github" className="size-10" />
              </div>
              <div className="ml-2 w-[fit-content] leading-none" onClick={()=>{setViewInfo("education")}}>
                <p className="mt-2 text-[14px]">{language === "es" ? "Educación" :"Education"}</p>
                <p className="text-gray-500 text-[10px] mb-4 ">
                {language === "es" ? "Grado, Centro Estudios, fechas, etc." : "Degree, school, dates, etc."}
                </p>
              </div>
            </section>
            <section className="flex flex-row justify-center">
              <button className="flex items-center" onClick={handleAllProjects}>
                <p className="text-sm ">{language === "es" ? "Mis proyectos" :"My Projects"}</p>
                <img
                  src={Next}
                  alt="Next"
                  className="size-5 flex items-center"
                />
              </button>
            </section>
          </div>
          {/* DIV DE LA SEGUNDA MITAD DEL MENU*/}
          <div className="border-2 border-blue-300 bg-blue-200 w-1/2 text-blue-900 px-2 ">
            <section className="flex flex-row mb-4 mt-2 cursor-pointer font-bold items-center ">
              <div className="w-[fit-content] ">
                <img src={TechSkill} alt="Github" className="size-7" />
              </div>
              <div className="ml-2 w-[fit-content] leading-none text-left " onClick={()=>{setViewInfo("skills")}}>
                <p className="text-[11px]">{language === "es" ? "Habilidades & Tech" :"Technical Skills"}</p>
                <p className="text-gray-500 text-[9px] ">
                  {language === "es" ? "Sobre mis habilidades hard & soft" :"About my hard skills & soft"}
                </p>
              </div>
            </section>
            <section className="flex flex-row my-4 cursor-pointer">
              <div className="w-[fit-content]">
                <img src={Languages} alt="Github" className="size-7" />
              </div>
              <div className="ml-2 w-[fit-content] leading-none text-left font-bold" onClick={()=>{setViewInfo("languages")}}>
                <p className=" text-[11px]">{language === "es" ? "Idiomas" : "Languages"}</p>
                <p className="text-gray-500 text-[9px] ">
                  {language === "es" ? "Idiomas que manejo & nivel" : "Languages spoken & level"}
                </p>
              </div>
            </section>
            <section className="flex flex-row my-4 cursor-pointer border-b-2  border-gray-400">
              <div className="w-[fit-content]">
                <img src={References} alt="Github" className="size-7" />
              </div>
              <div className="ml-2 w-[fit-content] leading-none text-left font-bold" onClick={()=>{setViewInfo("references")}}>
                <p className=" text-[11px]">{language === "es" ? "Referencias" :"References"}</p>
                <p className="text-gray-500 text-[9px] mb-5 ">
                  {language === "es" ? "Referencias profesionales" : "Professional references"}
                </p>
              </div>
            </section>
            <section className="flex flex-row my-4 cursor-pointer">
              <div className="w-[fit-content]">
                <img src={ContactMe} alt="Github" className="size-7" />
              </div>
              <div className="ml-2 w-[fit-content] leading-none text-left font-bold" onClick={()=> setWindow()}>
                <p className=" text-[11px]">{language === "es" ? "Contactame!" :"Contact me"}</p>
                <p className="text-gray-500 text-[9px] pt-0.5 ">
                  {language === "es" ? "Enviame un mail usando el form" :"Fill the form and email me!"}
                </p>
              </div>
            </section>
            <section className="flex flex-row my-4 cursor-pointer">
              <div className="w-[fit-content]">
                <img src={Resources} alt="Github" className="size-7" />
              </div>
              <div className="ml-2 w-[fit-content] leading-none text-left font-bold" onClick={()=>setResources()}>
                <p className="text-[11px]">{language ==="es" ? "Recursos" :"Resources"}</p>
                <p className="text-gray-500 text-[9px] ">
                  {language === "es" ? "Mis recursos para programar" :"My resources for developing"}
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    )}
    </Transition>
    </>
  );
};

export default Menu;
