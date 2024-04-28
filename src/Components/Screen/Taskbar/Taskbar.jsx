import StartButton from "./Buttons/StartButton";

const Taskbar = ({setStartMenu, startMenu}) => {
    return (
        <div className="fixed bottom-0 left-0 w-full h-[fit-content]" style={{ backgroundColor: '#225BDA' }}>
            <div className="flex items-center">
            <StartButton setStartMenu={setStartMenu} startMenu={startMenu} />
            </div>
        </div>
    )
};

export default Taskbar;

