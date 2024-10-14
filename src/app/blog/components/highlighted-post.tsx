import { Button } from "@/components/ui/button"
import { ArrowUpRight, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ImagePost } from "./post-card"

import { RichTextField } from "@prismicio/types"
import { PrismicRichText } from "@prismicio/react"

interface HighlightedPostProps {
  uid: string
  title: string
  content: RichTextField
  image: ImagePost
}

export function HighlightedPost({
  uid,
  title,
  image,
  content,
}: HighlightedPostProps) {
  return (
    <div className=" flex flex-col   ">
      <article className="relative rounded-lg bg-gradient-to-b from-zinc-200  to-zinc-200/30   p-[1px]">
        <section className=" flex h-full flex-col-reverse items-center justify-between rounded-lg bg-white md:flex-row  ">
          <Link
            href={"/blog/" + uid}
            className=" group flex size-full max-w-[456px] flex-col space-y-4   p-6  lg:p-16"
          >
            <p className="flex w-fit items-center gap-2 rounded-lg bg-gradient-to-r   px-4 py-1 text-sm font-semibold uppercase text-black ">
              <Sparkles /> En évidence
            </p>
            <h1 className=" line-clamp-3 text-2xl lg:text-3xl">{title}</h1>

            <div className="line-clamp-3 text-sm font-medium text-foreground/70">
              <PrismicRichText field={content} fallback={<p>No content</p>} />
            </div>

            <Button className="flex w-fit gap-1 group-hover:bg-zinc-900/80">
              LIRE PLUS <ArrowUpRight className="text-zinc-200" />
            </Button>
          </Link>
          <div className="flex aspect-video w-full   object-cover lg:rounded-r-lg">
            <Image
              src={image.url}
              width={755}
              height={425}
              className=" h-full w-full rounded-r-lg object-cover"
              fetchPriority="high"
              alt="Illustration de l'article"
            ></Image>
          </div>
        </section>
      </article>
    </div>
  )
}
