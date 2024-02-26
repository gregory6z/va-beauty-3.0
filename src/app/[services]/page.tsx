/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Offers } from "../(Home)/components/Offers"
import { Banner } from "../components/banner"
import { Comments } from "../components/comments"
import { CommentsHome } from "../components/comments/comments"
import { ServiceHeader } from "../components/service-header"
import { ServicesContainer } from "../components/services-container"

type ParamsProps = {
  params: {
    services: string
  }
}

export default function Services({ params }: ParamsProps) {
  const category = String(params.services)

  return (
    <div className="bg-zinc-200">
      <Banner category={category} image={`/${params.services}-1.png`}></Banner>
      <ServiceHeader category="Sourcils" text="texto aleatorio"></ServiceHeader>
      <ServicesContainer category={category}></ServicesContainer>
      <Comments comments={CommentsHome}></Comments>
      <Offers />
    </div>
  )
}
