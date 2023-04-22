import { jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
	const jwt = request.cookies.get("user_token");

	if (request.nextUrl.pathname.includes("/dashboard")) {
		try {
			if (jwt === undefined) throw new Error("invalid token");

			await jwtVerify(jwt.value, new TextEncoder().encode("secret"));
			return NextResponse.next();
		} catch (error) {
			return NextResponse.redirect(new URL("/", request.url));
		}
	}

	try {
		if (jwt === undefined) return NextResponse.next();

		await jwtVerify(jwt.value, new TextEncoder().encode("secret"));
		return NextResponse.redirect(new URL("/dashboard", request.url));
	} catch (error) {
		return NextResponse.next();
	}
}

export const config = {
	matcher: ["/dashboard", "/"],
};
