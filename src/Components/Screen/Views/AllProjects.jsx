import  Information from "../../../assets/information.png";
import  Business from "../../../assets/business.png";
import  Education from "../../../assets/report.png";
import MyProjects from "../../../assets/allprojects.ico";
import Projects from "../../../assets/projects.json";
import Proyectos from "../../../assets/proyectos.json";
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setShowIE, setProject, setShowFolder, setUrl } from "../../../redux/windowsBool";

const AllProjects = () => {

    const [img, setImg] = useState({Information, Business, Education});
    const [projects, setProjects] = useState(Projects);

    const dispatch = useDispatch();
    const {showFolder, language, } = useSelector((state) => state.windows);
    
    useEffect(() => {
        if(language === "es") setProjects(Proyectos);
        else setProjects(Projects);
    }, [language]);

    const setMyProject = (project) => {
        dispatch(setUrl(project?.deploy));
        //dispatch(setProject(project));
        dispatch(setShowIE(true));
    };

    const toggleFolder = () => {
        dispatch(setShowFolder(!showFolder));
    }

    return (
        <aside  className="w-[fit-content] fixed bottom-14 left-40">
        <p className="w-full bg-gradient-to-br from-blue-800 to-blue-400 rounded-t-lg p-2">{language==="" ? "Mis proyectos" : "My projects"}</p>
        <div  id="mainContainer" className="bg-blue-100 border-2 border-blue-300 text-black p-2">
        {projects.map((project, index) => {
            return (
                <div key={index} className="flex items-center border-b-2 my-1 hover:bg-blue-200 hover:cursor-pointer"
                onClick={() => setMyProject(project)}
                >
                <img src={project?.type === "self" ? Information : (project?.type ==="challenge" ? Education : Business)} className="w-12 h-12" />
                <div className="mx-1 w-full text-center">
                    <p className="text-xl">{project?.title}</p>
                    <p className="text-xs">{project?.description}</p>
                </div>
            </div>
            )
        })}
        <div className="border-b-2 hover:bg-blue-200 hover:cursor-pointer flex" onClick={toggleFolder}>
        <img src={MyProjects} className="size-12" />
        <p className="text-xl  ml-1 w-full text-center">{ language === "es" ? "Mira todos mis proyectos" : "Check all my projects"}<p className="text-xs">{language ==="es" ? "Click aqui para ver todos los proyectos en un solo lugar" :"Click here to watch'em on a bigger format"}</p></p>
        </div>
        </div>
        </aside>
    )
};

export default AllProjects;
