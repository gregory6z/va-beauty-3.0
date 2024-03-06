"use server"

import useAuthStore from "@/app/stores/Auth"

export async function action(data: FormData): Promise<void> {
  const email = data.get("email")
  const password = data.get("password")

  const dataFetch = {
    email: String(email),
    password: String(password),
  }
  console.log(dataFetch)

  useAuthStore.getState().signIn(dataFetch)
}
