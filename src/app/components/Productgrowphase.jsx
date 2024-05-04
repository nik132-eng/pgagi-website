import React from "react";
import DisplayBoxes from "./displayboxes";

const Productgrowphase = () => {
  const Designbox_data = [
    {
      id: 0,
      head: "Discover & Feasibility",
      text: "Assessing AI potential to innovate and validating the initial concept with a POC",
    },
    {
      id: 1,
      head: "Data preparation & research",
      text: "Curating and refining data sets to lay the groundwork for tailored AI solutions",
    },
    {
      id: 2,
      head: "Modern development & strategy",
      text: "Crafting and training bespoke AI models, strategising for integration and scalability. ",
    },
    {
      id: 3,
      head: "MVP creation",
      text: "Building a functional minimum viable product that embodies the AI solution for user feedback.",
    },
    {
      id: 4,
      head: "Quality assurance ",
      text: "Testing and refining the AI MVP prioritising performance and user centric enhancements. ",
    },
    {
      id: 5,
      head: "Deployment & Evaluation  ",
      text: "Launching the AI product with ongoing evaluation and optimisation for peak performance.",
    },
  ];

  return (
    <div className=" min-h-screen min-w-full flex items-center justify-center px-2 my-20 flex-row relative">
      <div className="absolute w-full h-full flex justify-between items-center z-[0]">
        <span className="w-[45vw] h-[20vw] rounded-full filter blur-[200px] brightness-20% bg-purple-600 top-[100px] left-[100px]"></span>
        <span className="w-[30vw] h-[20vw] rounded-full filter blur-[300px] brightness-20% bg-green-800"></span>
      </div>
      <span className="absolute w-[15vw] h-[20vw] rounded-full filter blur-[400px] brightness-5% bg-red-500"></span>
      <div className="flex flex-col gap-8">

      <div className=" bg-[url('/gif/animation.gif')] bg-no-repeat  bg-center h-full w-full md:flex items-center justify-center text-white">
      <div className="max-w-6xl w-full py-60 min-h-80 flex items-center justify-center flex-col mb-4 md:mb-0 px-20 rounded-3xl shadow shadow-slate-500 bg-white bg-opacity-10 z-[2] ">        


        <h1 className="flex items-center justify-center text-6xl mb-9 font-bold bg-gradient-to-r from-homegradient to-white bg-clip-text text-transparent opacity-100 z-[99]">
        Here’s How We Make Our
        </h1>
        <h1 className="flex items-center justify-center text-6xl mb-9 font-bold bg-gradient-to-r from-homegradient to-white bg-clip-text text-transparent opacity-100 z-[99]">
         Products Grow
         </h1>
      </div>
      </div>
      {Designbox_data.map((item, index) => (
            <DisplayBoxes key={index} index={index} head={item.head} text={item.text} />
        ))}
      </div>
    </div>
  );
};

export default Productgrowphase;