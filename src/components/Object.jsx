
// useState with object , see here we cannot change obect and arrays directly , thats why we use spread operator
// ?? QUESTION ARISES THAT WHEN I AM REFRESHING THE PAGE, IT automatically chages to false How to handle this---for future videos


import React, { useState } from "react";

function Object() {

    const [value, setValue] = useState({ name: "Hassan", isBanned: false });

    return (
        <div className="h-screen w-full bg-blue-300 flex items-center justify-center flex-col ">
            <h1 className="font-semibold">Name: {value.name}</h1>
            <h2 className="font-semibold"> isBanned: {value.isBanned.toString()}</h2>
            <button onClick={() => setValue({ ...value, isBanned: !value.isBanned })} className={`px-3 py-1 ${value.isBanned ? "bg-blue-500" : "bg-red-500"} 
            rounded-full mt-3 font-semibold`}>Click Me</button>
        </div>

    );
}

export default Object;




// --------------------> HOW CAN I DO WITH IF STATEMENT WITHOUT TERNARY OPERATOR <-------------------------- //

// You can use an if statement instead of a ternary operator, but you cannot use an
// if statement directly inside JSX expressions.Instead, you would need to set the class
// name in a variable before the return statement.

// let buttonClass = "px-3 py-1 rounded-full mt-3 font-semibold";
// if (value.isBanned) {
//     buttonClass += " bg-blue-500";
// } else {
//     buttonClass += " bg-red-500";
// }

// return (
//     <button className={buttonClass}>Click Me</button>
// );


// So, you must use the if statement outside of the JSX and then use the variable in your JSX.
// The ternary operator is preferred for inline conditional rendering inside JSX.