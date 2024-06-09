import { Header } from "../components/header"

export default function AccountLayout({
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
