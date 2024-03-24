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
    name: z
      .string()
      .min(2, {
        message: "Username must be at least 2 characters.",
      })
      .optional(),
    email: z
      .string()
      .email({
        message: "email must be a valid email.",
      })
      .optional(),
    telephone: z.string().min(10, {}).optional(),
    password: z
      .string()
      .min(4, { message: "A senha deve ter no mínimo 4 caracteres." }),
    confirm: z.string(),
  })
  .refine((data) => data.password === data.confirm, {
    message: "As senhas não coincidem",
    path: ["passwordConfirmation"],
  })

export function FormEditProfil() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  const formatPhoneNumber = (value: string) => {
    value = value.replace(/\D/g, "").slice(0, 10) // Keep only the first 10 digits
    return value.split(/(?=(?:..)*$)/).join(" ") // Insert a space every 2 digits
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-10  flex flex-col gap-2 "
      >
        <FormField
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom</FormLabel>
              <FormControl>
                <Input placeholder="name" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input placeholder="email" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="telephone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Telephone</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="06 01 02 03 04"
                  onChange={(event) => {
                    const { value } = event.target as HTMLInputElement
                    field.onChange(formatPhoneNumber(value))
                  }}
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
          Mettre à jour le profil
        </Button>
      </form>
    </Form>
  )
}
