"use client"

import { unSubscribe } from "@/app/api/unSubscribe"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useTransition } from "react"
import { toast } from "sonner"

interface UnSubscribeButtonProps {
  subscriptionId: string
  stripeId: string
}

export function UnSubscribeButton({
  subscriptionId,
  stripeId,
}: UnSubscribeButtonProps) {
  const [isPending, startTransition] = useTransition()

  const router = useRouter()

  return (
    <Button
      onClick={async () => {
        startTransition(async () => {
          const success = await unSubscribe({ subscriptionId, stripeId })
          if (success) {
            router.refresh()
            toast.success("Forfait annulé")
          } else {
            toast.error("Erro ao cancelar a inscrição.")
          }
        })
      }}
      disabled={isPending}
      type="submit"
      variant="ghost"
      className=" text-red-500 hover:text-red-500"
    >
      Annuler forfait
    </Button>
  )
}
