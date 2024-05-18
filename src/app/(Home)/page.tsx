import { ButtonsSocialNetworks } from "../components/ButtonsSocialNetworks"
import { Comments } from "../components/comments"
import {
  CommentsHomeFirstPart,
  CommentsHomeSecondPart,
} from "../components/comments/comments"

import { Footer } from "../components/footer"
import { AboutMe } from "./components/AboutMe"
import { Hero } from "./components/Hero"
import { Offers } from "./components/Offers"
import { ServicesCarrousel } from "./components/ServicesCarrousel"

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
