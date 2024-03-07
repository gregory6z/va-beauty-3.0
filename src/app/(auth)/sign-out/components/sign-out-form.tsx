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
import { useFormState, useFormStatus } from "react-dom"

import { ErrorMessage } from "@hookform/error-message"

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
    passwordConfirmation: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "As senhas não coincidem",
    path: ["passwordConfirmation"],
  })

export type SignOutSchema = z.infer<typeof signOutSchema>

const initialState = {
  message: "",
  success: undefined,
}

export function SignOutForm() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  // Specify type for useState

  const {
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signOutSchema),
  })

  console.log(errors)

  // const router = useRouter()

  const { pending } = useFormStatus()

  const [state, formAction] = useFormState(action, initialState)

  if (state?.message) {
    toast.error("Erreur de connexion")
  }

  // const token = parseCookies()["@VaBeauty:token"]

  // useEffect(() => {
  //   if (state?.success) {
  //     toast.success("Connected")
  //   }
  //   if (token) {
  //     router.push("/")
  //   }
  // }, [token, router, state])

  return (
    <form action={formAction} className="flex  flex-col gap-3">
      <Input
        type="name"
        placeholder="votre name"
        required
        {...register("name")}
        minLength={3}
      />
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
        placeholder="Mot de passe"
        minLength={4}
        required
        {...register("password")}
      />
      <Input
        type="password"
        placeholder="Confirmez votre mot de passe"
        minLength={4}
        required
        {...register("password")}
      />
      <Button
        size="lg"
        disabled={pending}
        type="submit"
        className="mt-4 w-full  "
      >
        Se connecter avec votre adresse e-mail
      </Button>

      <p className=" text-red-500"> {state?.message}</p>

      <ErrorMessage errors={errors} name="passwordConfirmation" />

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
