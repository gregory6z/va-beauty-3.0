/* eslint-disable camelcase */
/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import toast, { Toaster } from "react-hot-toast"

import { z } from "zod"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { action } from "./action"
import { Label } from "@/components/ui/label"

import { useFormState, useFormStatus } from "react-dom"
import { parseCookies } from "nookies"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export const signOutSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: "deve contar no minimo tres um caractere" }),
    email: z
      .string()
      .email({ message: "Por favor, insira um endereço de e-mail válido." }),
    password: z
      .string()
      .min(4, { message: "A senha deve ter no mínimo 4 caracteres." }),
    confirm: z.string(),
  })
  .refine((data) => data.password === data.confirm, {
    message: "As senhas não coincidem",
    path: ["passwordConfirmation"],
  })

export type SignOutSchema = z.infer<typeof signOutSchema>

const initialState = {
  message: "",
}

export function SignOutForm() {
  const { register } = useForm({
    resolver: zodResolver(signOutSchema),
  })

  const router = useRouter()

  const { pending } = useFormStatus()

  const [state, formAction] = useFormState(action, initialState)

  if (state?.message) {
    toast.error("Erreur lors de la création du compte")
  }

  const token = parseCookies()["@VaBeauty:token"]

  useEffect(() => {
    if (state?.success) {
      toast.success("Compte créé avec succès")
      router.push(`/sign-in?email=${encodeURIComponent(state.email)}`)
    }
    if (token) {
      router.push("/")
    }
  }, [token, state, router])

  return (
    <form action={formAction} className="flex  flex-col gap-3">
      <Label>Nom</Label>
      <Input
        type="name"
        placeholder="votre name"
        required
        {...register("name")}
        minLength={3}
      />
      <Label>E-mail</Label>
      <Input
        type="email"
        placeholder="votre-email@email.com"
        required
        {...register("email")}
      />

      <Label>Mot de passe</Label>
      <Input
        type="password"
        placeholder="votre mot de passe"
        minLength={4}
        required
        {...register("password")}
      />
      <Input
        type="password"
        placeholder="Confirmez votre mot de passe"
        minLength={4}
        required
        {...register("confirm")}
      />

      {}

      <Button
        size="lg"
        disabled={pending}
        type="submit"
        className="mt-4 w-full  "
      >
        Se connecter avec votre adresse e-mail
      </Button>

      {/* <p className=" text-red-500"> {state?.message}</p> */}

      <p className="text-red-500">{state?.message}</p>
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
