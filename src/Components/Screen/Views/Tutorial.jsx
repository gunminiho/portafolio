import ClippyLeft from "../../../assets/clippyleft.gif";
import ClippyNext from "../../../assets/clippynext.svg";
import ClippyDown from "../../../assets/clippydown.gif";
import ClippyBye from "../../../assets/clippybye.gif";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTutorial } from "../../../redux/windowsBool";

const Tutorial = () => {

    const [message1, setMessage1] = useState(true);
    const [message2, setMessage2] = useState(false);
    const [message3, setMessage3] = useState(false);
    const [message4, setMessage4] = useState(false);
    const [message5, setMessage5] = useState(false);

    const dispatch = useDispatch();
    const { tutorial, language } = useSelector((state) => state.windows);

    const message1Text = language === "es" ? "En esta sección puedes encontrar mi CV, las características de mi PC y Mi conexión a internet" : "In this section you can find my Resume, my PC's spec and My internet connection";
    const message2Text = language === "es" ? "Si estas con algo de nostalgia puedes recordar los clásicos juegos de WinXP y otros mas!" : "If you are feeling nostalgic you can play the classic WinXP games and more!";
    const message3Text = language === "es" ? "En el Menu principal 'Erick Pajares' puedes encontrar todo el detalle sobre mi y enlaces a mis redes" : "In the main menu 'Erick Pajares' you can find all the details about me and links to my social media";
    const message4Text = language === "es" ? " Usa el formulario para enviarme un correo, abre ultima ventana de información sobre mi y el navegador" : "Use the form to send me an email, open the last window of information about me and the browser";
    const message5Text = language === "es" ? " Puedes empezar a navegar por donde gustes, que tengas un feliz dia!" : "You can start browsing wherever you want, have a nice day!";

    const handleNext = () => {
        setMessage1(false);
        setMessage2(true);
    };
    const handleNext2 = () => {
        setMessage2(false);
        setMessage3(true);
    }
    const handleNext3 = () => {
        setMessage3(false);
        setMessage4(true);
    }
    const handleNext4 = () => {
        setMessage4(false);
        setMessage5(true);
    }
    const handleNext5 = () => {
        setMessage5(false);
        dispatch(setTutorial(!tutorial));
    }

    return (
        <aside className="size-full flex items-center justify-center ">
            <div id="message1" className={`fixed top-2 left-[80px] w-[250px] h-[fit-content] flex flex-row ${message1 ? "" : "hidden"} `}>
                <img src={ClippyLeft} className="h-[120px] w-[120px] my-auto" />
                <div className="border bg-[#F6EECC] rounded-xl flex flex-col items-center ">
                    <p className="text-black text-center text-sm px-2">{message1Text}</p>
                    <button className="text-black border border-black shadow-sm shadow-black rounded-md p-1 m-1" onClick={() => handleNext()}><img src={ClippyNext} className="size-5 shadow-xl" /></button>
                </div>
            </div>
            <div id="message2" className={`fixed top-[250px] left-[80px] w-[250px] h-[fit-content] flex flex-row ${message2 ? "" : "hidden"}`}>
                <img src={ClippyLeft} className="h-[120px] w-[120px] my-auto" />
                <div className="border bg-[#F6EECC] rounded-xl flex flex-col items-center ">
                    <p className="text-black text-center text-sm px-2">{message2Text}</p>
                    <button className="text-black border border-black shadow-sm shadow-black rounded-md p-1 m-1" onClick={() => handleNext2()}><img src={ClippyNext} className="size-5 shadow-xl" /></button>
                </div>
            </div>
            <div id="message3" className={`fixed bottom-[55px] left-[80px] w-[250px] h-[fit-content] flex flex-row ${message3 ? "" : "hidden"}`}>
                <img src={ClippyDown} className="h-[120px] w-[120px] my-auto" />
                <div className="border bg-[#F6EECC] rounded-xl flex flex-col items-center ">
                    <p className="text-black text-center text-sm px-2">{message3Text}</p>
                    <button className="text-black border border-black shadow-sm shadow-black rounded-md p-1 m-1" onClick={() => handleNext3()}><img src={ClippyNext} className="size-5 shadow-xl" /></button>
                </div>
            </div>
            <div id="message4" className={`fixed bottom-[55px] left-[38%] w-[250px] h-[fit-content] flex flex-row ${message4 ? "" : "hidden"}`}>
                <img src={ClippyDown} className="h-[120px] w-[120px] my-auto" />
                <div className="border bg-[#F6EECC] rounded-xl flex flex-col items-center ">
                    <p className="text-black text-center text-sm px-2">{message4Text}</p>
                    <button className="text-black border border-black shadow-sm shadow-black rounded-md p-1 m-1" onClick={() => handleNext4()}><img src={ClippyNext} className="size-5 shadow-xl" /></button>
                </div>
            </div>
            <div id="message4" className={`relative w-[250px] h-[fit-content] flex flex-row ${message5 ? "" : "hidden"}`}>
                <img src={ClippyBye} className="h-[120px] w-[120px] my-auto" />
                <div className="border bg-[#F6EECC] rounded-xl flex flex-col items-center ">
                    <p className="text-black text-center text-sm px-2">{message5Text}</p>
                    <button className="text-black border border-black shadow-sm shadow-black rounded-md p-1 m-1" onClick={() => handleNext5()}><img src={ClippyNext} className="size-5 shadow-xl" /></button>
                </div>
            </div>
        </aside>
    )
};

export default Tutorial;