
import windowsxplogo from "../../../../assets/windows xp logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { setStartMenu } from "../../../../redux/windowsBool";

const StartButton = () => {

  const dispatch = useDispatch();

  const {startMenu} = useSelector((state) => state.windows);
  return (
    <div className="flex items-center">
      <button
        className="flex items-center bg-[#3E993E] h-[fit-content] rounded-r-lg hover:shadow-inner "
        onClick={() => dispatch(setStartMenu(!startMenu))}
      >
        <img className="h-[20px] " src={windowsxplogo} alt="windows xp logo" />
        <p className="ml-4 font-bold">Erick Pajares</p>
      </button>
    </div>
  );
};

export default StartButton;
