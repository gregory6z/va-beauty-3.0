"use client"
/* eslint-disable react-hooks/rules-of-hooks */

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

const signInSchema = z.object({
  email: z.string().email({}),
  password: z.string(),
})

type SignInSchema = z.infer<typeof signInSchema>

export function SignInForm() {
  const {
    register,
    handleSubmit,

    formState: { isSubmitting, errors },
  } = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
  })

  function handleAuthenticate(data: SignInSchema) {
    console.log(data)
    console.log(errors)
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
      ></Input>
      <Input
        type="password"
        placeholder="mot de passe"
        {...register("password")}
      ></Input>
      <Button
        size={"lg"}
        type="submit"
        disabled={isSubmitting}
        className="mt-4 w-full "
      >
        Se connecter avec votre adresse e-mail
      </Button>
    </form>
  )
}
