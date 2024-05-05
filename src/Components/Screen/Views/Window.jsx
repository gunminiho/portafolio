import { useSelector, useDispatch } from "react-redux";
import { setShowWindow } from "../../../redux/windowsBool";
import Close from "../../../assets/ieclose.svg";
import Maximize from "../../../assets/iemaximize.svg";
import Minimize from "../../../assets/ieminimize.svg";

const Window = () => {

  const dispatch = useDispatch();
  const { showWindow } = useSelector((state) => state.windows);

  const toggleWindow = () => {
    dispatch(setShowWindow(!showWindow));
  }

  return (
    <aside className="relative flex items-center justify-center size-full" >
      <div className="border-2 bg-blue-800 flex flex-row rounded-md">
        <form action="https://public.herotofu.com/v1/72bbd460-0231-11ef-a9e0-3721c124b74c" method="post" accept-charset="UTF-8"  >
          <div className="flex flex-row items-center justify-end my-1 mx-1 ">
            <p className="w-full px-auto">Send me a mail !</p>
            <div className="flex flex-row items-center">
            < div className="mr-[2px] size-6 rounded border shadow-white shadow-sm border-white bg-blue-700 flex item-center" ><img src={Minimize} onClick={toggleWindow} /></div>
            <div className="mr-[2px] size-6 rounded border shadow-white shadow-sm border-white bg-blue-700 flex items-center justify-center" ><img className="size-5" src={Maximize} onClick={toggleWindow} /></div>
            <div className="mr-[2px] size-6 rounded border shadow-white shadow-sm border-white bg-red-500 flex items-center justify-center hover:bg-red-700" onClick={toggleWindow} ><img className="size-4" src={Close} /></div>
            </div>
          </div>
          <div className="h-[350px] w-[400px] bg-gray-300">
            <div className="flex flex-col items-center justify-center h-full">
              <input type="text" name="name" className="w-3/4 p-1 m-1 border-2 rounded-lg mt-4 bg-white" placeholder="Name" required  />
              <input type="email" name="email" className="w-3/4 p-1 m-1 border-2 rounded-lg bg-white" placeholder="Email" required />
              <input type="tel" name="phone" className="w-3/4 p-1 m-1 border-2 rounded-lg bg-white" placeholder="Phone"  />
              <textarea name="message" className="w-3/4  h-full p-1 m-1 border-2 rounded-lg bg-white" placeholder="Message " required ></textarea>
              <button type="submit" className="w-[100px] py-1 px-4 my-3 text-black bg-gray-300 shadow-black shadow-sm ring-offset-1 ring-offset-blue-500 "><p>Send</p></button>
            </div>
          </div>
        </form>
      </div>

    </aside>
  );
};

export default Window;
