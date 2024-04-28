import Layout from "./Phone/Layout"
import LoadingScreen from "./Phone/Loading";
import Warning from "../../assets/mobile/warning.png";

import { useState } from "react";

const Loading = ({width,height}) => {

    const [loading, setLoading] = useState(true);
    
    return (
        <>
        <div className="flex items-center justify-center mb-2">
            <img src={Warning} className="size-20" />
            <div className="">
        <p className="text-white  text-center">Features aren't working!</p>
        <p className="text-white  text-center">Funcionalidades no disponibles aun!</p>
            </div>
        </div>
        <div id="iphone12size" className={`w-[450px]`}>
        <div id="phone">
        <div id="phone-buttons" className="absolute top-32">
        <div id="botonasilencio" className="relative top-28 left-20 bg-violet-300 border border-black h-7 w-2"></div>
        <div id="botonmasvol" className="relative top-36 left-20 bg-violet-300 border border-black h-10 w-2"></div>
        <div id="botonamenosvol" className="relative top-40 left-20 bg-violet-300 border border-black h-10 w-2"></div>
        <div id="botonapagado" className="relative top-20 left-[360px] bg-violet-300 border border-black h-20 w-2"></div>
        </div>
        <div id="phone-border" className="relative border-[20px] border-black h-[588px] w-[278px] rounded-[40px] mx-auto bg-gradient-to-b from-red-900 via-orange-400 via-purple-300 to-blue-500">
        <div id="phone-border-exterior" className="relative bottom-5 right-5 border-4 border-violet-300 rounded h-[588px] w-[278px] rounded-[40px] ">
            <div id="phone-topbar" className="relative top-0 left-0 right-0 h-[60px] rounded-t-[40px]">
            <div id="phone-island" className="relative top-5 left-24 w-[75px] bg-black rounded-xl h-[22px] ">
                <div id="phone-camera" className="relative top-1 left-14 border-2 border-gray-400 bg-blue-900 rounded-md size-3">
               <div id="phone-screen" className="relative flex flex-col items-center justify-center mx-auto top-4 right-[139px] w-[239px] h-[522px] rounded-2xl overflow-auto">
                {/*contenido del phone screen */}
               {loading ? <LoadingScreen setLoading={setLoading} loading={loading} /> : <Layout />}
                {/* Fin del contenido de phone screen */}
               </div>
                </div>
            </div>
            </div>
        </div>   
        </div>
            </div>
       
        
        </div>
        </>
    );
    };

    export default Loading;