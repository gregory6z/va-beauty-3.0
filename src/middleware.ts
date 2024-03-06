import { NextRequest, NextResponse } from "next/server"

export default function Middleware(request: NextRequest) {
  const token = request.cookies.get("@VaBeauty:token")?.value
  const homeUrl = new URL("/", request.url)
  if (token) {
    return NextResponse.redirect(homeUrl)
  } else if (request.nextUrl.pathname === "/sign-in") {
    return NextResponse.next()
  }
  return NextResponse.redirect(homeUrl)
}

export const config = {
  matcher: ["/sign-in"],
}
