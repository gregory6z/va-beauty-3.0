import { Comments } from "@/app/components/comments"
import {
  CommentsHomeFirstPart,
  CommentsHomeSecondPart,
} from "@/app/components/comments/comments"

import { Footer } from "@/app/components/footer"
import { Hero } from "./(Home)/components/Hero"
import { ServicesCarrousel } from "./(Home)/components/ServicesCarrousel"
import { Offers } from "./components/Offers"
import { AboutMe } from "./(Home)/components/AboutMe"
import { ButtonsSocialNetworks } from "./components/ButtonsSocialNetworks"

export default function Home() {
  return (
    <div className="bg-zinc-100">
      <Hero></Hero>
      <ServicesCarrousel />
      {/* <HeaderHome></HeaderHome>
      <VideoContainer></VideoContainer> */}
      {/* <ServicesHome></ServicesHome> */}
      <Offers />

      <Comments comments={CommentsHomeFirstPart}></Comments>

      <AboutMe></AboutMe>
      <Comments comments={CommentsHomeSecondPart}></Comments>
      <Footer></Footer>
      <ButtonsSocialNetworks></ButtonsSocialNetworks>
    </div>
  )
}
