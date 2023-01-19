import React from "react";
import { AiFillMail, AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center  ">
      <div className=" flex max-w-[1240px] w-full h-full mx-auto p-2 justify-center items-center ">
        <div className="">
            <p className="uppercase text-sm tracking-widest text-gray-600">Lets Build something together</p>
            <h1 className="py-4 text-gray-700">Hi,I'm <span className="text-[#8ad681]">Alp Eren</span> </h1>
            <h1 className="py-2 text-gray-700">A Front-End Developer</h1>
            <p className="py-4 text-gray-600 max-w-[70%] m-auto  ">I'm Front-end developer specializing in building (and occasionally designing) exceptional experiences. Currently, I'm focused on building responsive front-end web applications while learning back-end technologies.</p>
            <div className="flex items-center justify-between max-w-[330px] m-auto py-4 ">
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaLinkedinIn/>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaGithub/>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <AiOutlineMail/>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <BsFillPersonLinesFill/>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
