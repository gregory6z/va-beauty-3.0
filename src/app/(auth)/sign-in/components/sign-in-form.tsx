/* eslint-disable camelcase */
/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import toast, { Toaster } from "react-hot-toast"

import { z } from "zod"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect } from "react"
import { action } from "./action"
import { useRouter } from "next/navigation"
import { parseCookies } from "nookies"
import { useFormState, useFormStatus } from "react-dom"

const signInSchema = z.object({
  email: z
    .string()
    .email({ message: "Por favor, insira um endereço de e-mail válido." }),
  password: z
    .string()
    .min(4, { message: "A senha deve ter no mínimo 4 caracteres." }),
})

export type SignInSchema = z.infer<typeof signInSchema>

// type QueryParams = {
//   email?: string
// }

const initialState = {
  message: "",
  success: undefined,
}

export function SignInForm() {
  const {
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signInSchema),
  })

  const router = useRouter()

  const { pending } = useFormStatus()

  const [state, formAction] = useFormState(action, initialState)

  if (state?.message) {
    toast.error("Erreur de connexion")
  }

  const token = parseCookies()["@VaBeauty:token"]

  useEffect(() => {
    if (state?.success) {
      toast.success("Connected")
    }
    if (token) {
      router.push("/")
    }
  }, [token, router, state])

  return (
    <form action={formAction} className="flex  flex-col gap-3">
      <div className="flex flex-col ">
        <Input
          type="email"
          placeholder="exemple@email.com"
          required
          {...register("email")}
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.root?.message}</p>
        )}
      </div>

      <div>
        <Input
          type="password"
          placeholder="mot de passe"
          minLength={4}
          required
          {...register("password")}
        />
      </div>
      <p className="text-right text-sm text-zinc-900/60">
        Mot de passe oublié ?
      </p>

      <Button
        size="lg"
        disabled={pending}
        type="submit"
        className="mt-4 w-full  "
      >
        Se connecter avec votre adresse e-mail
      </Button>

      <p className=" text-red-500"> {state?.message}</p>

      <Toaster
        position="top-right"
        containerStyle={{
          right: 100,
          top: 100,
        }}
      />
    </form>
  )
}