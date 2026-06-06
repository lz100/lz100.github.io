"use client";
import type { AppProps } from 'next/app'
import './styles/globals.css'
import { NextUIProvider } from '@nextui-org/react'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
        <Component {...pageProps} />
    </NextUIProvider>
  );
}