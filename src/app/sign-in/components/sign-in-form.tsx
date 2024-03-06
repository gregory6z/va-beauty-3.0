/* eslint-disable camelcase */
/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { z } from "zod"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect, useTransition } from "react"
import { action } from "./action"
import { ErrorAuthenticateDisplay } from "./errorAuthenticate"
import { useRouter } from "next/navigation"
import { parseCookies } from "nookies"

const signInSchema = z.object({
  email: z
    .string()
    .email({ message: "Por favor, insira um endereço de e-mail válido." }),
  password: z
    .string()
    .min(4, { message: "A senha deve ter no mínimo 4 caracteres." }),
})

export type SignInSchema = z.infer<typeof signInSchema>

export function SignInForm() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  // Specify type for useState

  const {
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signInSchema),
  })

  const router = useRouter()

  const [pending, startTransaction] = useTransition()

  const token = parseCookies()["@VaBeauty:token"]

  useEffect(() => {
    if (token) {
      router.push("/")
    }
  }, [token, router])

  return (
    <form
      action={(formData) => startTransaction(() => action(formData))}
      className="flex flex-col gap-3"
    >
      <Input
        type="email"
        placeholder="votre-email@email.com"
        required
        {...register("email")}
      />
      {errors.email && (
        <p className="text-sm text-red-500">{errors.root?.message}</p>
      )}
      <Input
        type="password"
        placeholder="mot de passe"
        minLength={4}
        required
        {...register("password")}
      />
      <Button
        size="lg"
        type="submit"
        disabled={pending}
        className="mt-4 w-full "
      >
        Se connecter avec votre adresse e-mail
      </Button>
      <ErrorAuthenticateDisplay />
    </form>
  )
}
