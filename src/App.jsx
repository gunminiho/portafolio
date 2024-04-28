import MobileLayout from './Components/Mobile/Phone/Layout'
import ScreenLayout from './Components/Screen/Layout'
import useDetectScreenSize from './Hooks/useDetectScreenSize'
import Intro from "../src/Components/Mobile/Intro";
import  "./index.css";

function App() {

  const {width, height} = useDetectScreenSize();

  return (
    <>
      <>
        { width < 450 ? <Intro width={width} height={height} isloading={true} >
          
        </Intro> : <ScreenLayout />}
      </>
    </>
  )
}

export default App
