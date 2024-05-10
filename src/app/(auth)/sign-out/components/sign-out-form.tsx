/* eslint-disable camelcase */
/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Toaster } from "react-hot-toast"

import { z } from "zod"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { useState, useTransition } from "react"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { CreateAccount } from "@/app/api/create-account"
import { useRouter } from "next/navigation"
// import { CreateAccount } from "@/app/api/create-account"

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
    path: ["confirm"],
  })

export function SignOutForm() {
  const form = useForm<z.infer<typeof signOutSchema>>({
    resolver: zodResolver(signOutSchema),
  })

  const router = useRouter()

  const [error, setError] = useState("")

  const [isPending, startTransition] = useTransition()

  // const router = useRouter()

  // if (state?.message) {
  //   toast.error("Erreur lors de la création du compte")
  // }

  // const token = parseCookies()["@VaBeauty:token"]

  // useEffect(() => {
  //   if (state?.success) {
  //     toast.success("Compte créé avec succès")
  //     router.push(`/sign-in?email=${encodeURIComponent(state.email)}`)
  //   }
  //   if (token) {
  //     router.push("/")
  //   }
  // }, [token, state, router])

  async function onSubmit(values: z.infer<typeof signOutSchema>) {
    try {
      startTransition(async () => {
        const response = await CreateAccount(values)

        if (response.success) {
          router.push(`/sign-in?email=${encodeURIComponent(values.email)}`)
        }

        if (response.message) {
          setError(response.message)
        } else {
          setError(
            "Ocorreu um erro ao criar a conta. Por favor, tente novamente.",
          )

          // router.push("/account")
        }
      })
    } catch (error) {
      console.error(error)
      setError("Ocorreu um erro ao criar a conta. Por favor, tente novamente.")
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex  flex-col gap-3"
      >
        <FormField
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="name"
                  placeholder="votre name"
                  min={4} // Adiciona "pontinhos" ao placeholder
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  placeholder="votre-email@email.com"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Telephone</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  placeholder="votre-email@email.com"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mot de passe</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="password"
                  placeholder="votre mot de passe"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="confirm"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  type="password"
                  placeholder="confirmation mot de passe"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <p className="text-red-500"> {error}</p>

        <Button
          size="lg"
          disabled={isPending}
          type="submit"
          className="mt-4 w-full  "
        >
          Se connecter avec votre adresse e-mail
        </Button>

        {/* <p className=" text-red-500"> {state?.message}</p> */}

        {/* <p className="text-red-500">{state?.message}</p> */}
        <Toaster
          position="top-right"
          containerStyle={{
            right: 100,
            top: 100,
          }}
        />
      </form>
    </Form>
  )
}
