import { Quote } from "lucide-react"
import Image from "next/image"

export interface TestimonialProps {
  name: string
  content: string
  image: string
}

export function TestimonialsCard({ name, content, image }: TestimonialProps) {
  return (
    <div className="border-1 flex h-full w-full   flex-col justify-between gap-4 rounded-sm border border-zinc-200 bg-white p-6 text-center lg:min-h-[416px] lg:p-10">
      <header className="">
        <div className="relative mx-auto  h-[116px] w-[116px] rounded-full bg-zinc-500">
          <Image
            className=" objet-cover h-full w-full rounded-full "
            src={image}
            width={116}
            height={116}
            alt={`Commentaire de l'utilisateur ${name}`}
          ></Image>
          <div className="absolute right-0 top-0 flex h-[32px] w-[32px] items-center justify-center rounded-full bg-black text-white">
            <Quote width={16} height={16} />
          </div>
        </div>
      </header>
      <main>
        <p className="text-pretty  text-left text-sm  text-zinc-900/60  lg:min-h-[300px] lg:pt-8">
          {content}
        </p>
      </main>
      <footer>
        <strong className="text-lg">{name}</strong>
      </footer>
    </div>
  )
}
