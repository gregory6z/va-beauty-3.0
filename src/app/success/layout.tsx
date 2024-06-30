import { Header } from "../components/header"

export default function SuccessLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  )
}
