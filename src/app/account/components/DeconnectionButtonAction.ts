"use server"
import { redirect } from "next/navigation"
import { cookies } from "next/headers"

export async function DeconnectionButtonAction() {
  cookies().delete("@VaBeauty:token")
  cookies().delete("@VaBeauty:cartItems")
  cookies().delete("@VaBeauty:date")
  cookies().delete("@VaBeauty:totalDuration")
  cookies().delete("@VaBeauty:totalPrice")
  cookies().delete("@VaBeauty:costumerId")
  cookies().delete("@VaBeauty:session")

  redirect("/")
}
