import { NextResponse } from "next/server";

export default function middleware(request) {
  const url = request.nextUrl.pathname;

  const params = url.split("/");

  const firstRouteSegment = params[1];

  const productWhiteList = [
    "yx1-earphones",
    "xx59-headphones",
    "xx99-mark-one-headphones",
    "xx99-mark-two-headphones",
    "zx7-speaker",
    "zx9-speaker",
  ];

  const correspondingCategory = {
    "yx1-earphones": "/earphones",
    "xx59-headphones": "/headphones",
    "xx99-mark-one-headphones": "/headphones",
    "xx99-mark-two-headphones": "/headphones",
    "zx7-speaker": "/speakers",
    "zx9-speaker": "/speakers",
  };

  if (url === "/") return NextResponse.next();

  if (productWhiteList.includes(firstRouteSegment)) {
    const correctCategory = correspondingCategory[firstRouteSegment];
    const correctURL = `${correctCategory}/${firstRouteSegment}`;

    return NextResponse.redirect(new URL(correctURL, request.url));
  }

  NextResponse.next();
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
