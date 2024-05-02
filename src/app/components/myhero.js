"use client";
import React, { useState } from "react";

export default function HeroSection() {
  return (
    <div className="container max-w-5xl w-4/5l mx-auto h-lvh">
      <div className="flex justify-center flex-col items-center gap-6 my-36">
        <div class="bg-gradient-to-r from-homegradient to-white bg-clip-text text-transparent">
          Start your AI journey with us
        </div>
        <div className="text-5xl flex flex-col justify-center items-center">
          <span className="text-white">Your Go-To AI Consultancy For</span>
          <span className="text-homeblue">AI Solutions</span>
        </div>
        <div class="absolute inset-0 bg-radial-mess"></div>
        <div class="left-44 absolute top-28 blur-3xl bg-gradient-to-br from-purple-500 to-transparent rounded-full w-96 h-96 "></div>
        <div class="right-20 absolute top-45 blur-3xl bg-gradient-to-br from-green-500 to-transparent rounded-full w-96 h-96 "></div>
        <div>
          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-2xl group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white ">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black dark:bg-gray-900 rounded-2xl group-hover:bg-opacity-0">
              Book a call
            </span>
          </button>
          <button
            type="button"
            class="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2  rounded-2xl "
          >
            See Case Studies
          </button>
        </div>
      </div>
    </div>
  );
}
