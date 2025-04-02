'use client'
import Image from "next/image";
import React from "react";

const Card = ({data}) => {
  return (
    <article className='relative w-52 aspect-square isolate flex flex-col justify-end overflow-hidden rounded-md px-8 pb-8 pt-40 max-w-sm mx-auto mt-24'>
      <Image src={data.logo} alt={data.brand} width={500} height={500} className="w-full object-cover"  />
      <div className='absolute'></div>
      <h3 className='z-10 mt-3 text-2xl font-bold text-white'>{data.brand}</h3>
    </article>
  );
};

export default Card;
