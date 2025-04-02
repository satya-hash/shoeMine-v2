"use client";
import ProductCard from "@/components/ProductCard";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/utils/context";
import { getRelatedProducts, getSpecificProduct } from "@/utils/lib";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const page = (props) => {
  const [product, setProduct] = useState();
  const [relatedProducts, setRelatedProducts] = useState();
  const [primaryImg, setPrimaryImg] = useState();
  const [selectedSize, setSelectedSize] = useState(null); // Track selected size
  const { addToCart, cart } = useCart();
  const { toast } = useToast();

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };
  async function getData(name) {
    let data = await getSpecificProduct(name);
    setProduct(data);
    setPrimaryImg(data.images[0]);
    setRelatedProducts(await getRelatedProducts(data.brand));
  }
  useEffect(() => {
    let slug = window.location.pathname.split("/")[2];
    getData(slug);
  }, []);
  useEffect(() => {}, [cart, selectedSize]);
  if (!product && !relatedProducts) return <h1>Loading...</h1>;
  return (
    <section className="max-w-7xl w-full mx-auto mt-5">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink className="hover:text-darkOrange" href="/">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-orange">
              {product.name}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex flex-row w-full my-5 h-[80vh]">
        <div className="flex flex-col justify-center items-center w-[60%]">
          <div className="rounded-md mb-3">
            <Image
              src={primaryImg}
              width={600}
              height={600}
              alt="product"
              className="rounded-md"
            />
          </div>
          <ul
            className="flex flex-row gap-2 justify-center items-center
        "
          >
            {product &&
              product.images.map((img, _) => {
                return (
                  <li
                    key={_}
                    className={`border border-[#333] rounded-md hover:cursor-pointer ${
                      img === primaryImg ? "ring-4 ring-blue-500" : "ring-0"
                    }`}
                    onClick={() => setPrimaryImg(img)}
                  >
                    <Image
                      src={img}
                      width={500}
                      height={500}
                      alt="product"
                      className="w-24 rounded-md hover:cursor-pointer transition-transform hover:scale-105"
                    />
                  </li>
                );
              })}
          </ul>
        </div>
        <div className="details w-[40%]">
          <h2 className="font-semibold text-2xl text-charcoalGray">
            {product.name}
          </h2>
          <h1 className=" text-4xl text-orange">${product.price}</h1>
          <hr className="bg-gray-400 my-5" />
          <p>Sizes</p>
          <ul className="flex flex-row gap-2 mb-5">
            {product.sizes.map((size, _) => {
              return (
                <li
                  key={_}
                  onClick={() => handleSizeClick(size)}
                  className={`rounded-full border h-10 aspect-square flex justify-center items-center hover:cursor-pointer ${
                    selectedSize === size
                      ? "bg-orange text-white border-orange"
                      : "border-[#333]"
                  }`}
                >
                  {size}
                </li>
              );
            })}
          </ul>
          <p className="text-steelGray">{product.description}</p>
          <button
            onClick={() => {
              if (selectedSize) {
                toast({ title: "Added to cart", description: "" });
              } else {
                toast({
                  variant: "destructive",
                  title: "Please select the size",
                  description: "",
                });
              }
              addToCart(product);
            }}
            className="bg-blue-500 text-white px-4 py-2 mt-2"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div className="realted-products mt-10">
        <h2 className="font-semibold text-2xl text-charcoalGray">
          Related Products
        </h2>
        <div className="flex flex-row gap-5">
          {relatedProducts?.map &&
            relatedProducts.map((product, _) => (
              <ProductCard data={product} key={_} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default page;
