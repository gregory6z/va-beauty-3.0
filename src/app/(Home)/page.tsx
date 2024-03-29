import { ButtonsSocialNetworks } from "../components/ButtonsSocialNetworks"
import { Comments } from "../components/comments"
import {
  CommentsHomeFirstPart,
  CommentsHomeSecondPart,
} from "../components/comments/comments"

import { Footer } from "../components/footer"

import { AboutMe } from "./components/AboutMe"
import { HeaderHome } from "./components/HeaderHome"
import { Offers } from "./components/Offers"
import { ServicesHome } from "./components/ServicesHome"
import { VideoContainer } from "./components/VideoContainer"

export default function Home() {
  return (
    <>
      <HeaderHome></HeaderHome>
      <VideoContainer></VideoContainer>
      <ServicesHome></ServicesHome>
      <Offers />
      <Comments comments={CommentsHomeFirstPart}></Comments>
      <AboutMe></AboutMe>
      <Comments comments={CommentsHomeSecondPart}></Comments>
      <Footer></Footer>
      <ButtonsSocialNetworks></ButtonsSocialNetworks>
    </>
  )
}
