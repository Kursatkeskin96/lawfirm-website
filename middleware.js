import { NextResponse } from "next/server";
import { i18n } from "@/i18n.config";

function getLocale(request) {
  const negotiatorHeaders = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const defaultLocale = i18n.defaultLocale; // Store the default locale

  // Always use the default locale, regardless of the browser's settings
  return defaultLocale;
}

export function middleware(request) {
  const pathname = request.nextUrl.pathname;
  
  // Exclude sitemap.xml from locale redirection
  if (pathname === '/sitemap-0.xml') {
    return NextResponse.next();
  }

  const pathnameIsMissingLocale = i18n.locales.every(
    locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if(pathnameIsMissingLocale){ 
    const locale = getLocale(request)
    if(locale === i18n.defaultLocale){
      return NextResponse.rewrite(
        new URL(`/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`, 
        request.url)
      );
    }
    return NextResponse.redirect(
      new URL(`/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
      request.url
      )
    );
  }
}

export const config = {
  // Matcher ignoring `/_next/`, `/api/`, and `/sitemap.xml`
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml).*)"]
};
