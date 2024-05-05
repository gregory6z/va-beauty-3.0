"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { z } from "zod"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useState, useTransition } from "react"

import { useSearchParams } from "next/navigation"
import { AuthenticateAccount } from "@/app/api/authenticate"

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
  const searchParams = useSearchParams()

  const initialEmail = (searchParams.get("email") as string) || ""

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: initialEmail,
    },
  })

  const [error, setError] = useState("")

  const [isPending, startTransition] = useTransition()

  async function onSubmit(values: z.infer<typeof signInSchema>) {
    try {
      startTransition(async () => {
        const response = await AuthenticateAccount(values)
        if (response.success) {
          // router.push(`/sign-in?email=${encodeURIComponent(values.email)}`)
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

  // const [state, formAction] = useFormState(action, initialState)

  return (
    <Form {...form}>
      {" "}
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex  flex-col gap-3"
      >
        <FormField
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} type="email" placeholder="email@email.com" />
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
        <p className="text-right text-sm text-zinc-900/60">
          Mot de passe oublié ?
        </p>

        <p className=" text-red-500"> {error}</p>

        <Button
          size="lg"
          disabled={isPending}
          type="submit"
          className="mt-4 w-full  "
        >
          Se connecter avec votre adresse e-mail
        </Button>

        {/* <p className=" text-red-500"> {state?.message}</p> */}
      </form>
    </Form>
  )
}
