import WindowsLogo from "../../../assets/windows xp logo.svg";
import LoadingBar from "../../../assets/loadingbar.gif";

const StartUp = ({setLanguage}) => {
  return (
    <>
      <div className="bg-black w-full h-full">
        <div className=" flex flex-col h-[25%] items-center justify-center">
          <p className="text-7xl text-center animate-pulse font-victormono pb-3">Erick Pajares</p>
          <p className="text-2xl text-center font-victormono">Full Stack Web Developer</p>
          <label htmlFor="language" className="text-white">Select :{`  `}
          <select className="bg-black text-white border-2 border-white rounded-md p-1 mt-3" onChange={(e)=>setLanguage(e.target.value)}>
          <option selected disabled value="0"> Language / Idioma </option>
            <option value="en">English</option>
            <option value="es">Español</option>
          </select> To see the content
          </label>
        </div>
        <div className="flex flex-col h-3/4 items-center">
          <div className="size-[fit-content]">
            <div className="flex items-end  size-[fit-content] -red-600">
              <p className="text-[30px] mr-5 " >Microsoft <sup className="text-[16px] ">&#174;</sup> </p>
              <img src={WindowsLogo} className="size-[250px] " /><p className="text-3xl">&#8482;</p>
            </div>
            <p className=" size-[fit-content] font-bold text-[90px] m-0 ">Windows <sup className="text-md h-full text-[#E96719]">xp</sup>
            </p>
            <div className="w-1/2 h-2 bg-gray-300 mx-auto p-auto">
              <img src={LoadingBar} className="size-[fit-content] " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StartUp;
