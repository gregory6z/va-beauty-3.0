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

const formSchema = z
  .object({
    password: z
      .string()
      .min(4, { message: "A senha deve ter no mínimo 4 caracteres." }),
    confirm: z.string(),
  })
  .refine((data) => data.password === data.confirm, {
    message: "As senhas não coincidem",
    path: ["passwordConfirmation"],
  })

export function FormEditPassword() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
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
                  placeholder="••••••••" // Adiciona "pontinhos" ao placeholder
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
        >
          Changer votre mot de passe
        </Button>
      </form>
    </Form>
  )
}
