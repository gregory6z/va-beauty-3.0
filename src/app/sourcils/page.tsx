import { Offers } from "../(Home)/components/Offers"
import { Banner } from "../components/banner"
import { Comments } from "../components/comments"
import { CommentsHome } from "../components/comments/comments"
import { ServiceHeader } from "../components/service-header"
import { ServicesContainer } from "../components/services-container"

export default function Sourcils() {
  return (
    <div className="bg-neutral-200">
      <Banner image={"/sourcils-1.png"}>
        Sublimez votre beauté naturelle en sculptant vos sourcils avec
        perfection.
      </Banner>
      <ServiceHeader category="Sourcils" text="texto aleatorio"></ServiceHeader>

      <ServicesContainer></ServicesContainer>
      <Comments comments={CommentsHome}></Comments>
      <Offers />
    </div>
  )
}
