import { client } from "@/lib/prismic"

import PostCard from "./components/post-card"
import * as prismicH from "@prismicio/helpers"
import { HighlightedPost } from "./components/highlighted-post"

export default async function Blog() {
  const response = await client.getAllByType("post")

  const allPosts = response.map((post) => {
    return {
      uid: post.uid,
      title: prismicH.asText(post.data.title),
      content: post.data.content,
      image: post.data.image_blog,
      date: post.first_publication_date,
      tag: post.tags,
    }
  })

  const highLightedPost = allPosts.filter((post) => {
    return post.tag.includes("evidencia")
  })

  const posts = allPosts.filter((post) => !post.tag.includes("evidencia"))

  return (
    <div className=" bg-zinc-900">
      <div className="bg-zinc-100">
        <section className=" bg-gray-300 lg:mt-4  ">
          <div className="mx-auto max-w-[624px] px-[10px]  py-20 max-lg:pt-10  lg:max-w-[1248px]">
            <div className="">
              <HighlightedPost
                uid={String(highLightedPost[0].uid)}
                title={String(highLightedPost[0].title)}
                content={highLightedPost[0].content}
                image={highLightedPost[0].image}
              />
            </div>
          </div>
        </section>
        <main className="mx-auto max-w-[1248px]  px-[10px] py-20  max-lg:pt-10">
          <header className="">
            <h1 className="mt-4 text-4xl">Nos derniers articles</h1>
          </header>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard
                key={post.uid}
                uid={String(post.uid)}
                image={post.image}
                title={String(post.title)}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
