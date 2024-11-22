import { NextResponse } from "next/server";

export function middleware(request) {
  return NextResponse.redirect(new URL("/dashboard/users", request.url));
  // return NextResponse.redirect(new URL("/dashboard/users", request.url));
}

export const config = {
  matcher: "/profile", // Match `/profile` and its subpaths
};
