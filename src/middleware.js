import { NextResponse } from "next/server";

export function middleware(request) {
  console.log("Middleware executed");

  const authToken = request.cookies.get("authToken")?.value;
  console.log(authToken);

  const { pathname } = request.nextUrl;

  // Redirect logged-in users away from login or sign-up pages
  if ((pathname === "/login" || pathname === "/sign-up") && authToken) {
    return NextResponse.redirect(new URL("/user-profile", request.url));
  }

  // Redirect non-authenticated users away from protected routes
  const protectedPaths = ["/add-task", "/all-task", "/user-profile"];
  const isProtectedRoute = protectedPaths.some((path) => pathname.startsWith(path));

  if (isProtectedRoute && !authToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Allow access if no redirection is needed
  return NextResponse.next();
}

// Specify which paths should use the middleware
export const config = {
  matcher: [
    "/login",
    "/sign-up",
    "/add-task",
    "/all-task",
    "/user-profile/:path*",
  ],
};
