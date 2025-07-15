import React from "react";
import { useState } from "react";
import Card from "./component/Card";

function App() {
    
  const data = [
    { name: "Hassan", profession: "Software Engineer", image: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c29mdHdhcmUlMjBlbmdpbmVlcnxlbnwwfHwwfHx8MA%3D%3D", friends:false},
    { name: "Farhan", profession: "Farmer", image: "https://images.unsplash.com/photo-1599719574316-e32146edacb1?q=80&w=710&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friends:false},
    { name: "Harsh Sahu", profession: "Teacher", image: "https://cdn.pixabay.com/photo/2024/08/31/05/47/ai-generated-9010550_1280.png", friends:false },
    { name: "Krishna", profession: "Cricketer", image: "https://cdn.pixabay.com/photo/2022/01/27/14/37/sports-6972298_1280.jpg", friends:false}
  ];

  const [value, setValue]= useState(data);
  
  return (

    <div className="w-full h-screen flex justify-center items-center bg-rose-300 gap-2">
      {
      // data.map((item, index) => <Card key={index} name ={item.name} profession={item.profession} image={item.image}/>)  

      data.map((item, index) => <Card key={index} values = {item}/>)  
      }
    </div>

  );
}

export default App; 