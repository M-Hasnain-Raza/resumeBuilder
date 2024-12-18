"use client"

import {BrainCircuit, FileUser, Palette}  from "lucide-react";
import Image from "next/image";

export default function FeaturePack() {
  return (
    <div className=" w-full  my-8">
     <div className="flex justify-center">
     <h1 className=" text-black font-semibold text-4xl my-6 text-center">
        Get hired faster with our feature-packed and <br />
        easy-to-use resume builder app
      </h1>
     </div>
      <div className=" flex  justify-evenly ">
      <div >
        <BrainCircuit className=" text-purple-600 my-3 " size={40}/>
        <h1 className=" text-black text-3xl font-semibold ">Powerful resume builder</h1>
        <p className=" text-gray-900 text-xl ">Use our potent creation tools and expert <br /> guidance to create the perfect resume for <br /> your next job application.</p>
      </div>
      <div>
        <FileUser className=" text-purple-600 my-3" size={40}/>
        <h1  className=" text-black text-3xl font-semibold ">Professional templates</h1>
        <p className=" text-gray-900 text-xl ">Choose from 25+ applicant tracking systems <br /> (ATS)-friendly modern and professional <br /> templates</p>
      </div>
      <div>
        <Palette className=" text-purple-600 my-3" size={40}/>
        <h1  className=" text-black text-3xl font-semibold ">Customize fonts and colors</h1>
        <p className=" text-gray-900 text-xl ">Select custom fonts and colors on any resume <br /> template.</p>
      </div>
      </div>
      <div className="flex justify-center">
      <button className=" rounded-md bg-purple-600 text-white p-3 my-8 ">Get Started Now</button>

      </div>
    </div>
  );
}
