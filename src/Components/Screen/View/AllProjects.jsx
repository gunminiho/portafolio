import  Information from "../../../assets/information.png";
import  Business from "../../../assets/business.png";
import  Education from "../../../assets/report.png";
import Projects from "../../../assets/projects.json";
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setShowIE, setProject } from "../../../redux/windowsBool";

const AllProjects = () => {

    const [img, setImg] = useState({Information, Business, Education});
    const [projects, setProjects] = useState(Projects);

    const dispatch = useDispatch();
    
    const setMyProject = (project) => {
        dispatch(setProject(project));
        dispatch(setShowIE(true));
    };

    return (
        <aside  className="w-[fit-content] fixed bottom-14 left-40">
        <p className="w-full bg-gradient-to-br from-blue-800 to-blue-400 rounded-t-lg p-2">My projects</p>
        <div  id="mainContainer" className="bg-blue-100 border-2 border-blue-300 text-black p-2">
        {projects.map((project, index) => {
           
            return (
                <div key={index} className="flex items-center border-b-2 my-1 hover:bg-blue-200 hover:cursor-pointer"
                onClick={() => setMyProject(project)}
                >
                <img src={project.type === "self" ? Information : (project.type ==="challenge" ? Education : Business)} className="w-12 h-12" />
                <div className="mx-1 w-full">
                    <p className="text-xl">{project.title}</p>
                    <p className="text-xs">{project.description}</p>
                </div>
            </div>
            )
        })}
        <div className="border-b-2 hover:bg-blue-200 hover:cursor-pointer">
        <p className="text-xl  ml-1 w-full">Check all my projects<p className="text-xs">click here to watch'em on a bigger format</p></p>
        </div>
        </div>
        </aside>
    )
};

export default AllProjects;
