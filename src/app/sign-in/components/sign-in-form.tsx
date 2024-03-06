/* eslint-disable camelcase */
/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { z } from "zod"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useTransition } from "react"
import { action } from "./action"

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string(),
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

  const [pending, startTransaction] = useTransition()

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
    </form>
  )
}
