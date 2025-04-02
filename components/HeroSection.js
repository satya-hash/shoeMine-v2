'use client'
import Image from "next/image";
import HeroImg from "@/public/Assets/hero.jpeg";
import React from "react";

const HeroSection = () => {
  return (
    <section className='max-w-7xl w-full mx-auto h-[90vh]'>
      <div className='flex flex-row justify-center items-center'>
        <div className='flex flex-col w-1/2 '>
          <h1 className='text-6xl font-semibold text-charcoalGray'>
            Unleash Your{" "}
          </h1>
          <br />
          <span className='text-orange text-8xl  font-bold'>Potential</span>
          <p className='text-steelGray my-5'>
            Discover premium sneakers crafted for champions. Redefine your style
            with our exclusive collection, designed for comfort and performance.
          </p>
          <div className='my-5 flex flex-col gap-5 justify-start items-start'>
            <button
              className='text-white bg-orange hover:bg-darkOrange py-3 px-5 rounded-md'
              onClick={() => console.log("first")}
            >
              Shop Now
            </button>
            <p className='text-sm text-steelGray'>
              Free Shipping on Orders Above $50
            </p>
          </div>
        </div>
        <div>
          <Image src={HeroImg} alt='hero' />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
