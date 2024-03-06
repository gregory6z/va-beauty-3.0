/* eslint-disable camelcase */
"use server"

import useAuthStore from "@/app/stores/Auth"
import { cookies } from "next/headers"

export async function action(data: FormData): Promise<void> {
  const email = data.get("email")
  const password = data.get("password")

  const response = await fetch("http://localhost:3333/sessions", {
    method: "POST",
    headers: addTokenToHeaders({}, useAuthStore.getState().token),

    body: JSON.stringify({ email, password }),
  })

  const { access_token } = await response.json()

  useAuthStore.getState().saveToken(access_token)

  cookies().set("@VaBeauty:token", String(access_token))
}

const addTokenToHeaders = (headers: HeadersInit, token: string | null) => {
  const defaultHeaders = {
    "Content-Type": "application/json",
  }

  if (token) {
    return {
      ...defaultHeaders,
      ...headers,
      Authorization: `Bearer ${token}`,
    }
  }

  return {
    ...defaultHeaders,
    ...headers,
  }
}
