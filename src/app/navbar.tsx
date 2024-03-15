"use client";
import { useState } from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { Suspense } from "react";

export default function NavBar({ className }: { className?: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  

  const toggleMenu = () => {
    setIsLoading(false);
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Hamburger menu */}
      <div className="">
        {menuOpen && (
          <>
            <button
              className="text-2xl p-2 focus:outline-none mt-2 dark:text-neutral-400 text-neutral-600 rounded hover:dark:bg-neutral-800"
              onClick={toggleMenu}
            >
              ☰
            </button>
            <div
              className="fixed inset-0" // Set the background color here
              onClick={toggleMenu}
            ></div>
            <div className="fixed p-4 ">
              <div className=" rounded-md shadow-md ">
                <div className="flex flex-col space-y-4 p-4 w-300 rounded bg-white/80 dark:bg-neutral-900/90 backdrop-blur-xl z-10">
                  <div className="flex justify-end p-2 hover:text-neutral-100 dark:hover:text-neutral-500">
                    <button
                      className="text-2xl p-2 focus:outline-none"
                      onClick={toggleMenu}
                    >
                      ✕
                    </button>
                  </div>
                  {isLoading && (
                    <div className="fixed inset-0 flex items-center justify-center">
                      Loading...
                    </div>
                  )}
                  <Link
                    href="/"
                    className="hover:bg-neutral-100 dark:hover:bg-neutral-700 flex justify-center items-center h-14 m-8 p-4  rounded-md transition-all fill-none stroke-neutral-600"
                    onClick={toggleMenu}
                  >
                    All
                  </Link>
                  <Link
                    href="/videos"
                    className="hover:bg-neutral-100 dark:hover:bg-red-700 flex justify-center items-center h-14 m-8 p-4 rounded-md transition-all fill-none stroke-neutral-600 border-2 border-red-500"
                    onClick={toggleMenu}
                  >
                    Videos
                  </Link>
                  {/* <Link
                    href="/search"
                    className="hover:bg-neutral-100 dark:hover:bg-neutral-700 flex justify-center items-center h-14 m-8 p-4 rounded-md transition-all fill-none stroke-neutral-600"
                    onClick={toggleMenu}
                  >
                    Search
                  </Link> */}
                  <Link
                    href={"/create"}
                    className="hover:bg-neutral-100 dark:hover:bg-neutral-700 flex justify-center items-center h-14 m-8 p-4 rounded-md transition-all fill-none stroke-neutral-600"
                    onClick={toggleMenu}
                  >
                    Create
                  </Link>

                  <Link
                    href="/me"
                    className="hover:bg-neutral-100 dark:hover:bg-neutral-700 flex justify-center items-center h-14 m-8 p-4 rounded-md transition-all fill-none stroke-neutral-600"
                    onClick={toggleMenu}
                  >
                    Profile
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
        {!menuOpen && (
          <button
            className="text-2xl p-2 focus:outline-none mt-2 dark:text-neutral-400 rounded hover:dark:bg-neutral-800 text-neutral-600"
            onClick={toggleMenu}
          >
            ☰
          </button>
        )}
      </div>
    </>
  );
}
