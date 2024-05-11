/* eslint-disable camelcase */
import type { Metadata } from "next"
import "./globals.css"
import { Montserrat } from "next/font/google"
import { Header } from "./components/header"
import { StoreInitializer } from "./stores/store.initializer"
import { FetchServices } from "./components/fetch-services"
import { Toaster } from "sonner"

export const metadata: Metadata = {
  title: " Create Next App",
  description: "Generated by create next app",
}

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
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
      <body className={` ${montserrat.variable} bg-[#09090B] font-sans `}>
        <StoreInitializer allServices={services} />
        <Header />
        <Toaster richColors className="mb-10 lg:mb-10" duration={1500} />

        {children}
      </body>
    </html>
  )
}
