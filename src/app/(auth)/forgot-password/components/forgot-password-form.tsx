"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { z } from "zod"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { useSearchParams } from "next/navigation"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useTransition } from "react"

import { toast } from "sonner"
import { ForgotPassword } from "@/app/api/forgot-password"

const signInSchema = z.object({
  email: z
    .string()

    .email({ message: "Veuillez entrer une adresse e-mail valide." }),
})

export type SignInSchema = z.infer<typeof signInSchema>

export function ForgotPasswordForm() {
  const searchParams = useSearchParams()

  const initialEmail = (searchParams.get("email") as string) || ""

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: initialEmail,
    },
  })

  const [isPending, startTransition] = useTransition()

  async function onSubmit(values: z.infer<typeof signInSchema>) {
    try {
      startTransition(async () => {
        const response = await ForgotPassword(values)
        if (response.success) {
          toast.success(
            "Nous avons envoyé un lien pour changer votre mot de passe.",
            {
              action: {
                label: "Renvoyer",
                onClick: () => ForgotPassword(values),
              },
              duration: 5000,
            },
          )
        }
        if (response.message && !response.success) {
          toast.error(response.message)
        }
      })
    } catch (error) {
      if (error) {
        toast.error("Erreur lors de la connexion")
      }
      console.error(error)
      // setError("Ocorreu um erro ao criar a conta. Por favor, tente novamente.")
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
                <Input
                  required
                  {...field}
                  type="email"
                  placeholder="email@email.com"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        {/* <p className=" text-red-500"> {error}</p> */}

        <Button
          size="lg"
          disabled={isPending}
          type="submit"
          className="mt-4 w-full  "
        >
          Envoier adress email
        </Button>

        {/* <p className=" text-red-500"> {state?.message}</p> */}
      </form>
    </Form>
  )
}
