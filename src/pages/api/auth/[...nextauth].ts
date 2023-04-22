import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

export const authOptions = {
	// Configure one or more authentication providers
	providers: [
		GoogleProvider({
			clientId: `${process.env.google_id}`,
			clientSecret: `${process.env.google_secret_key}`,
		}),
		FacebookProvider({
			clientId: `${process.env.facebook_id}`,
			clientSecret: `${process.env.facebook_secret_key}`,
		}),
	],
	secret: `${process.env.NEXTAUTH_SECRET}`,
};

export default NextAuth(authOptions);
