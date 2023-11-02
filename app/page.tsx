'use client';
import { TypeAnimation } from "react-type-animation";
import { NavBar } from "./components/NavBar";
import { Button } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Toc from "./components/Toc";

export default function Home() {
  const [isReadMoreHover, setIsReadMoreHover] = useState(false);


  return (
    <>
      <NavBar/>
      <main className="flex flex-col flex-wrap items-stretch justify-center content-center">
        <section 
        className='flex flex-col lg:flex-row md:flex-row gap-1 w-full max-w-5xl'
        style={{height: 'calc(70vh - 64px)'}}
        >
          <div className='w-1/2 self-center'>
            <h3 className="text-blue-500 font-serif">
              HEY YO! This is
            </h3>
            <h1 className="max-[640px]:text-2xl max-[768px]:text-center text-6xl font-serif font-bold text-gray-800">
              Le Zhang
            </h1>
            <TypeAnimation
                sequence={[
                  "I'm a data scientist.", 2000,
                  "I'm a bioinformatician.", 2000,
                  "I'm a researcher.", 2000,
                  "I'm a web developer.", 2000,
                ]}
                repeat={Infinity}
                className="max-[640px]:text-xl max-[768px]:text-center text-4xl text-red-400 font-serif pt-3 block"
            />
            <Button
              className={`
                mt-5 bg-gradient-to-tr from-blue-300 to-purple-300 text-white shadow-lg
                hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:shadow-xl transition-background duration-2000 ease-in-out
                max-[640px]:w-full max-[768px]:w-full max-[768px]:text-sm
              `}
              radius="full"
              onMouseEnter={() => setIsReadMoreHover(true)}
              onMouseLeave={() => setIsReadMoreHover(false)}
              onClick={() => {window.location.href = '#about-me';}}
            >
              Know More <FontAwesomeIcon icon={faAnglesDown} className='ml-2' beat={isReadMoreHover}/>
            </Button>
          </div>
          <div className='w-1/2 self-center invisible md:visible lg:visible' style={{backgroundColor: 'tan'}}>
            this site is under construction
          </div>
        </section>
        <div className="flex flex-row m-4 max-w-5xl">
          <div className="w-0 lg:w-full lg:max-w-[8rem] invisible lg:visible ml-[-15px] mr-[15px]">
            <Toc exclude={['Le Zhang']}/>
          </div>
          <div className="flex flex-col">
            <section id="about-me" className='flex max-w-full flex-wrap items-start justify-center content-start' style={{height: '1000px'}}>
              <h1 className='text-4xl pb-5 font-serif'>About Me</h1>
              <hr className='w-full border-t-4'/>
              <p className='text-xl pt-5 indent-8'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur ratione officia vitae architecto aspernatur cupiditate ullam aliquid deleniti sit nisi alias qui facere ad, libero magni amet voluptatibus necessitatibus laudantium?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur ratione officia vitae architecto aspernatur cupiditate ullam aliquid deleniti sit nisi alias qui facere ad, libero magni amet voluptatibus necessitatibus laudantium?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur ratione officia vitae architecto aspernatur cupiditate ullam aliquid deleniti sit nisi alias qui facere ad, libero magni amet voluptatibus necessitatibus laudantium?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur ratione officia vitae architecto aspernatur cupiditate ullam aliquid deleniti sit nisi alias qui facere ad, libero magni amet voluptatibus necessitatibus laudantium?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur ratione officia vitae architecto aspernatur cupiditate ullam aliquid deleniti sit nisi alias qui facere ad, libero magni amet voluptatibus necessitatibus laudantium?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur ratione officia vitae architecto aspernatur cupiditate ullam aliquid deleniti sit nisi alias qui facere ad, libero magni amet voluptatibus necessitatibus laudantium?
              </p>
            </section>
            <section id="about-me" className='flex  max-w-5xl flex-wrap items-start justify-center content-start' style={{height: '1000px'}}>
              <h1 className='text-4xl pb-5 font-serif'>About Me</h1>
              <hr className='w-full border-t-4'/>
            </section>
          </div>
        </div>
      </main>
    </>
  )
}
