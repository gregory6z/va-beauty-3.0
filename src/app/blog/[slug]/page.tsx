import { PrismicRichText } from "@prismicio/react"
import { client } from "@/lib/prismic"

import Image from "next/image"

// import { BlogPost, client } from "@/lib/prismic"

interface ParamsProps {
  params: {
    slug: string
  }
}

export default async function PostPage({ params }: ParamsProps) {
  const response = await client.getByUID("post", params.slug)

  const post = {
    uid: response.uid,
    title: response.data.title,
    content: response.data.content,
    image: response.data.image_blog.url,
  }

  return (
    <div className="bg-gray-50">
      <section className=" flex h-full w-full flex-col ">
        <div className="mx-auto -mb-48 h-full w-full bg-gray-300 px-6 py-20 pb-48 lg:-mb-[20rem] lg:pb-[20rem] ">
          <div className="mx-auto max-w-3xl">
            <div className="text-center text-4xl text-black  ">
              <PrismicRichText field={response.data.title} />
            </div>
          </div>
        </div>
        <div className=" mx-auto my-8  w-full  max-w-5xl px-6 md:px-8">
          <Image
            width={1080}
            height={566}
            src={post.image}
            className="aspect-video w-full rounded-lg object-cover"
            alt={""}
          ></Image>
        </div>
      </section>
      <main className="mx-auto max-w-4xl px-6 py-8 pb-20  lg:px-8 ">
        {/* <PrismicRichText
          field={post.content}
          fallback={<p>No content</p>}
          components={{
            
          }}
        /> */}

        <div className="prose">
          <PrismicRichText
            field={post.content}
            components={{
              heading3: ({ children }) => (
                <h3 className="mt-8 text-pretty text-3xl">{children}</h3>
              ),
              heading4: ({ children }) => (
                <h4 className="mt-8 text-pretty text-2xl">{children}</h4>
              ),

              paragraph: ({ children }) => (
                <p className="mt-4 lg:text-lg">{children}</p>
              ),
              oListItem: ({ children }) => (
                <li className="ml-6 mt-4 list-disc lg:ml-12 ">{children}</li>
              ),
            }}
          />
        </div>
      </main>
    </div>
  )
}
