'use client'
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { getAllProducts } from "@/utils/lib";

const AllProducts = () => {
    const [AllProducts, setAllProducts] = useState([]);

    async function handleGetData(){
        let data = await getAllProducts();
        setAllProducts(data);
    }

    useEffect(()=>{
        handleGetData();
    },[])
  return (
    <div>
      <section className='text-gray-600 body-font mx-auto w-full max-w-7xl'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-wrap -m-4'>
            {
                AllProducts.map((product,_)=>(<ProductCard data={product}  key={_}/> ))
            }
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllProducts;
