import React, { useState } from "react";

const Hero = () => {
  const [time, setTime] = useState("");
  setTimeout(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  });
  return (
    <div className="  mt-20 w-full h-[90vh] bg-bottom bg-cover bg-hero-home rounded-xl text-center relative mobile:h-[70vh] mobile:mt-12  ">
      <h1 className="text-7xl pt-36 pb-4 tablet:text-6xl mobile:text-5xl">
        Arkitektur Design Visualisering{" "}
      </h1>
      <h2 className="text-2xl tablet:text-xl mobile:text-lg">
        Med lidenskap og kjærlighet til vakre inspirasjoner.
      </h2>
      <div className="px-3 py-1 bg-white/20 backdrop-blur-3xl bottom-2 right-10 absolute text-3xl rounded-xl tablet:right-2">
        <h2 className="tablet:text-lg">{new Date().toLocaleTimeString()}</h2>
      </div>
    </div>
  );
};

export default Hero;
