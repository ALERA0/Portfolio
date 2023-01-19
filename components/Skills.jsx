import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full ">
        <p className="text-xl tracking-widest text-[#8ad681] uppercase">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 ">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image alt='/' src='/../public/assets/skills/html.png' width={64} height={64} />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 ">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image alt='/' src='/../public/assets/skills/css.png' width={64} height={64} />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 ">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image alt='/' src='/../public/assets/skills/javascript.png' width={64} height={64} />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 ">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image alt='/' src='/../public/assets/skills/react.png' width={64} height={64} />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 ">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image alt='/' src='/../public/assets/skills/tailwind.png' width={64} height={64} />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 ">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image alt='/' src='/../public/assets/skills/firebase.png' width={64} height={64} />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3>Firebase</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 ">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image alt='/' src='/../public/assets/skills/nextjs.png' width={64} height={64} />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3>Next js</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 ">
            <div className="grid grid-cols-2 gap-4 justify-center items-center mt-1">
              <div className="m-auto">
                <Image alt='/' src='/../public/assets/skills/nestjs.png' width={114} height={114} />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3>Nest js</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;