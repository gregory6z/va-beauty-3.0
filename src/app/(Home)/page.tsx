import { ButtonsSocialNetworks } from "../components/ButtonsSocialNetworks"
import { Comments } from "../components/comments"
import { CommentsHome } from "../components/comments/comments"
import { Footer } from "../components/footer"
import { AboutMe } from "./components/AboutMe"
import { HeaderHome } from "./components/HeaderHome"
import { ServicesHome } from "./components/ServicesHome"
import { VideoContainer } from "./components/VideoContainer"

export default function Home() {
  return (
    <>
      <HeaderHome></HeaderHome>
      <VideoContainer></VideoContainer>
      <ServicesHome></ServicesHome>
      <Comments comments={CommentsHome}></Comments>
      <AboutMe></AboutMe>
      <Footer></Footer>
      <ButtonsSocialNetworks></ButtonsSocialNetworks>
    </>
  )
}
