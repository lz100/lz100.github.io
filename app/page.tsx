'use client';
import { NavBar } from "./components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar/>
      <main className=' flex flex-col items-center justify-center min-h-screen py-2'>
        <h1>Hello</h1>
      </main>
    </>
  )
}
