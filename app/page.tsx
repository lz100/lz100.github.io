'use client';
import { TypeAnimation } from "react-type-animation";
import { NavBar } from "./components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar/>
      <main className="flex flex-col flex-wrap items-stretch justify-center content-center">
        <section 
        className='flex flex-col lg:flex-row md:flex-row max-w-5xl gap-1 w-full max-w-5xl'
        style={{height: 'calc(100vh - 64px)'}}
        >
          <div className='w-1/2 self-center' style={{backgroundColor: ''}}>
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
                ]}
                repeat={Infinity}
                className="max-[640px]:text-xl max-[768px]:text-center text-4xl text-red-400 font-serif pt-3 block"
            />
          </div>
          <div className='w-1/2 self-center invisible md:visible lg:visible' style={{backgroundColor: 'tan'}}>
            this site is under construction
          </div>
        </section>
        <section className='flex flex-row max-w-5xl flex-wrap items-stretch justify-center gap-10' style={{height: '200px'}}>
          <h1 className='text-4xl'>Hello World</h1>
          <h1 className='text-4xl'>Hello World</h1>
        </section>
      </main>
    </>
  )
}
