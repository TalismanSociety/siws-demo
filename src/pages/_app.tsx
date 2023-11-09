import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { Toaster } from "@/components/ui/toaster"
import { inter, unbounded } from "@/components/fonts"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${unbounded.variable} ${inter.className}`}>
      <Component {...pageProps} />
      <Toaster />
    </div>
  )
}
