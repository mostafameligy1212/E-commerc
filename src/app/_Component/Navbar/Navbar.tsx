"use client"
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import { FaHeart, FaShoppingCart } from 'react-icons/fa'
import { IoMdLogOut } from 'react-icons/io'
import { BsCart4 } from "react-icons/bs";
import { signOut, useSession } from 'next-auth/react'
import { getUsercart } from '_/app/_services/Cart.servises'
import { CartContext } from '../MySessionProvider/CartContext'

export default function Navbar() {

  const { data: isAuthenicated } = useSession();
  const [initialCartCount, setCartCount] = useState(0);
  const { cartCount } = useContext(CartContext)

  const [isOpen, setIsOpen] = useState(false); 

  useEffect(() => {
    getUsercart().then(res => {
      setCartCount(res.numOfCartItems);
    });
  }, [])

  function handelSignOut() {
    signOut({
      redirect: true,
      callbackUrl: "/login",
    });
  }

  return (
    <nav className="bg-transparent border-gray-200 dark:!bg-black fixed top-0 w-full z-50">
      <div className="w-[90%] md:w-[95%] max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 bg-white rounded-4xl mt-3 border border-green-500 ">
        <Link href="/" className="flex dark:text-white items-center space-x-3 rtl:space-x-reverse">
          <FaShoppingCart color='green' size={30} />
          <p className='text-2xl'>fresh market</p>
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>

        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:w-[60%] md:flex md:justify-between md:items-center`} id="navbar-default">
          <div className="">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

              <li>
                <Link href="/" className="block py-2 px-3 text-gray-900 rounded-sm md:bg-transparent md:p-0 dark:text-white hover:text-green-500" aria-current="page">Home</Link>
              </li>
              <li>
                <Link href="/" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-500 dark:hover:text-white md:dark:hover:bg-transparent">brands</Link>
              </li>
              <li>
                <Link href="/" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-500 dark:hover:text-white md:dark:hover:bg-transparent">catgires</Link>
              </li>

          

            </ul>
          </div>
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-red-500 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

    {isAuthenicated && (
                <>
                  <li>
                    <Link href="/wishList" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-500 dark:hover:text-white md:dark:hover:bg-transparent">
                      <FaHeart color='red' size={25} />
                    </Link>
                  </li>

                  <li>
                    <Link href="/cart" className="relative block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-500 dark:hover:text-white md:dark:hover:bg-transparent">
                      <BsCart4 size={30} />
                      <p className='absolute -top-2 text-white -right-3 bg-green-500 px-1 rounded-full '>
                        {cartCount || initialCartCount}
                      </p>
                    </Link>
                  </li>
                </>
              )}
            {isAuthenicated ? (
              <li>
                <span onClick={handelSignOut} className="hover:text-red-500 block py-2 px-3 text-gray-900 rounded-sm cursor-pointer hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-500 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-500 dark:hover:text-white md:dark:hover:bg-transparent">
                  <IoMdLogOut size={30} />
                </span>
              </li>
            ) : (
              <>
                <li>
                  <Link href="/login" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-500 dark:hover:text-white md:dark:hover:bg-transparent">login</Link>
                </li>
                <li>
                  <Link href="/register" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-500 dark:hover:text-white md:dark:hover:bg-transparent">register</Link>
                </li>
              </>
            )}

          </ul>
        </div>
      </div>
    </nav>
  )
}