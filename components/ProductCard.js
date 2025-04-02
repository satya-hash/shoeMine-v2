import React from "react";
import ProductImg from "@/public/Assets/pairs/Adidas Ultraboost 22/01.jpeg";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({data}) => {
const {brand,name,price,images,link} = data
  return (
    <Link
      href={`/product/${link}`}
      className='p-4 md:w-1/3 lg:w-1/4 w-1/2   cursor-pointer'
    >
      <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
        <Image
          id='primaryImg'
          src={images[0]}
          width={600}
          height={600}
          alt='product'
          className='rounded-md hover:scale-110 transition-all ease-in-out overflow-hidden'
        />
        <div className='p-6'>
          <h2 className='tracking-widest text-xs title-font font-medium text-gray-400 mb-1'>
            {brand}
          </h2>
          <h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
            {name}
          </h1>

          <div className='flex items-center flex-wrap '>
            <p className='text-[#F28C28] font-bold text-xl  inline-flex items-center md:mb-2 lg:mb-0'>
              ${price}{" "}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
