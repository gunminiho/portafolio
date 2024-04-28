import { useState } from "react";
import windowsxplogo from "../../../../assets/windows xp logo.svg";

const StartButton = ({setStartMenu,startMenu}) => {
  //const [startMenu, setStartMenu] = useState(false);

  return (
    <div className="flex items-center">
      <button
        className="flex items-center bg-[#3E993E] h-[fit-content] rounded-r-lg hover:shadow-inner "
        onClick={() => setStartMenu(!startMenu)}
      >
        <img className="h-[20px] " src={windowsxplogo} alt="windows xp logo" />
        <p className="ml-4">Erick Pajares</p>
      </button>
    </div>
  );
};

export default StartButton;
