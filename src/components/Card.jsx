// in this I am just saving the CARDs into array of objects and using that in one component.

import React from "react";

function Card() {

  const cardData = [
    {
      name: "Amazon",
      image:
        "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW1hem9ufGVufDB8fDB8fHww",
      description:
        "amazon a good company and it has many side workds which i don't know I have to write something thats why i am writing this",
    },
    {
      name: "Google",
      image:
        "https://images.unsplash.com/photo-1529612700005-e35377bf1415?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29vZ2xlfGVufDB8fDB8fHww",
      description:
        "Google is a don't know kaisi company what to do why to do happy birthday not birthday how are you",
    },
    {
      name: "Microsoft",
      image:
        "https://images.unsplash.com/photo-1662947036644-ecfde1221ac7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWljcm9zb2Z0fGVufDB8fDB8fHww",
      description:
        "hai maloom mujhko tumhari hakikat , mohabbat k parde mai karte ho nafrat , hamari taraf se nighahe hatalo hume zinda rehne do ai hsun walo",
    },
  ];

  return (
    <div className="w-full h-screen bg-zinc-200 flex gap-4 items-center justify-center">
      { cardData.map((object, index) => (
        <div className="w-52 bg-zinc-100  rounded-md overflow-hidden ">
          <div className="h-32 bg-zinc-300">
            <img
              className="w-full h-full object-cover"
              src={object.image}
              alt=""
            />
          </div>
          <div className="px-3 py-4">
            <h1 className="font-semibold">{object.name}</h1>
            <p className="mt-3 text-sm">{object.description}</p>
          </div>
        </div>
      )) }
     
    </div>
  );
}

export default Card;
