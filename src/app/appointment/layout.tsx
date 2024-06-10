import { Header } from "../components/header"

export default function AppointmentLayout({
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
