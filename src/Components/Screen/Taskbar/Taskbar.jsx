import StartButton from "./Buttons/StartButton";
import StartUpSound from "../../../assets/windowsxp .mp3"


const Taskbar = ({setStartMenu, startMenu, language}) => {
    return (
        <div className="fixed bottom-0 left-0 w-full h-[fit-content]" style={{ backgroundColor: '#225BDA' }}>
            <div className="flex items-center">
            <StartButton setStartMenu={setStartMenu} startMenu={startMenu} />
            <audio src={StartUpSound} autoPlay></audio>
            <p className="">Language: {language !== "es" ? "english" : "español" }</p>
            </div>
        </div>
    )
};

export default Taskbar;

