/* eslint-disable camelcase */
import type { Metadata } from "next"
import "./globals.css"
import { Montserrat } from "next/font/google"
import { Header } from "./components/header"
import { StoreInitializer } from "./stores/store.initializer"
import { FetchServices } from "./components/fetch-services"
import { Toaster } from "sonner"
import { ScrollUp } from "@/components/scroll-up"
import { GoogleAnalytics } from "@next/third-parties/google"

export const metadata: Metadata = {
  title:
    "VA BEAUTY | Réservez vos soins de visage chez Va Beauty - Expertise et Bien-être",
  description:
    "Découvrez Va Beauty, votre destination idéale pour des soins de visage, sourcils et lèvres professionnels. Réservez en ligne vos traitements de beauté personnalisés pour une peau éclatante et des traits sublimés. Nos esthéticiennes qualifiées utilisent des produits de haute qualité pour vous offrir une expérience de soin unique. Spécialistes en soins des sourcils et lèvres, nous proposons des services de microblading, coloration et soins hydratants. Profitez également de nos services de nettoyage de peau, hydratation intense, traitements anti-âge et bien plus. Prenez rendez-vous dès aujourd'hui et révélez la beauté naturelle de votre peau avec Va Beauty.",
}

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "800", "900", "500", "600", "700"],
  variable: "--font-montserrat",
})

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { services } = await FetchServices()
  return (
    <html lang="en">
      <body
        className={` ${montserrat.variable} bg-[#09090B] font-sans  font-[500] antialiased `}
      >
        <StoreInitializer allServices={services} />
        <Header />
        <Toaster richColors className="mb-10 lg:mb-10" duration={1500} />
        <ScrollUp />
        <GoogleAnalytics gaId="G-JC9B9C26M0" />

        {children}
      </body>
    </html>
  )
}
