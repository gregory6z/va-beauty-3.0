import { Sidebar } from "./components/sidebar"

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
  sheet: React.ReactNode
}>) {
  return (
    <div className=" flex h-screen   w-full bg-white  ">
      <div className="lg:min-w-[380px]">
        <Sidebar />
      </div>
      <div className="flex-grow lg:w-auto">{children}</div>
    </div>
  )
}
