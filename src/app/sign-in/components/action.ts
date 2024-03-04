"use server"

import { FetchAPI } from "../page"

export type FormData = {
  email: string
  password: string
}

export async function action(data: FormData) {
  console.log(data)
  FetchAPI(data)
}
