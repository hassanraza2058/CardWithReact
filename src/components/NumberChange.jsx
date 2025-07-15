// In this I am using useState to change no. when we click on button.

//  what is useState --> useState Ek Function hai jo ki hume values store ya update karne deta hai
// State generally refers to data or properties that need to be tracking in an application.

import React, { useState }  from "react";

function NumberChange() {
  const [value, changeValue] = useState(0);
  return (
    <div className=" w-full h-screen bg-red-200 flex items-center justify-center flex-col gap-3">
      <h1 className="font-semibold">{value}</h1>
      <button onClick={() => changeValue( (prev) => prev+1)} className=" px-3 py-1 bg-blue-500 rounded-full text-white font-semibold">
        click
      </button>
    </div>
  );
}

export default NumberChange;
