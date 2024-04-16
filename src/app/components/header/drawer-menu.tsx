"use client"

import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer"
import { Menu } from "lucide-react"

export function DrawerMenu({ children }: { children: React.ReactNode }) {
  return (
    <Drawer direction="left">
      <DrawerTrigger className="p-4">
        <Menu className="h-8 w-8 text-zinc-100" />
      </DrawerTrigger>
      <DrawerContent>{children}</DrawerContent>
    </Drawer>
  )
}
