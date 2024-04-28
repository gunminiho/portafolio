import DesktopLoading from './Components/Screen/Desktop/StartUp'
import DesktopLayout from './Components/Screen/Layout'
import useDetectScreenSize from './Hooks/useDetectScreenSize'
import PhoneLoading from "../src/Components/Mobile/Intro";
import  "./index.css";

function App() {

  const {width, height} = useDetectScreenSize();

  return (
    <>
      <div className="h-[100vh] w-[100vw]">
        { width < 450 ? <PhoneLoading width={width} height={height} isloading={true} />
        : <DesktopLayout />}
      </div>
    </>
  )
}

export default App
