import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

function CarduseState() {

    const [value, setValue] = useState(false);

    return (
        <div className="w-full h-screen bg-zinc-400 flex items-center justify-center">

            <div className="w-80 h-44 bg-red-200 rounded-md flex overflow-hidden relative">
                <img className={`w-full shrink-0 object-cover transition-transform duration-500 ${value ? "-translate-x-[0%]" : "-translate-x-[100%]"}`} src="https://images.unsplash.com/photo-1558637845-c8b7ead71a3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8MTYlM0E5fGVufDB8fDB8fHww" alt="" />
                <img className={`w-full shrink-0 object-cover transition-transform duration-500 ${value ? "-translate-x-[0%]" : "-translate-x-[100%]"}`} src="https://images.unsplash.com/photo-1599454100789-b211e369bd04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fDE2JTNBOXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                <img className={`w-full shrink-0 object-cover transition-transform duration-500 ${value ? "-translate-x-[0%]" : "-translate-x-[100%]"}`} src="https://images.unsplash.com/photo-1580757468214-c73f7062a5cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8MTYlM0E5fGVufDB8fDB8fHww" alt="" />
                 <span onClick={()=> setValue( () => !value)} className=" absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-full flex items-center justify-center text-black  w-8 h-8  bg-white/70"> <FaArrowRight /> </span>
            </div>

        </div>
    );
}

export default CarduseState;




// import React, { useState } from "react";
// import { FaArrowRight } from "react-icons/fa";

// function CarduseState() {
//     const [value, setValue] = useState(false);

//     return (
//         <div className="w-full h-screen bg-zinc-400 flex items-center justify-center">
//             <div className="w-80 h-44 bg-red-200 overflow-hidden rounded-md relative">
//                 {/* Wrapper that slides */}
//                 <div className={`flex transition-transform duration-500 ${value ? "-translate-x-[100%]" : "-translate-x-[0%]"}`}>
//                     <img className="w-80 h-44 object-cover shrink-0" src="https://images.unsplash.com/photo-1558637845-c8b7ead71a3e?w=600&auto=format&fit=crop&q=60" alt="" />
//                     <img className="w-80 h-44 object-cover shrink-0" src="https://images.unsplash.com/photo-1599454100789-b211e369bd04?w=600&auto=format&fit=crop&q=60" alt="" />
//                     <img className="w-80 h-44 object-cover shrink-0" src="https://images.unsplash.com/photo-1580757468214-c73f7062a5cb?w=600&auto=format&fit=crop&q=60" alt="" />
//                 </div>

//                 <span
//                     onClick={() => setValue((prev) => !prev)}
//                     className="absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-full flex items-center justify-center text-black w-8 h-8 bg-white/70 cursor-pointer"
//                 >
//                     <FaArrowRight />
//                 </span>
//             </div>
//         </div>
//     );
// }

// export default CarduseState;
