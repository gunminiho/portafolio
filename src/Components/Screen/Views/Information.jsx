import { useDispatch, useSelector } from "react-redux";
import { useState,useEffect, useRef } from "react";
import { setShowInfo, setFile } from "../../../redux/windowsBool";
import ImgPhoto from "../../../assets/Desktop Icons/imgphoto.svg";
import Close from "../../../assets/ieclose.svg";
import Maximize from "../../../assets/iemaximize.svg";
import Minimize from "../../../assets/ieminimize.svg";
import ZoomIn from  "../../../assets/zoomin.svg";
import ZoomOut from  "../../../assets/zoomout.svg";


const Info = ({height}) => {

    const dispatch = useDispatch();
    const { showInfo, file, language } = useSelector((state) => state.windows);
    const [zoomLevel, setZoomLevel] = useState(100); // Valor inicial del zoom
    const [dragStart, setDragStart] = useState(null);
    const photoContainerRef = useRef(null);

    useEffect(() => {

        return () => {
            dispatch(setFile(null));
        };
    }, []);

    const toggleInfo = () => {
        dispatch(setShowInfo(!showInfo));
    };

    const handleZoomIn = () => {
        setZoomLevel(prevZoom => Math.min(prevZoom + 10, 200)); // Incrementa el zoom en 10% máximo hasta 200%
    };

    const handleZoomOut = () => {
        setZoomLevel(prevZoom => Math.max(prevZoom - 10, 50)); // Decrementa el zoom en 10% mínimo hasta 50%
    };

    const handleMouseDown = (e) => {
        setDragStart({
            x: e.clientX,
            y: e.clientY,
            left: photoContainerRef.current.scrollLeft,
            top: photoContainerRef.current.scrollTop
        });
        e.preventDefault();
    };

    const handleMouseMove = (e) => {
        if (!dragStart) return;

        const deltaX = e.clientX - dragStart.x;
        const deltaY = e.clientY - dragStart.y;
        photoContainerRef.current.scrollLeft = dragStart.left - deltaX;
        photoContainerRef.current.scrollTop = dragStart.top - deltaY;

        e.preventDefault();
    };

    const handleMouseUp = () => {
        setDragStart(null);
    };

    return (
        <>
            <aside className="size-full relative flex items-center justify-center">
                <div className="windowcontainer w-1/2 min-w-[600px] h-3/4 min-h-[550px] rounded-t-lg border-4 border-blue-700 bg-gray-300">
                    <div id="windowtitle" className="w-full h-[4%] bg-blue-700 rounded flex items-center justify-between " >
                        <div className="flex">
                        <img src={ImgPhoto} alt="ImgPhoto" className="size-6 ml-2" />
                        <p className="ml-2 font-bold text-[14px]">{language === "es" ? ` ${file?.title ?? "Predeterminada"} - Visor de imágenes y fax de Windows` : ` ${file?.title ?? " Default"} - Windows Picture and Fax Viewer `}</p>    
                        </div>
                        <div className="flex justify-end">
                            <div className="mr-[2px] size-5 rounded border shadow-white shadow-sm border-white bg-blue-700 flex item-center" ><img src={Minimize} onClick={() => toggleInfo()} /></div>
                            <div className="mr-[2px] size-5 rounded border shadow-white shadow-sm border-white bg-blue-700 flex items-center justify-center" ><img className="size-5" src={Maximize} onClick={() => toggleInfo()} /></div>
                            <div className="mr-[2px] size-5 rounded border shadow-white shadow-sm border-white bg-red-500 flex items-center justify-center hover:bg-red-700" onClick={() => toggleInfo()} ><img className="size-4" src={Close} /></div>
                        </div>
                    </div>
                    <div id="windowscontainer" className={`h-[96%] w-full flex flex-col items-center justify-center`} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
                        <div id="photocontainer" className="border border-black bg-white w-[90%] h-[80%] overflow-hidden cursor-move flex items-center justify-center"
                        ref={photoContainerRef}
                        onMouseDown={handleMouseDown}
                        >
                        { file?.type === "img" && <img src={file?.src ?? ""} alt={file?.src ?? "NotFound"} className="w-full h-full" style={{ transform: `scale(${zoomLevel / 100})` }} />}
                        { file?.type === "pdf" && <embed src={file?.src ?? "File Not Found"} type="application/pdf" width="100%" height="100%" />}
                        </div>
                        <div className="flex justify-center mt-2">
                            <button className="mx-2 shadow-sm shadow-black" onClick={handleZoomIn}><img className="size-7" src={ZoomIn} /> </button>
                            <button className="mx-2 shadow-sm shadow-black" onClick={handleZoomOut}><img className="size-7" src={ZoomOut} /></button>
                        </div>
                    </div>

                </div>
            </aside>
        </>
    );
};

export default Info;