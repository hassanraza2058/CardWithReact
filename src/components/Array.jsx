// Removing last element when click on button from array. 

import React, { useState } from "react";

function Array() {

    const [value, setValue] = useState([1, 2, 3, 4, 5, 6])

    return (

        <div className="w-full h-screen flex justify-center items-center flex-col bg-rose-400">

            {
                value.map((item) => <h1 className="text-2xl" key={item}>{item}</h1>)
            }


            {/* <button onClick={() => setValue(value.slice(0, -1))} className="py-1 px-3 mt-2 bg-blue-500 rounded-full text-white"> click me </button> */}

            {/* Second way of doing the  same thing  using Filter */}

            <button onClick={() => setValue(() => value.filter((item, index) => index !== value.length - 1))} className="py-1 px-3 mt-2 bg-blue-500 rounded-full text-white"> Click me </button>
           
            {/* <button onClick={() => setValue(value.filter(item => item%2 === 0))} className="py-1 px-3 mt-2 bg-blue-500 rounded-full text-white"> Click me </button> */}

        </div>

    );
}

export default Array;
