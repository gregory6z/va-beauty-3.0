/* eslint-disable camelcase */
import Link from "next/link"
import Image from "next/image"

export interface ImagePost {
  dimensions: {
    width: number
    height: number
  }
  alt: string | null
  copyright: string | null
  url: string
  id: string
  edit: {
    x: number
    y: number
    zoom: number
    background: string
  }
}

interface PostProps {
  uid: string
  title: string
  image: ImagePost
}

export default function PostCard({ title, image, uid }: PostProps) {
  return (
    <Link
      href={"/blog/" + uid}
      className="group rounded-lg transition-transform hover:scale-105"
    >
      <div className=" h-full  rounded bg-white transition-colors group-hover:border-primary group-hover:bg-gray-50">
        <div className="relative">
          <Image
            width={336}
            height={140}
            src={image.url}
            alt={""}
            className="h-full w-full rounded-t-lg object-cover"
          ></Image>
        </div>
        <div className="relative space-y-4 px-4 pb-4 pt-3">
          <p className="flex w-fit items-center gap-2 rounded-lg bg-gradient-to-r   px-4 py-1 text-sm font-semibold uppercase text-black ">
            sourcils
          </p>
          <h1 className="text-xl font-medium text-foreground/80">{title}</h1>
          <p>VA BEAUTY</p>
        </div>
      </div>
    </Link>
  )
}
