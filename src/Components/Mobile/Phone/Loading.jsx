import Applelogo from "../../../assets/mobile/applelogo.svg"

const Loading = ({loading, setLoading}) => {
    return (
        <>
        <img src={Applelogo} alt="applelogo" className="size-20 mb-3"/>
                <p className="text-white text-2xl">Mobile version still</p>
                <p className="text-white text-2xl">under construction</p>
                <div className="flex flex-row mt-6 animate-spin rounded-full border-b-2 size-16 mb-10">                    
                </div>
                <p className="mb-2">Want to see a sneak peak?</p>
                <button onClick={() => setLoading(false)} className="bg-white text-black rounded-md p-2">click here</button>
        </>
    );
}

export default Loading;