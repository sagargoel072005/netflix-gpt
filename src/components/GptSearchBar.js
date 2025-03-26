import { useSelector } from "react-redux";
import lang  from "../utils/languageConstants";

const GptSearchBar = () => {

    const langkey = useSelector((store)=>store.config.lang);

    return (
        <div className='pt-[10%] flex justify-center'>
            <form className='w-1/2 rounded-lg bg-black grid grid-cols-12'>
                <input
                    type="text"
                    placeholder={lang[langkey]. GptSearchPlaceholder}
                    className='p-4 m-4 col-span-9 rounded-lg' />
                <button className="col-span-3 m-4 py-2 px-4 text-white bg-red-700 rounded-lg">
                {lang[langkey].search}
                </button>
               
            </form>
            
        </div>
    )
}

export default GptSearchBar;