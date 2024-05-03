
import Typist from 'react-typist';
import cmd from "../../../assets/cmd.png";
import Close from "../../../assets/close.svg";
import Minimize from "../../../assets/minimize.svg";
import Maximize from "../../../assets/maximize.svg";
import { useDispatch, useSelector } from "react-redux";
import { setStartUp } from "../../../redux/windowsBool";


const CMD = () => {

    const dispatch = useDispatch();
    const { startUp } = useSelector((state) => state.windows);

    const toggleCMD = () => {
        dispatch(setStartUp(!startUp));
    }

    return (
        <aside id="allscreen" className={` size-full flex items-center justify-center `} >
            <div id="exterior" className={`absolute right-[120px] lg:right-[200px] xl:right-[300px] w-1/2 min-w-[420px] min-h-[450px] h-[60%]`} >
                <div id="topbar" className="border-4 flex items-center justify-between pl-1 w-full h-[45px] bg-gradient-to-r from-blue-800 to-sky-300">
                    <div className="flex items-center">
                        <img className="size-8" src={cmd} alt="cmd" />
                        <p className="pl-2 font-bold">C:\WINDOWS\system32\cmd.exe</p>
                    </div>
                    <div id="buttons" className="flex pr-2">
                    <img className="bg-gray-300 h-[25px] w-[20px] mx-0.5 border " src={Minimize} />
                    <img className="bg-gray-300 h-[25px] w-[20px] mx-0.5 border" src={Maximize} />
                    <img className="bg-gray-300 h-[25px] w-[20px] mx-0.5 border hover:bg-red-500" src={Close} onClick={toggleCMD} />
                    </div>
                </div>
                <div id="content" className="bg-black w-full h-[91%] border-4 text-lg overflow-y-auto">
                    <Typist avgTypingDelay={10} cursor={{ show: false }}>
                        <p className="p-2">Bienvenido a mi portafolio, mi nombre es Erick Pajares soy un desarrollador web full stack con inclinación más al backend y aquí encontraras una variedad de información desde mis hobbies hasta mi CV que podrás ver y descargar.</p>
                        <Typist.Delay ms={500} />
                        <p className="p-2">En el menú de inicio 'Erick Pajares' ubicado en la esquina inferior izquierda podrás encontrar mi información básica hasta mi CV.</p>
                        <Typist.Delay ms={500} />
                        <p className="p-2">En el resto de interfaz que simula el sistema operativo Windows XP podrás ver los programas que suelo usar para programar, herramientas de productividad, juegos & diversas cosas más.</p>
                        <Typist.Delay ms={500} />
                        <p className="p-2">No olvides cerrar una ventana si quieres ver otra! incluyendo esta para empezar a navegar</p>
                        <Typist.Delay ms={500} />
                        <p className="p-2">Espero que disfrutes de tu visita y si tienes alguna pregunta no dudes en contactarme usando el formulario para enviarme un correo en el menú o usando los datos brindados aquí.</p>
                        <Typist.Delay ms={500} />
                        <p className="p-2">Gracias por visitar mi portafolio, que tengas un excelente día! <em className="animate-ping">|</em></p>
                    </Typist>
                </div>
            </div>
        </aside>
    );
};

export default CMD;
