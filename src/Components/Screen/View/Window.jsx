

const Window = ({children , showWindow, setShowWindow}) => {

  return (
    <aside className="flex items-center justify-center h-full">

      <div className="border-2 bg-blue-800 flex flex-row">
        <form action="https://public.herotofu.com/v1/72bbd460-0231-11ef-a9e0-3721c124b74c" method="post" accept-charset="UTF-8" >
            <div className="flex flex-row items-center justify-end my-1 mx-2 ">
            <p className="w-full px-auto">Send me a mail !</p>
            <div className="flex flex-row-reverse items-center ">
                <div className="bg-red-500 size-5 rounded-full m-1 flex justify-center items-center text-black hover:bg-red-400 cursor-default" onClick={()=>setShowWindow(!showWindow)}><p>X</p></div>
                <div className="bg-yellow-500 size-5 rounded-full ml-1 flex justify-center items-center text-black"></div>
                <div className="bg-green-500 size-5 rounded-full ml-1 flex justify-center items-center text-black">-</div>
            </div>
            </div>
            <div className="h-[350px] w-[400px] bg-gray-300">
                <div className="flex flex-col items-center justify-center h-full">
                    <input type="text" name="name" className="w-3/4 p-1 m-1 border-2 rounded-lg mt-4" placeholder="Name" />
                    <input type="email" name="email" className="w-3/4 p-1 m-1 border-2 rounded-lg" placeholder="Email" />
                    <input type="tel" name="phone" className="w-3/4 p-1 m-1 border-2 rounded-lg" placeholder="Phone" />
                    <textarea name="message" className="w-3/4  h-full p-1 m-1 border-2 rounded-lg" placeholder="Message"></textarea>
                    <button type="submit" className="w-[100px] py-1 px-4 my-3 text-black bg-gray-300 shadow-black shadow-sm ring-offset-1 ring-offset-blue-500 "><p>Send</p></button>
                </div>
            </div>
        </form>
      </div>

    </aside>
  );
};

export default Window;
