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
// import { editProfilAction } from "./edit-profil-action"
import { useEffect, useTransition } from "react"
import { EditProfil } from "@/app/api/editProfil"

import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { parseCookies } from "nookies"

export interface FormEditProps {
  name?: string
  email?: string
  telephone?: string
}

const formSchema = z.object({
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
})

export function FormEditProfil() {
  useEffect(() => {
    const cookies = parseCookies()
    const session = cookies["@VaBeauty:session"]
    if (session) {
      const { name, email, telephone } = JSON.parse(session)
      form.reset({ name, email, telephone })
    }
  }, [])

  const [isPending, startTransition] = useTransition()

  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  const formatPhoneNumber = (value: string) => {
    value = value.replace(/\D/g, "").slice(0, 10) // Keep only the first 10 digits
    return value.split(/(?=(?:..)*$)/).join(" ") // Insert a space every 2 digits
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(() => {
      EditProfil(values)
      toast.success("Profil mis à jour")
      setTimeout(() => {
        router.replace("/account")
      }, 500)
    })
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
                <Input placeholder="email" {...field} type="email" />
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
          disabled={isPending}
        >
          Mettre à jour le profil
        </Button>
      </form>
    </Form>
  )
}
