"use client"

import { Button } from "@/components/ui/button"
import { toast } from "sonner"

export function ButtonDisconnect() {
  return (
    <Button
      onClick={() => toast("deconnection en cours...", { duration: 1000 })}
      variant="link"
      className=" hidden text-lg text-rose-400 lg:block"
    >
      Déconnexion
    </Button>
  )
}
