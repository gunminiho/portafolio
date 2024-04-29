import StartButton from "./Buttons/StartButton";
import StartUpSound from "../../../assets/windowsxp .mp3"
import Task1 from "../../../assets/task1.ico"
import Task2 from "../../../assets/task2.ico"
import Task3 from "../../../assets/task3.ico"
import Task4 from "../../../assets/task4.ico"
import { useEffect, useState } from "react";

const Taskbar = ({ setStartMenu, startMenu, language, width }) => {

    const [widthTaskbar, setWidthTaskbar] = useState("0");

    const getCurrentTime = () => {
        const date = new Date();
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    }

    const getTaskbarWidth = () => {
        if(width)
        return (width-(311+185)); // 311px is the width of the start button and 185px is the width of the taskbar
    }

    useEffect(() => {
        const widthTaskbar = getTaskbarWidth();
        setWidthTaskbar(widthTaskbar);
        console.log(widthTaskbar);
    }, [width])

    return (
        <div className="fixed flex bottom-0 left-0 h-[fit-content] bg-[#225BDA]">
            <div id="inicio" className="flex">
                <StartButton setStartMenu={setStartMenu} startMenu={startMenu} />
                <audio src={StartUpSound} autoPlay></audio>
                <span className="h-[42px] min-w-[fit-content] ml-2 pt-2">Language: {language !== "es" ? "english" : "español"}</span>
            </div>
                <div id="tareasactivas" className="fixed flex flex-row right-0 bottom-0 h-[44px] pt-2 pr-2 min-w-[150px] justify-end bg-sky-400 ">
                    <img src={Task1} className="h-6 w-6 mx-1" />
                    <img src={Task2} className="h-6 w-6 mx-1" />
                    <img src={Task3} className="h-6 w-6 mx-1" />
                    <img src={Task4} className="h-6 w-6 mx-1" />
                    <p className=" ml-2 text-white ">{getCurrentTime()}</p>
                </div>
                <div id="programas" className={`ml-2 flex items-center`} style={{width:widthTaskbar}}>
                    <div id="separador" className="h-auto grid grid-cols-2 gap-[1px] items-center mr-2">
                    <div className="size-1 border "></div>
                    <div className="size-1 border "></div>
                    <div className="size-1 border "></div>
                    <div className="size-1 border "></div>
                    <div className="size-1 border "></div>
                    <div className="size-1 border "></div>
                    <div className="size-1 border "></div>
                    <div className="size-1 border "></div>
                    <div className="size-1 border "></div>
                    <div className="size-1 border "></div>
                    <div className="size-1 border "></div>
                    <div className="size-1 border "></div>
                    <div className="size-1 border "></div>
                    <div className="size-1 border "></div>
                    </div>
                    
                </div>
            </div>
    )
};

export default Taskbar;

/* 
<div className=" ml-4 h-[42px] items-center">
                    <div className=" h-10 w-full bg-black">
                        A
                    </div>
*/

