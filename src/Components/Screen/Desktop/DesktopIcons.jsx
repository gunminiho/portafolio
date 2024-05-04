import Dota2 from "../../../assets/Desktop Icons/Juegos/dota2.svg";
import Halflife from "../../../assets/Desktop Icons/Juegos/Halflife.png";
import Maplestory from "../../../assets/Desktop Icons/Juegos/maplestory.svg";
import Steam from "../../../assets/Desktop Icons/Juegos/steam.svg";
import Trash from "../../../assets/Desktop Icons/Herramientas/bintrash.svg";
import MyPC from "../../../assets/Desktop Icons/MyPC.ico";
import MyDocuments from "../../../assets/FolderOpen.ico";
import MyNetwork from "../../../assets/Desktop Icons/NetworkPlaces.ico";
import Pinball from "../../../assets/Desktop Icons/Pinball.ico";
import Solitario from "../../../assets/Desktop Icons/Solitary.ico";
import Buscaminas from "../../../assets/Desktop Icons/Minesweeper.ico";
import MySpec from "../../../assets/Files/myspec.png";
import Network from "../../../assets/Files/network.jpg";
import CV from "../../../assets/Files/resume-es.pdf";
import Resume from "../../../assets/Files/resume-en.pdf";
import { useSelector, useDispatch } from "react-redux";
import { setUrl, setShowIE, setShowInfo,setFile } from "../../../redux/windowsBool";


const DesktopIcons = ({ height }) => {

    const { language, showIE, showInfo } = useSelector((state) => state.windows);
    const pinball = "https://alula.github.io/SpaceCadetPinball/";
    const solitaire = "https://solitario-online.es/solitario/solitario-xp/";
    const buscaminas = "https://minesweeper.online/new-game";

    const dispatch = useDispatch();

    const setFileToView = (file,title,type) => {
        dispatch(setFile({
            title:title,
             src: file,
             type, 
            }));
        if(!showInfo)
        dispatch(setShowInfo(!showInfo));
    }

    const launchGame = (game) => {
        dispatch(setUrl(game));
        dispatch(setShowIE(!showIE));
    }

    return (
        <>
            <div className={`fixed top-0 h-[94%] w-[fit-content] my-2 grid ${height < 780 ? (height < 580 ? "grid-cols-3 grid-rows-5" : "grid-cols-2 grid-rows-5") : "grid-cols-1 grid-rows-10"}  items-center justify-items-start`} >
                <figure className="hover:bg-gray-100 hover:text-black hover:cursor-pointer w-[fit-content] mx-auto" onClick={()=> setFileToView(MySpec,language==="es"?"Mi PC":"My PC","img")}  >
                    <img src={MyPC} className="h-10 w-10 mx-auto" />
                    <figcaption>{language === "es" ? "Mi PC" : "My PC"}</figcaption>
                </figure>
                <figure className="hover:bg-gray-100 hover:text-black hover:cursor-pointer w-[fit-content] mx-auto" onClick={()=> setFileToView(language==="es"? CV : Resume ,language==="es"?"Mi CV":"My Resume","pdf")} >
                    <img src={MyDocuments} className="h-10 w-10 mx-auto" />
                    <figcaption>{language === "es" ? "Mi CV" : "My Resume"}</figcaption>
                </figure>
                <figure className="hover:bg-gray-100 hover:text-black hover:cursor-pointer w-[fit-content] mx-auto" onClick={()=> setFileToView(Network,language==="es"?"Mi Red":"My Network","img")} >
                    <img src={MyNetwork} className="h-10 w-10 mx-auto" />
                    <figcaption>{language === "es" ? "Mi red" : "My Network"}</figcaption>
                </figure>
                <figure className="hover:bg-gray-100 hover:text-black hover:cursor-pointer w-[fit-content] mx-auto" onClick={() => launchGame(pinball)} >
                    <img src={Pinball} className="h-10 w-10 mx-auto" />
                    <figcaption>Pinball</figcaption>
                </figure>
                <figure className="hover:bg-gray-100 hover:text-black hover:cursor-pointer w-[fit-content] mx-auto" onClick={() => launchGame(solitaire)} >
                    <img src={Solitario} className="h-10 w-10 mx-auto" />
                    <figcaption>{language === "es" ? "Solitario" : "Solitaire"}</figcaption>
                </figure>
                <figure className="hover:bg-gray-100 hover:text-black hover:cursor-pointer w-[fit-content] mx-auto" onClick={() => launchGame(buscaminas)}  >
                    <img src={Buscaminas} className="h-10 w-10 mx-auto" />
                    <figcaption>{language === "es" ? "Buscaminas" : "Minesweeper"}</figcaption>
                </figure>
                <figure className="hover:bg-gray-100 hover:text-black hover:cursor-pointer w-[fit-content] mx-auto"  >
                    <img src={Dota2} className="h-10 w-10 mx-auto" />
                    <figcaption>Dota2</figcaption>
                </figure>
                <figure className="hover:bg-gray-100 hover:text-black hover:cursor-pointer w-[fit-content] mx-auto"  >
                    <img src={Halflife} className="h-10 w-10 mx-auto" />
                    <figcaption>Half Life</figcaption>
                </figure>
                <figure className="hover:bg-gray-100 hover:text-black hover:cursor-pointer w-[fit-content] mx-auto"  >
                    <img src={Maplestory} className="h-10 w-10 mx-auto" />
                    <figcaption>Maplestory</figcaption>
                </figure>
                <figure className="hover:bg-gray-100 hover:text-black hover:cursor-pointer w-[fit-content] mx-auto"  >
                    <img src={Steam} className="h-10 w-10 mx-auto" />
                    <figcaption>Steam</figcaption>
                </figure>
                <div>
                    <figure className="fixed bottom-12 right-3 hover:bg-gray-100 hover:text-black">
                        <img src={Trash} className="h-10 w-10 mx-auto" />
                        <figcaption className="">{language === "es" ? "Papelera de Reciclaje" : "Recycle Bin"}</figcaption>
                    </figure>
                </div>
            </div>
        </>
    );
}

export default DesktopIcons;