'use client';
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
          <div className='w-1/2 self-center' style={{backgroundColor: 'teal'}}>sdfsa sdsaf </div>
          <div className='w-1/2 self-center invisible md:visible lg:visible' style={{backgroundColor: 'tan'}}>sdsd </div>
        </section>
        <section className='flex flex-row max-w-5xl flex-wrap items-stretch justify-center gap-10' style={{height: '200px'}}>
          <h1 className='text-4xl'>Hello World</h1>
          <h1 className='text-4xl'>Hello World</h1>
        </section>
      </main>
    </>
  )
}
