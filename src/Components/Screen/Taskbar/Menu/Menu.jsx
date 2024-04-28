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

const Menu = ({startMenu,setStartMenu, name, showText, setShowText, resume, setCurrentView, showWindow, setShowWindow, allProjects, setAllprojects}) => {

  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setStartMenu(false);
        setAllprojects(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuRef, setStartMenu, startMenu]);

  const setViewInfo = async (view) => {
    await setStartMenu(!startMenu);
    await setShowText(!showText);
    await setCurrentView({[view]:resume[view]});
  };

  const setWindow = async () => {
    await setStartMenu(!startMenu);
    await setShowWindow(!showWindow);
  };

  const handleAllProjects = async () => {
    await setAllprojects(!allProjects);
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
          <img src={Photo} className="size-14 border-2 border-white rounded-md mr-2" /><p className="content-center mr-auto">{name}</p><img src={LogOff} className="size-9 my-auto border-2 rounded-md bg-red-500 hover:bg-red-900" onClick={()=>setStartMenu(!startMenu)} />&nbsp;&nbsp;<p className="font-serif my-auto">Close</p>
        </div>
        <div className="flex flex-row">
          {/* DIV DE LA PRIMERA MITAD DEL MENU*/}
          <div className="py-3 px-2 bg-white text-black text-left w-1/2">
            <section className="flex flex-row mb-3 cursor-pointer">
              <div className="w-[fit-content]">
                <img src={Github} alt="Github" className="size-10" />
              </div>
              <div className="ml-2 w-[fit-content] leading-none">
                <a href="https://github.com/gunminiho" target="_blank" ><p className="mt-2 text-[14px] font-bold text-black" href="sad">Erick's Github</p></a>
                <a href="https://github.com/gunminiho" target="_blank"><p className="text-gray-500 text-[11px]">Repos & projects</p></a>
              </div>
            </section>
            <section className="flex flex-row mb-2 cursor-pointer border-b-2 border-gray-300">
              <div className="w-[fit-content]">
                <img src={Linkedin} alt="Github" className="size-10" />
              </div>
              <div className="ml-2 w-[fit-content] leading-none">
              <a href="https://www.linkedin.com/in/gunminiho/" target="_blank" ><p className="mt-2 text-[14px] font-bold text-black">Erick Pajares</p></a>
              <a href="https://www.linkedin.com/in/gunminiho/" target="_blank" ><p className="text-gray-500 text-[11px] mb-6 ">
                  LinkedIn Profile
                </p></a>
              </div>
            </section>
            <section>
              <section className="flex flex-row my-4 cursor-pointer">
                <div className="w-[fit-content]">
                  <img src={Contact} alt="Github" className="size-10" />
                </div>
                <div className="ml-2 w-[fit-content] leading-none" onClick={()=>{setViewInfo("contact_information");}}>
                  <p className="mt-2 text-[14px]">Contact Information</p>
                  <p className="text-gray-500 text-[10px] ">
                    Full name, mail, phone, etc
                  </p>
                </div>
              </section>
            </section>
            <section className="flex flex-row my-4 cursor-pointer">
              <div className="w-[fit-content]">
                <img src={FolderIcon} alt="Github" className="size-10" />
              </div>
              <div className="ml-2 w-[fit-content] leading-none" onClick={()=>{setViewInfo("professional_summary")}}>
                <p className="mt-2 text-[13px]">Professional Summary</p>
                <p className="text-gray-500 text-[9px] ">
                  About me & professional goals
                </p>
              </div>
            </section>
            <section className="flex flex-row my-4 cursor-pointer">
              <div className="w-[fit-content]">
                <img src={WorkExp} alt="Github" className="size-10" />
              </div>
              <div className="ml-2 w-[fit-content] leading-none " onClick={()=>{setViewInfo("work_experience")}}>
                <p className="mt-2 text-[14px]">Work Experience</p>
                <p className="text-gray-500 text-[10px] ">
                  Job title, company, dates, etc
                </p>
              </div>
            </section>
            <section className="flex flex-row my-4 cursor-pointer border-b-2 border-gray-300">
              <div className="w-[fit-content]">
                <img src={Education} alt="Github" className="size-10" />
              </div>
              <div className="ml-2 w-[fit-content] leading-none" onClick={()=>{setViewInfo("education")}}>
                <p className="mt-2 text-[14px]">Education</p>
                <p className="text-gray-500 text-[10px] mb-4 ">
                  Degree, school, dates, etc
                </p>
              </div>
            </section>
            <section className="flex flex-row justify-center">
              <button className="flex items-center" onClick={handleAllProjects}>
                <p className="text-sm ">All Projects</p>
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
                <p className="text-[11px]">Technical Skills</p>
                <p className="text-gray-500 text-[8px] ">
                  About my hard skills & soft
                </p>
              </div>
            </section>
            <section className="flex flex-row my-4 cursor-pointer">
              <div className="w-[fit-content]">
                <img src={Languages} alt="Github" className="size-7" />
              </div>
              <div className="ml-2 w-[fit-content] leading-none text-left font-bold" onClick={()=>{setViewInfo("languages")}}>
                <p className=" text-[11px]">Languages</p>
                <p className="text-gray-500 text-[9px] ">
                  Languages spoken & level
                </p>
              </div>
            </section>
            <section className="flex flex-row my-4 cursor-pointer border-b-2  border-gray-400">
              <div className="w-[fit-content]">
                <img src={References} alt="Github" className="size-7" />
              </div>
              <div className="ml-2 w-[fit-content] leading-none text-left font-bold" onClick={()=>{setViewInfo("references")}}>
                <p className=" text-[11px]">References</p>
                <p className="text-gray-500 text-[9px] mb-5 ">
                  Professional references
                </p>
              </div>
            </section>
            <section className="flex flex-row my-4 cursor-pointer">
              <div className="w-[fit-content]">
                <img src={ContactMe} alt="Github" className="size-7" />
              </div>
              <div className="ml-2 w-[fit-content] leading-none text-left font-bold" onClick={()=> setWindow()}>
                <p className=" text-[11px]">Contact me</p>
                <p className="text-gray-500 text-[9px] ">
                  Fill the form and email me!
                </p>
              </div>
            </section>
            <section className="flex flex-row my-4 cursor-pointer">
              <div className="w-[fit-content]">
                <img src={Resources} alt="Github" className="size-7" />
              </div>
              <div className="ml-2 w-[fit-content] leading-none text-left font-bold">
                <p className="text-[11px]">Resources</p>
                <p className="text-gray-500 text-[9px] ">
                  my resources for developing
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
