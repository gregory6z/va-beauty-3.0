import { notFound } from "next/navigation"
import { Offers } from "../components/Offers"
import { Banner } from "../components/banner"
import { SheetCart } from "../components/cart-fixed"
import { Comments } from "../components/comments"
import { CommentsHome } from "../components/comments/comments"
import { ServicesContainer } from "../components/services-container"

type ParamsProps = {
  params: {
    services: "sourcils" | "levres" | "forfaits"
  }
}

export default function Services({ params }: ParamsProps) {
  const category = String(params.services)

  if (
    category !== "sourcils" &&
    category !== "levres" &&
    category !== "forfaits"
  ) {
    notFound()
  }

  return (
    <div className=" bg-zinc-100">
      <Banner category={category} image={`/${params.services}-1.png`}></Banner>

      <ServicesContainer category={category}></ServicesContainer>
      <Comments comments={CommentsHome}></Comments>
      <Offers />
      <SheetCart />
    </div>
  )
}
