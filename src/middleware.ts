import { NextResponse, NextRequest } from "next/server"
import jwt from "jsonwebtoken"

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/account")) {
    const response = NextResponse.next()

    const HasToken = request.cookies.get("@VaBeauty:token")

    if (!HasToken) {
      return NextResponse.redirect(new URL("/", request.url))
    }

    const token = request.cookies.get("@VaBeauty:token")?.value

    console.log(token)
    const decodedToken = jwt.decode(token as string)

    response.cookies.set("@VaBeauty:session", JSON.stringify(decodedToken))

    return response
  }

  if (request.nextUrl.pathname.startsWith("/success")) {
    const response = NextResponse.next()

    response.cookies.delete("@VaBeauty:cartItems")
    response.cookies.delete("@VaBeauty:totalPrice")
    response.cookies.delete("@VaBeauty:totalDuration")
    response.cookies.delete("@VaBeauty:date")

    return response
  }
}
