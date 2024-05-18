"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import React from "react"

interface navLinkProps {
  href: string
  children: React.ReactElement
  className?: string
}

const NavLink = ({ href, children, className }: navLinkProps) => {
  const pathname = usePathname()

  className = className || ""
  if (pathname === href) {
    className = `${className} font-black lg:border-b-2 lg:border-zinc-50 ` // Adicione qualquer classe CSS para destacar o link ativo
  } else {
    className = `${className} hover:text-zinc-400 transition-all   ` // Adicione a classe de hover apenas se não for o link ativo
  }

  return (
    <Link href={`${href}/#`}>
      {React.cloneElement(children, {
        className: `${className} pointer flex lg:h-[6.1rem] w-full items-center   lg:px-2`,
      })}
    </Link>
  )
}

export default NavLink
