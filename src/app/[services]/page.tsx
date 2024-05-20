import { notFound } from "next/navigation"
import { Offers } from "../components/Offers"
import { Banner } from "../components/banner"
import { SheetCart } from "../components/cart-fixed"
import { Comments } from "../components/comments"
import { CommentsHome } from "../components/comments/comments"
import { ServicesContainer } from "../components/services-container"
import { Metadata } from "next"

export const metadata: Metadata = {
  title:
    "Services d'Esthétique | Réservez vos soins pour les sourcils et les lèvres chez Va Beauty - Expertise et Bien-être",
  description:
    "Bienvenue chez Va Beauty, votre espace dédié à l'esthétique brésilienne de haute qualité. Nos professionnels qualifiés offrent une gamme de services pour les sourcils et les lèvres, y compris le microblading, la coloration et les soins hydratants. Nos traitements sont personnalisés pour répondre à vos besoins spécifiques, en utilisant des techniques brésiliennes innovantes pour sublimer votre beauté naturelle. Profitez de notre expertise en soins de la peau, avec des services de nettoyage, d'hydratation intense et de traitements anti-âge. Réservez dès aujourd'hui votre rendez-vous et découvrez la différence de Va Beauty.",
}

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
    <main className=" bg-zinc-100">
      <Banner category={category} image={`/${params.services}-1.png`}></Banner>

      <ServicesContainer category={category}></ServicesContainer>
      <Comments comments={CommentsHome}></Comments>
      <Offers />
      <SheetCart />
    </main>
  )
}
