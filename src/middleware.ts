import { jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
	try {
		const jwt = request.cookies.get("user_token");
		if (jwt === undefined) throw new Error("invalid token");

		await jwtVerify(jwt.value, new TextEncoder().encode("secret"));
		return NextResponse.next();
	} catch (error) {
		return NextResponse.redirect(new URL("/", request.url));
	}
}

export const config = {
	matcher: ["/dashboard"],
};
