/* eslint-disable camelcase */
/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { useState } from "react" // Import useState hook
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { z } from "zod"
import { useTransition } from "react"
import { action, type FormData } from "./action"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

export type SignInSchema = z.infer<typeof signInSchema>

export function SignInForm() {
  const [isPending, startTransition] = useTransition()

  // Specify type for useState

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
  })

  const handleAuthenticate = (formData: SignInSchema) => {
    console.log(formData)
    startTransition(() => {
      action(formData)
    })
  }

  return (
    <form
      onSubmit={handleSubmit(handleAuthenticate)}
      className="flex flex-col gap-3"
    >
      <Input
        type="email"
        placeholder="votre-email@email.com"
        {...register("email")}
      />
      <Input
        type="password"
        placeholder="mot de passe"
        {...register("password")}
      />
      <Button
        size="lg"
        type="submit"
        disabled={isSubmitting}
        className="mt-4 w-full "
      >
        Se connecter avec votre adresse e-mail
      </Button>
      {/* {error && <p className="text-red-500">{error}</p>} */}
    </form>
  )
}
