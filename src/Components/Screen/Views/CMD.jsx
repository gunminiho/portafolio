import Typist from 'react-typist';
import cmd from "../../../assets/cmd.png";
import Close from "../../../assets/close.svg";
import Minimize from "../../../assets/minimize.svg";
import Maximize from "../../../assets/maximize.svg";
import { useDispatch, useSelector } from "react-redux";
import { setStartUp, setTutorial } from "../../../redux/windowsBool";


const CMD = () => {

    const dispatch = useDispatch();
    const { startUp, language,tutorial } = useSelector((state) => state.windows);

    const toggleCMD = () => {
        dispatch(setStartUp(!startUp));
    }

    const toggleTutorial = () => {
        dispatch(setTutorial(!tutorial));
        toggleCMD();   
    }

    const message1 = language === "es" ? "Bienvenido a mi portafolio, mi nombre es Erick Pajares, desarrollador web full stack con inclinación al backend y aquí encontraras una variedad de información desde mis hobbies hasta mi CV." : "Welcome to my portfolio, my name is Erick Pajares, full stack web developer with a backend inclination and here you will find a variety of information from my hobbies to my CV.";  
    const message2 =  language === "es" ? "Clickea el botón 'paseo' para un breve paseo por el portafolio!" : "Click the 'tour' button for a brief tour of the portfolio!";

    return (
        <aside id="allscreen" className={`size-full flex items-center justify-center `} >
            <div id="exterior" className={`relative w-1/2 min-w-[420px] min-h-[450px] h-[60%]`} >
                <div id="topbar" className="border-4 flex items-center justify-between pl-1 w-full h-[45px] bg-gradient-to-r from-blue-800 to-sky-300">
                    <div className="flex items-center">
                        <img className="size-8" src={cmd} alt="cmd" />
                        <p className="pl-2 font-bold">C:\WINDOWS\system32\cmd.exe</p>
                    </div>
                    <div id="buttons" className="flex pr-2">
                    <img className="bg-gray-300 h-[25px] w-[20px] mx-0.5 border " src={Minimize} />
                    <img className="bg-gray-300 h-[25px] w-[20px] mx-0.5 border" src={Maximize} />
                    <img className="bg-gray-300 h-[25px] w-[20px] mx-0.5 border hover:bg-red-500" src={Close} onClick={toggleCMD} />
                    </div>
                </div>
                <div id="content" className="bg-black w-full h-[91%] border-4 text-lg overflow-y-auto">
                    <Typist avgTypingDelay={10} cursor={{ show: false }}>
                        <p className="p-2">{message1}</p>
                        <Typist.Delay ms={500} />
                        <p className="p-2 mb-5">{message2}<em className="animate-ping">|</em></p>
                    </Typist>
                    <div className="flex justify-center">
                    <button onClick={()=>toggleTutorial()} className="p-1 bg-gray-400 text-sm text-white rounded-md mx-2 shadow-md shadow-blue-200 hover:scale-105 ">{language ==="es" ? "Dar un paseo" : "Take a tour"}</button>
                    <button onClick={()=>toggleCMD()} className="p-1 bg-gray-400 text-sm text-white rounded-md mx-2 shadow-md shadow-blue-200 hover:scale-105 ">{language ==="es" ? "Cerrar & explorar" : "Close & explore"}</button>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default CMD;
