"use client"
import { actionChecout } from "@/app/appointment/choose-time/action"
import { Button } from "@/components/ui/button"
import { parseCookies } from "nookies"
import { useTransition } from "react"

export function SignInButton() {
  const cookies = parseCookies()
  const AuthenticateToken = cookies["@VaBeauty:token"]
  const dateAppointment = cookies["@VaBeauty:date"]

  const [isPending, startTransition] = useTransition()

  const handleSignIn = async () => {
    if (AuthenticateToken && dateAppointment) {
      startTransition(() => {
        actionChecout()
      })
    }
  }

  return (
    <Button
      size="lg"
      onClick={handleSignIn}
      disabled={isPending}
      type="submit"
      className="mt-4 w-full  "
    >
      Se connecter avec votre adresse e-mail
    </Button>
  )
}
