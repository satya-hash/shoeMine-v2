'use client'
import Image from "next/image";
import React from "react";
import Logo from "../public/Assets/logo2.jpeg";
import Link from "next/link";
import { ShoppingCart } from "react-feather";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import { useCart } from "@/utils/context";
const Navbar = () => {
    const { cart } = useCart();

    return (
        <nav className=' mt-3 mx-auto max-w-7xl w-full'>
            <div className='flex flex-row justify-between items-center'>
                <div className='flex flex-row gap-4 items-center'>
                    <Link href='/' className='logo aspect-square  '>
                        <Image src={Logo} alt='Logo' className='w-24' />
                    </Link>
                    <div>
                        <ul className='flex flex-row items-center gap-4'>
                            <li className='hover:text-darkOrange text-orange'>
                                <Link href='/'>All</Link>
                            </li>
                            <li className='hover:text-darkOrange text-orange'>
                                <Link href='/'>Brands</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='search max-w-xl w-64 px-2 flex flex-row items-center justify-between border rounded-md  border-[#333]'>
                    <Input
                        placeholder='search...'
                        type='text'
                        className='border-none text-black outline-none active:border-none active:outline-none'
                    />
                    <Search />
                </div>

                <Link
                    href='/cart'
                    type='button'
                    className='relative inline-flex items-center text-sm font-medium text-center rounded-lg p-2  text-steelGray hover:text-darkOrange '
                >
                    <ShoppingCart className='' />{" "}
                    <span className='sr-only'>Notifications</span>
                    <div className='absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-orange border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900'>
                        {cart && cart.length || 0}
                    </div>
                </Link>

            </div>
        </nav>
    );
};

export default Navbar;
