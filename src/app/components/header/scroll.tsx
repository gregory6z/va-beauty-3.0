"use client"

import { ReactNode, useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export function HeaderProvider({ children }: { children: ReactNode }) {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [isHidden, setIsHidden] = useState(false)

  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = scrollY
      setIsHidden(currentScrollPos > prevScrollPos && currentScrollPos > 100)
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [prevScrollPos, pathname])

  // useEffect(() => {
  //   setOpen(false)
  // }, [pathname])

  // function closeModal() {
  //   setOpen(false)
  // }

  return (
    <div
      className={` sticky left-0 top-0 z-[100] flex h-[4rem]  w-full   items-center border-b border-solid border-gray-800  duration-700 ease-in-out   lg:h-[5rem]  ${
        isHidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      {children}
    </div>
  )
}
