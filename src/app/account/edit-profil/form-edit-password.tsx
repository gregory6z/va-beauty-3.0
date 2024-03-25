"use client"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useTransition } from "react"
import { EditProfil } from "@/app/api/editProfil"

const formSchema = z
  .object({
    password: z
      .string()
      .min(4, { message: "A senha deve ter no mínimo 4 caracteres." }),
    confirm: z.string(),
  })
  .refine((data) => data.password === data.confirm, {
    message: "As senhas não coincidem",
    path: ["confirm"],
  })

export function FormEditPassword() {
  const [isPending, startTransition] = useTransition()

  const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(() => {
      EditProfil(values)
    })
    router.push("/account")
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-10  flex flex-col gap-2 "
      >
        <FormField
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel> Saisissez votre nouveau mot de passe.</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="password"
                  placeholder="••••••••"
                  min={4} // Adiciona "pontinhos" ao placeholder
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
              <FormLabel>Confirmez votre mot de passe.</FormLabel>
              <FormControl>
                <Input
                  placeholder="••••••••" // Adiciona "pontinhos" ao placeholder
                  {...field}
                  min={4}
                  type="password"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          className=" mt-10
          text-base"
          type="submit"
          disabled={isPending}
        >
          Changer votre mot de passe
        </Button>
      </form>
    </Form>
  )
}
