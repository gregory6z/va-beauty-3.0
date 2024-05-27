import { CommentsHomeFirstPart } from "@/app/components/comments/comments"

import { Footer } from "@/app/components/footer"
import { Hero } from "./(Home)/components/Hero"
import { ServicesCarrousel } from "./(Home)/components/ServicesCarrousel"
import { Offers } from "./components/Offers"
import { AboutMe } from "./(Home)/components/AboutMe"
import { ButtonsSocialNetworks } from "./components/ButtonsSocialNetworks"
import { Faq } from "./(Home)/components/faq"
import { Testimonials } from "./components/testimonials"
import { Contact } from "./(Home)/components/contact"
import { AboutUs } from "./(Home)/components/about-us"

export default function Home() {
  return (
    <div className="bg-zinc-100">
      <Hero></Hero>
      <ServicesCarrousel />
      <AboutUs />
      {/* <HeaderHome></HeaderHome>
      <VideoContainer></VideoContainer> */}
      {/* <ServicesHome></ServicesHome> */}
      <Offers />

      {/* <Comments comments={CommentsHomeFirstPart}></Comments> */}

      <AboutMe></AboutMe>
      {/* <Comments comments={CommentsHomeSecondPart}></Comments> */}
      <Testimonials testimonials={CommentsHomeFirstPart} />
      <Contact />
      <Faq></Faq>

      <Footer></Footer>
      <ButtonsSocialNetworks></ButtonsSocialNetworks>
    </div>
  )
}
