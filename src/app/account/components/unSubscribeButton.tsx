"use client"

import { unSubscribe } from "@/app/api/unSubscribe"
import { Button } from "@/components/ui/button"
import { useTransition } from "react"

interface UnSubscribeButtonProps {
  subscriptionId: string
  stripeId: string
}

export function UnSubscribeButton({
  subscriptionId,
  stripeId,
}: UnSubscribeButtonProps) {
  const [isPending, startTransition] = useTransition()

  return (
    <Button
      onClick={() => {
        startTransition(() => {
          unSubscribe({ subscriptionId, stripeId })
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
