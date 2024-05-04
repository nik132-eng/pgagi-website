"use client";
import React, { useState } from "react";

export default function HeroSection() {
  return (
    <div className="container max-w-5xl w-4/5l mx-auto h-5/6">
      <div className="flex justify-center flex-col items-center gap-6 mt-36">
        <div className="bg-gradient-to-r from-homegradient to-white bg-clip-text text-transparent z-[2]">
          Start your AI journey with us
        </div>
        <div className="text-5xl flex flex-col justify-center items-center z-[2]">
          <span className="text-white">Your Go-To AI Consultancy For</span>
          <span className="text-homeblue">AI Solutions</span>
        </div>
        <div className="absolute inset-0 bg-radial-mess"></div>
        <div className="absolute w-full h-full flex justify-between items-center z-[1]">
          <span className="w-[45vw] h-[20vw] rounded-full filter blur-[200px] brightness-20% bg-purple-600 top-[100px] left-[100px]"></span>
          <span className="w-[30vw] h-[20vw] rounded-full filter blur-[300px] brightness-20% bg-green-800"></span>
        </div>
        <span className="absolute w-[15vw] h-[20vw] rounded-full filter blur-[400px] brightness-5% bg-red-500"></span>
        <div className="z-[2]">
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-2xl group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white ">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black dark:bg-gray-900 rounded-2xl group-hover:bg-opacity-0">
              Book a call
            </span>
          </button>
          <button
            type="button"
            className="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2  rounded-2xl "
          >
            See Case Studies
          </button>
        </div>
      </div>
    </div>
  );
}
