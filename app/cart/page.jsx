"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import second from "../../public/Assets/pairs/Adidas Ultraboost 22/01.jpeg";
import { useCart } from "@/utils/context";

const page = () => {
  const { cart, addToCart, removeFromCart, updateQuantity, clearCart } =
    useCart();

  useEffect(() => {
    console.log(cart);
  }, [cart]);
  if (!cart) {
    return <>loading...</>;
  }
  return (
    <div className='max-w-7xl w-full mx-auto h-[70vh] justify-start items-start flex gap-5'>
      <div className='cart-items w-3/4 bg-white rounded-md p-5 shadow-md'>
        <table className='w-full text-left'>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart &&
              cart.map((item, _) => {
                return (
                  <tr key={_}>
                    <td>
                      <div className='flex gap-4 items-center'>
                        <Image
                          src={item.images[0]}
                          alt={item.name}
                          width={500}
                          height={500}
                          className='w-32 h-32 object-cover rounded-md'
                        />
                        <div>
                          <h3>{item.name}</h3>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </td>
                    <td>${item.price}</td>
                    <td>
                      <input
                        type='number'
                        className='w-10 border border-gray-300 rounded-md p-1'
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(item.id, e.target.value)
                        }
                      />
                    </td>
                    <td>${item.quantity * item.price}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      {/* <div className='price-details w-1/4'>
        <div className='bg-white p-5 rounded-md shadow-md'>
          <h2>Price Details</h2>
          <div className='flex justify-between'>
            <p>Price ({cart.length} items)</p>
            <p>${item.price}</p>
          </div>
          <div className='flex justify-between'>
            <p>Total</p>
            <p>${item.quantity * item.price}</p>
          </div>
          <button className='w-full bg-orange hover:bg-darkOrange text-white rounded-md p-2 mt-4'>
            Proceed to Checkout
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default page;
