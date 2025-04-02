"use client";
import React, { useEffect, useState } from "react";
import { Marquee } from "./ui/marquee";
import { getAllbrands } from "@/utils/lib";
import Card from "./Card";

const Carosuel = () => {
  const [allBrands, setAllBrands] = useState();
  async function getBrandDetails() {
    let data = await getAllbrands();
    setAllBrands(data);
  }
  useEffect(() => {
    getBrandDetails();
  }, []);
  if (!allBrands) {
    return <p>Loading...</p>;
  }
  return (
    <div className='relative flex h-full w-full overflow-hidden  flex-col items-center justify-center rounded-lg '>
      <h1 className='text-3xl max-w-7xl w-full mx-auto font-semibold mr-auto '>
        Top Brands
      </h1>
      <div className='flex flex-row gap-4 '>
        <Marquee
          className='justify-center items-center overflow-hidden  [--duration:60s] [--gap:1rem]'
          style={{
            transform: "translateX(50px) translateY(0px) scale(1.5)",
          }}
        >
          {allBrands.map((data, idx) => (
            <Card key={idx} data={data} />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Carosuel;
