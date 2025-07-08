import React from "react";

function Card() {
  return (
    <div className="w-full h-screen bg-zinc-200">
      <div className="w-52 bg-zinc-100 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] rounded-md overflow-hidden ">
        <div className="h-32 bg-zinc-300">
          <img className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW1hem9ufGVufDB8fDB8fHww"
            alt=""
          />
        </div>
        <div className="px-3 py-4">
          <h1 className="font-semibold">Amazon</h1>
          <p className="mt-3 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            debitis ab dolorum corporis tempore quia?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
