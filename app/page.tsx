'use client';

import { Button } from '@heroui/react';
import { TypeAnimation } from 'react-type-animation';
import { NavBar } from './components/NavBar';

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-5xl px-4">
        <section className="flex min-h-[calc(70vh-4rem)] flex-col justify-center">
          <h3 className="font-serif text-blue-500">HEY YO! This is</h3>
          <h1 className="font-serif text-6xl font-bold">Le Zhang</h1>
          <TypeAnimation
            sequence={[
              "I'm a data scientist.",
              2000,
              "I'm a bioinformatician.",
              2000,
              "I'm a researcher.",
              2000,
              "I'm a web developer.",
              2000,
            ]}
            repeat={Infinity}
            className="block pt-3 font-serif text-4xl text-red-400"
          />
          <Button
            variant="primary"
            className="mt-6 w-fit"
            onPress={() =>
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Know More
          </Button>
        </section>

        <section id="about" className="py-20">
          <h2 className="font-serif text-4xl">About</h2>
          <hr className="my-4 border-t-2 border-default/40" />
          <p className="text-foreground/70">Content coming soon.</p>
        </section>
      </main>
    </>
  );
}
