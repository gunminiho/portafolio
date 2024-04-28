import Github from "../../../assets/mobile/github.svg";
import LinkedIn from "../../../assets/mobile/linkedin.svg";
import Resumen from "../../../assets/mobile/resumen.png";
import WorkExperience from "../../../assets/mobile/workexperience.png";
import Education from "../../../assets/mobile/education.png";
import TechSkills from "../../../assets/mobile/skills.png";
import Projects from "../../../assets/mobile/projects.png";
import Languages from "../../../assets/mobile/languages.png";
import References from "../../../assets/mobile/references.png";
import Settings from "../../../assets/mobile/settings.svg";
import Contact from "../../../assets/mobile/mail.svg";
import Safari from "../../../assets/mobile/safari.svg";
import iBooks from "../../../assets/mobile/ibooks.svg";
import CV from "../../../assets/mobile/personalinfo.png";
import Phone from "../../../assets/mobile/phone.svg";
import Whatsapp from "../../../assets/mobile/whatsapp.svg";
import Messages from "../../../assets/mobile/messages.svg";

const MobileLayout = () => {

  const getDay = () => {
    const date = new Date();
    const day = date.getDay();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[day];
  }

  console.log(getDay());

  const getDayNumber = () => {
    const date = new Date();
    const day = date.getDate();
    return day;
  }

  console.log(getDayNumber());

  return (
    <>
    <div id="home-screen" className="w-[237px] h-[522px] p-1 font-sans text-xs">
    <div id="home-apps" className="w-full h-[83%] grid grid-cols-3 align-center justify-center">
          <figure id="app1" className="bg-black size-14 flex flex-col m-auto rounded-xl">
            <img src={Github} alt="Github" className="size-full" />
            <figurecaption className="text-wite text-center">Github</figurecaption>
          </figure>
          <figure id="app2" className="bg-[#0288D1] size-[55px] flex flex-col m-auto rounded-xl">
            <img src={LinkedIn} alt="Github" className="size-full" />
            <figurecaption className="text-wite text-center">Github</figurecaption>
          </figure>
          <div id="app3" className="h-[55px] w-[57px] m-auto border bg-white rounded-xl">
            <div className="h-[53px] w-[55px] flex flex-col">
              <p className="text-black text-center text-[9px] text-red-600 font-bold">{getDay()}</p>
              <p className="text-black text-center h-full text-3xl">{getDayNumber()}</p>
            </div>
            <p className="h-[16px] w-[55px]">Calendario</p>
          </div>
          <figure id="app4" className="bg-gray-100 size-14 flex flex-col m-auto rounded-xl">
            <img src={Resumen} alt="Github" className="size-full" />
            <figurecaption className="text-wite text-center">Resumen</figurecaption>
          </figure>
          <figure id="app5" className="bg-gray-100 size-14 flex flex-col m-auto rounded-xl">
            <img src={WorkExperience} alt="Github" className="size-full" />
            <figurecaption className="text-wite text-center">Experiencia</figurecaption>
          </figure>
          <figure id="app6" className="bg-gray-100 size-14 flex flex-col m-auto rounded-xl">
            <img src={Education} alt="Github" className="size-full" />
            <figurecaption className="text-wite text-center">Educación</figurecaption>
          </figure>
          <figure id="app7" className="bg-gray-100 size-14 flex flex-col m-auto rounded-xl">
            <img src={TechSkills} alt="Github" className="size-full" />
            <figurecaption className="text-wite text-center">Tech Skills</figurecaption>
          </figure>
          <figure id="app8" className="bg-white size-14 flex flex-col m-auto rounded-xl">
            <img src={Projects} alt="Github" className="size-full" />
            <figurecaption className="text-wite text-center">Proyectos</figurecaption>
          </figure>
          <figure id="app9" className="bg-white size-14 flex flex-col m-auto rounded-xl">
            <img src={Languages} alt="Github" className="size-full" />
            <figurecaption className="text-wite text-center">Idiomas</figurecaption>
          </figure>
          <figure id="app10" className="bg-gray-200 size-14 flex flex-col items-center m-auto rounded-xl">
            <img src={References} alt="Github" className="size-14 rounded-3xl" />
            <figurecaption className="text-wite text-center">Referencias</figurecaption>
          </figure>
          <figure id="app11" className="bg-gray-400 size-14 flex flex-col m-auto rounded-xl">
            <img src={Settings} alt="Github" className="size-full" />
            <figurecaption className="text-wite text-center">Settings</figurecaption>
          </figure>
          <figure id="app12" className="bg-gray-200 size-14 flex flex-col m-auto rounded-xl">
            <img src={Contact} alt="Github" className="size-full " />
            <figurecaption className="text-wite text-center text-[11px]">Contactame!</figurecaption>
          </figure>
          <figure id="app13" className="bg-white size-14 flex flex-col m-auto rounded-xl">
            <img src={Safari} alt="Github" className="size-full" />
            <figurecaption className="text-wite text-center">Safari</figurecaption>
          </figure>
          <figure id="app14" className="bg-white size-14 flex flex-col m-auto rounded-xl">
            <img src={iBooks} alt="Github" className="size-full" />
            <figurecaption className="text-wite text-center">iBooks</figurecaption>
          </figure>
          <figure id="app15" className="bg-white size-14 flex flex-col m-auto rounded-xl">
            <img src={CV} alt="Github" className="size-full" />
            <figurecaption className="text-wite text-center text-[9px]">Descargar CV</figurecaption>
          </figure>
    </div>
    <div id="taskbar" className="border-2 w-full h-[14%] mt-3 rounded-3xl bg-gray-100">
    <div id="taskbar-apps" className="grid grid-cols-3 align-center justify-center h-full">
    <figure id="app1" className="bg-[#00dd00] size-12 flex flex-col m-auto rounded-xl ">
            <img src={Phone} alt="Github" className="size-full" />
          </figure>
          <figure id="app1" className="bg-[#00d900] size-12 flex flex-col m-auto rounded-xl">
            <img src={Whatsapp} alt="Github" className="size-full" />
          </figure>
          <figure id="app1" className="bg-[#00d900] size-12 flex flex-col m-auto rounded-xl">
            <img src={Messages} alt="Github" className="size-full" />
          </figure>
    </div>
    </div>
    </div>
    </>
  )
};

export default MobileLayout;