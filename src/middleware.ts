import { NextResponse, NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/success")) {
    const response = NextResponse.next()

    response.cookies.set("@VaBeauty:cartItems", "")
    response.cookies.set("@VaBeauty:totalPrice", "")
    response.cookies.set("@VaBeauty:totalDuration", "")
    response.cookies.set("@VaBeauty:date", "")

    return response
  }
}
