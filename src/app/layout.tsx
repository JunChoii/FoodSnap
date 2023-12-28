import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./navbar";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

import { twMerge } from "tailwind-merge";

export const metadata: Metadata = {
  title: "Recipe Store",
  description: "Store your recipes in here!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.className,
          "relative bg-white text-black dark:bg-black dark:text-white"
        )}
      >
        <header className="fixed left-0 right-0 top-0 h-20 bg-white/80 dark:bg-black/80 backdrop-blur-xl z-10 items-center justify-center ">
          <div className="text-2xl font-bold flex justify-center mt-10">
            <a href="/">Food Snap</a>
          </div>

          <div className="flex justify-center ">
            <NavBar className="" />
          </div>
        </header>

        <main className="mt-40 mb-24 p-6 lg:p-0 m-auto max-w-lg z-0">
          {children}
        </main>
      </body>
    </html>
  );
}
