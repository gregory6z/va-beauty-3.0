import { Header } from "../components/header"

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Header></Header>
      {children}
    </div>
  )
}
