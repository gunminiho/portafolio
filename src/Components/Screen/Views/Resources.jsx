import { setShowResources } from "../../../redux/windowsBool"
import { useDispatch, useSelector } from "react-redux"
import CloseIcon from "../../../assets/close.svg"
import { useState } from "react";
import Brave from "../../../assets/Desktop Icons/Herramientas/brave.svg";
import Chrome from "../../../assets/Desktop Icons/Herramientas/chrome.svg";
import Discord from "../../../assets/Desktop Icons/Herramientas/discord.svg";
import Linux from "../../../assets/Desktop Icons/Herramientas/linux.svg";
import MacOS from "../../../assets/Desktop Icons/Herramientas/macos.svg";
import Windows from "../../../assets/Desktop Icons/Herramientas/microsoftlogo.svg";
import Nginx from "../../../assets/Desktop Icons/Herramientas/nginx.svg";
import Postman from "../../../assets/Desktop Icons/Herramientas/postman.svg";
import Slack from "../../../assets/Desktop Icons/Herramientas/slack.svg";
import VScode from "../../../assets/Desktop Icons/Herramientas/VScode.svg";
import Bootstrap from "../../../assets/Desktop Icons/Tecnologias/bootstrap.svg";
import CSS from "../../../assets/Desktop Icons/Tecnologias/css.svg";
import Tailwind from "../../../assets/Desktop Icons/Tecnologias/tailwind.svg";
import Html5 from "../../../assets/Desktop Icons/Tecnologias/html5.svg";
import Express from "../../../assets/Desktop Icons/Tecnologias/expressjs.svg";
import MongoDB from "../../../assets/Desktop Icons/Tecnologias/mongodb.svg";
import Node from "../../../assets/Desktop Icons/Tecnologias/nodejs.svg";
import react from "../../../assets/Desktop Icons/Tecnologias/react.svg";
import Redux from "../../../assets/Desktop Icons/Tecnologias/redux.svg";
import PostgreSQL from "../../../assets/Desktop Icons/Tecnologias/postgresql.svg";
import Sequelize from "../../../assets/Desktop Icons/Tecnologias/sequelizejs.svg";
import Rails from "../../../assets/Desktop Icons/Tecnologias/rails.svg";
import Icons8 from "../../../assets/Desktop Icons/Recursos/icons8.svg";
import Manz from "../../../assets/Desktop Icons/Recursos/manz.png";
import svgRepo from "../../../assets/Desktop Icons/Recursos/svgrepo.svg";
import Javascript from "../../../assets/Desktop Icons/Tecnologias/javascript.svg";
import MiduDev from "../../../assets/Desktop Icons/Recursos/mudidev.png";
import Svelte from "../../../assets/Desktop Icons/Tecnologias/svelte.svg";
import Git from "../../../assets/Desktop Icons/Herramientas/Git.svg";
import Github from "../../../assets/Desktop Icons/Herramientas/github.svg";
import Typescript from "../../../assets/Desktop Icons/Tecnologias/typescript.svg";


const Resources = ({ height }) => {

    const { language, showResources } = useSelector((state) => state.windows);
    const dispatch = useDispatch();
    const toggleShowResources = () => {
        dispatch(setShowResources(!showResources));
    };
    const [currentTab, setCurrentTab] = useState(1);

    return (
        <aside id="screen" className="relative border size-full flex items-center justify-center">
            <div id="resourceswindow" className="w-[40%] min-w-[600px] h-[60%] border-2 border-blue-700 rounded-t-lg">
                <div id="header" className="flex items-center pl-2 w-full min-h-[7%] bg-blue-700">
                    <p className="font-bold flex-1 ">{language === "es" ? "Mis Recursos de programación" : "My resources for coding!"}</p>
                    <div className=" flex items-center justify-end">
                        <p className="text-[20px] font-bold border size-7 flex items-center justify-center">?</p>
                        <img src={CloseIcon} className="size-7 border mx-0.5 bg-red-500 hover:cursor-pointer hover:bg-red-400" onClick={toggleShowResources} />
                    </div>
                </div>
                <div id="content" className="bg-gray-200 w-full h-[93%]">
                    <div id="tabs" className="flex items-end w-full h-[10%] min-h-[fit-content] mx-5">
                        <nav className="h-[fit-content] flex items-end">
                            <ul className=" relative top-[3px] flex items-center justify-start text-black h-[fit-content] rounded-t pt-1 pb-0.5">
                                <li onClick={() => setCurrentTab(1)} className={`${height < 500 ? "text-xs" : "text-sm"} px-1 border-gray-500 rounded-t border-t border-l border-r hover:cursor-pointer ${currentTab === 1 ? "bg-white" : ""} `}>{language === "es" ? "Herramientas" : "Work Tools"}</li>
                                <li onClick={() => setCurrentTab(2)} className={`${height < 500 ? "text-xs" : "text-sm"} px-1 border-gray-500 rounded-t border-t border-l border-r hover:cursor-pointer ${currentTab === 2 ? "bg-white" : ""} `}>{language === "es" ? "Recursos de programacion" : "Programming Resources"}</li>
                                <li onClick={() => setCurrentTab(3)} className={`${height < 500 ? "text-xs" : "text-sm"} px-1 border-gray-500 rounded-t border-t border-l border-r hover:cursor-pointer ${currentTab === 3 ? "bg-white" : ""} `}>{language === "es" ? "Literatura de apoyo" : "Supplemental Materials"}</li>
                                <li onClick={() => setCurrentTab(4)} className={`${height < 500 ? "text-xs" : "text-sm"} px-1 border-gray-500 rounded-t border-t border-l border-r hover:cursor-pointer ${currentTab === 4 ? "bg-white" : ""} `}>{language === "es" ? "Tecnologias en aprendizaje" : "Learning Technologies"}</li>
                            </ul>
                        </nav>
                    </div>
                    <div id="tabcontent" className="w-[95%] min-w-[574px] h-[90%] bg-white mx-5 mb-5 border-gray-500 border-l border-b border-r border-t text-black">
                        {/* Iconos de herramientras para programar */}
                        {currentTab === 1 && <div className="w-full h-full flex flex-col items-center justify-center">
                            <p className="text-sm pt-3">{language === "es" ? "Herramientas que uso para programar, investigar o acceder a espacios de trabajo grupales" : "Tools I use for programming, researching, or accessing group workspaces"}</p>
                            <div className="mt-1 size-full grid grid-cols-5 items-center justify-items-center">
                                {/* Iconos de herramientras para programar */}
                                <figure className="hover:bg-gray-100 hover:text-black">
                                    <img src={Chrome} className="size-10 mx-auto" />
                                    <figcaption className="text-center">Google Chrome</figcaption>
                                </figure>
                                <figure className="hover:bg-gray-100 hover:text-black">
                                    <img src={Brave} className="size-10 mx-auto" />
                                    <figcaption className="text-center">Brave</figcaption>
                                </figure>
                                <figure className="hover:bg-gray-100 hover:text-black">
                                    <img src={Windows} className="size-10 mx-auto" />
                                    <figcaption className="text-center">Windows 11</figcaption>
                                </figure>
                                <figure className="hover:bg-gray-100 hover:text-black">
                                    <img src={Linux} className="size-10 mx-auto" />
                                    <figcaption className="text-center">Linux</figcaption>
                                </figure>
                                <figure className="hover:bg-gray-100 hover:text-black">
                                    <img src={MacOS} className="size-10 mx-auto" />
                                    <figcaption className="text-center">MacOS</figcaption>
                                </figure>
                                <figure className="hover:bg-gray-100 hover:text-black">
                                    <img src={VScode} className="size-10 mx-auto" />
                                    <figcaption className="text-center">Visual Studio Code</figcaption>
                                </figure>
                                <figure className="hover:bg-gray-100 hover:text-black">
                                    <img src={Git} className="size-10 mx-auto" />
                                    <figcaption className="text-center">Git</figcaption>
                                </figure>
                                <figure className="hover:bg-gray-100 hover:text-black">
                                    <img src={Github} className="size-10 mx-auto" />
                                    <figcaption className="text-center">Github</figcaption>
                                </figure>
                                <figure className="hover:bg-gray-100 hover:text-black">
                                    <img src={Postman} className="size-10 mx-auto" />
                                    <figcaption className="text-center">Postman</figcaption>
                                </figure>
                                <figure className="hover:bg-gray-100 hover:text-black">
                                    <img src={Slack} className="size-10 mx-auto" />
                                    <figcaption className="text-center">Slack</figcaption>
                                </figure>
                                <figure className="hover:bg-gray-100 hover:text-black">
                                    <img src={Discord} className="size-10 mx-auto" />
                                    <figcaption className="text-center">Discord</figcaption>
                                </figure>
                                <figure className="hover:bg-gray-100 hover:text-black">
                                    <img src={Nginx} className="size-10 mx-auto" />
                                    <figcaption className="text-center">Nginx</figcaption>
                                </figure>
                            </div>
                        </div>}
                        {/* Iconos de recursos de programacion */}
                        {currentTab === 2 && <div className="w-full h-full flex flex-col items-center justify-center">
                            <p className=" pt-3">{language === "es" ? "Recursos que utilizo cuando necesito resolver alguna situación particular" : "Resources I use when I need to solve a particular situation"}</p>
                            <div className="mt-1 size-full grid grid-cols-5 items-center justify-items-center">

                                <figure className="hover:bg-gray-100 hover:text-black">
                                    <img src={Javascript} className="size-10 mx-auto" />
                                    <figcaption className="text-center">Javascript</figcaption>
                                </figure>
                                <figure className="hover:bg-gray-100 hover:text-black">
                                    <img src={Html5} className="size-10 mx-auto" />
                                    <figcaption className="text-center">Html5</figcaption>
                                </figure>
                                <figure className="hover:bg-gray-100 hover:text-black">
                                    <img src={CSS} className="size-10 mx-auto" />
                                    <figcaption className="text-center">CSS3</figcaption>
                                </figure>
                                <figure className="hover:bg-gray-100 hover:text-black">
                                    <img src={Node} className="size-10 mx-auto" />
                                    <figcaption className="text-center">NodeJS</figcaption>
                                </figure>
                                <figure className="hover:bg-gray-100 hover:text-black">
                                    <img src={react} className="size-10 mx-auto" />
                                    <figcaption className="text-center">React</figcaption>
                                </figure>
                                <figure className="hover:bg-gray-100 hover:text-black">
                                    <img src={Redux} className="size-10 mx-auto" />
                                    <figcaption className="text-center">Redux toolkit</figcaption>
                                </figure>
                                <figure className="hover:bg-gray-100 hover:text-black">
                                    <img src={Sequelize} className="size-10 mx-auto" />
                                    <figcaption className="text-center">Sequelize</figcaption>
                                </figure>
                                <figure className="hover:bg-gray-100 hover:text-black">
                                    <img src={PostgreSQL} className="size-10 mx-auto" />
                                    <figcaption className="text-center">PostgreSQL</figcaption>
                                </figure>
                                <figure className="hover:bg-gray-100 hover:text-black">
                                    <img src={MongoDB} className="size-10 mx-auto" />
                                    <figcaption className="text-center">MongoDB</figcaption>
                                </figure>
                                <figure className="hover:bg-gray-100 hover:text-black">
                                    <img src={Express} className="size-10 mx-auto" />
                                    <figcaption className="text-center">ExpressJS</figcaption>
                                </figure>
                                <figure className="hover:bg-gray-100 hover:text-black">
                                    <img src={Bootstrap} className="size-10 mx-auto" />
                                    <figcaption className="text-center">Bootstrap</figcaption>
                                </figure>
                                <figure className="hover:bg-gray-100 hover:text-black">
                                    <img src={Tailwind} className="size-10 mx-auto" />
                                    <figcaption className="text-center">TailwindCSS</figcaption>
                                </figure>
                                <figure className="hover:bg-gray-100 hover:text-black">
                                    <img src={Rails} className="size-10 mx-auto" />
                                    <figcaption className="text-center">Ruby On Rails</figcaption>
                                </figure>
                            </div>
                        </div>}
                        {/* Iconos de Literatura de apoyo */}
                        {currentTab === 3 && <div className="w-full h-full flex flex-col items-center justify-center">
                            <p className=" pt-3">{language === "es" ? "Páginas, Creadores de contenido web y otros recursos de información" : "Web pages, content creators, and other information resources"}</p>
                            <div className="mt-1 size-full grid grid-cols-5 items-center justify-items-center">
                                <figure className="hover:bg-gray-100 hover:text-black">
                                    <img src={Manz} className="size-10 mx-auto" />
                                    <figcaption className="text-center"><a href="https://lenguajehtml.com/html/" className="text-black hover:cursor-pointer" target="_blank">Manz: {language === "es" ? "creador de contenido / programador" : "content creator / programmer"}</a></figcaption>
                                </figure>
                                <figure className="hover:bg-gray-100 hover:text-black">
                                    <img src={Icons8} className="size-10 mx-auto" />
                                    <figcaption className="text-center"><a href="https://icons8.com/icons" className="text-black hover:cursor-pointer" target="_blank">Icons8 : SVGs</a></figcaption>
                                </figure>
                                <figure className="hover:bg-gray-100 hover:text-black">
                                    <img src={svgRepo} className="size-10 mx-auto" />
                                    <figcaption className="text-center"><a href="https://www.svgrepo.com/" className="text-black hover:cursor-pointer" target="_blank">SVG Repo : SVGs</a></figcaption>
                                </figure>
                                <figure className="hover:bg-gray-100 hover:text-black">
                                    <img src={MiduDev} className="bg-gray-300" />
                                    <figcaption className="text-center"><a href="https://midu.dev/" className="text-black hover:cursor-pointer" target="_blank">Midudev : {language === "es" ? "creador de contenido / programador" : "content creator / programmer"}</a></figcaption>
                                </figure>
                            </div>
                        </div>}
                        {/* Iconos de tecnologias en aprendizaje */}
                        {currentTab === 4 && <div className="w-full h-full flex flex-col items-center justify-center">
                        <p className="pt-3">{language === "es" ? "Tecnologías que estoy practicando hasta dominarlas!" : "Technologies I'm practicing to master!"}</p>
                            <div className="mt-1 size-full grid grid-cols-5 items-center justify-items-center">
                                <figure className="hover:bg-gray-100 hover:text-black">
                                    <img src={Svelte} className="size-10 mx-auto" />
                                    <figcaption className="text-center">Svelte</figcaption>
                                </figure>
                                <figure className="hover:bg-gray-100 hover:text-black">
                                    <img src={Typescript} className="size-10 mx-auto" />
                                    <figcaption className="text-center">Typescript</figcaption>
                                </figure>
                                <figure className="hover:bg-gray-100 hover:text-black">
                                    <img src={MongoDB} className="size-10 mx-auto" />
                                    <figcaption className="text-center">MongoDB</figcaption>
                                </figure>
                                <figure className="hover:bg-gray-100 hover:text-black">
                                    <img src={Rails} className="size-10 mx-auto" />
                                    <figcaption className="text-center">Ruby On Rails</figcaption>
                                </figure>
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Resources