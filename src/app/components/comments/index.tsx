import { MotionCascade } from "@/lib/framer-motion"
import Image from "next/image"

interface Comment {
  content: string
  image: string
  name: string
}

export interface CommentsProps {
  comments: Comment[]
}

export function Comments({ comments }: CommentsProps) {
  return (
    <div className="flex h-full w-full flex-col gap-16 bg-white py-32 lg:my-0 lg:min-h-screen lg:items-center lg:justify-center lg:gap-20 ">
      {comments.map((comment) => {
        return (
          <MotionCascade
            key={comment.content}
            className="flex h-full w-full flex-col gap-8  px-8 lg:mx-auto lg:max-w-[1080px] lg:flex-row lg:items-center  lg:gap-10"
          >
            <div className="h-[180px]   max-w-[180px] bg-slate-500    lg:h-[280px]  lg:min-w-[280px]">
              <Image
                className=" h-full w-full "
                src={comment.image}
                width={280}
                height={280}
                alt={""}
              ></Image>
            </div>
            <div className="ml-8 flex flex-col gap-4 lg:gap-4">
              <p className=" order-2 text-pretty text-base lg:order-1 lg:text-left lg:text-xl">
                &#34;
                {comment.content}&#34;
              </p>
              <strong className="order-1 text-xl lg:order-2">
                {comment.name}
              </strong>
            </div>
          </MotionCascade>
        )
      })}
    </div>
  )
}
