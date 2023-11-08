import { Inter } from "next/font/google"
import { Demo } from "../components/demo"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center py-24 px-4 lg:px-24 gap-8 ${inter.className}`}
    >
      <div className="w-full max-w-4xl flex gap-4 flex-col lg:flex-row items-center lg:items-start">
        <div className="w-full p-4 flex flex-col items-center lg:items-start">
          <h1 className="text-white text-xl font-semibold">Sign-In with Substrate Example</h1>
        </div>
        <div className="w-full max-w-[380px]">
          <Demo />
        </div>
      </div>
    </main>
  )
}
