import React from "react";

function Card({values,handleClickButton,index}) {
    const {name , profession, image, friends} = values;
    return (
        <div className="w-60 rounded-md overflow-hidden bg-white  ">
            <div className="w-full h-60 bg-sky-400"> <img className="h-full w-full object-cover object-[center_top]" src={image} alt="" /> </div>
            <div className=" w-full px-3 py-2">
                <h1 className="font-semibold text-xl"> {name} </h1>
                <p>{profession}</p>
                <button onClick={() => handleClickButton(index)} className={`mt-4 px-3 py-1 rounded-md ${friends ? "bg-green-500":"bg-blue-500"} text-white`}>{friends ? "Friends" : "Add Friend"}</button>
            </div>

        </div>
    );
}

export default Card;
