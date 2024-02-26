import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react"
import Link from "next/link"

export function ButtonsSocialNetworks() {
  return (
    <div className="bg-gray-dark-primary flex  ">
      <div className=" flex w-full gap-2 px-[1.125rem] py-6 lg:mx-auto lg:max-w-[1256px] lg:px-0   ">
        <Link href="#">
          <button className="  hover:bg-yellow-normal hover:text-background-dark-900 rounded-md bg-slate-400  p-2 transition-all duration-500">
            <Instagram className="h-8 w-8"></Instagram>
          </button>
        </Link>
        <Link href="#">
          <button className="  hover:bg-yellow-normal hover:text-background-dark-900 rounded-md bg-slate-400  p-2 transition-all duration-500">
            <Facebook className="h-8 w-8"></Facebook>
          </button>
        </Link>
        <Link href="#">
          <button className="  hover:bg-yellow-normal hover:text-background-dark-900 rounded-md bg-slate-400  p-2 transition-all duration-500">
            <Linkedin className="h-8 w-8"></Linkedin>
          </button>
        </Link>
        <Link href="#">
          <button className="  hover:bg-yellow-normal hover:text-background-dark-900 rounded-md bg-slate-400  p-2 transition-all duration-500">
            <Youtube className="h-8 w-8"></Youtube>
          </button>
        </Link>
        {/* <div className="ml-4 text-zinc-100  lg:ml-20">
          <p>Cree par:</p>
          <Link
            href="https://www.gregorypraxedes.com/"
            className="text-sky-500 underline"
          >
            Gregory.dev
          </Link>
        </div> */}
      </div>
    </div>
  )
}
