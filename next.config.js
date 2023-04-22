/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		mongo_user: "kevortegadev",
		mongo_password: "loo5z4n5wEp5PhcI",
		NEXTAUTH_URL: "https://tyc-sports-login.vercel.app",
		NEXTAUTH_SECRET: "6efeeb822a0c01b54a88adf05a6f01a7",
		google_id:
			"324768818465-3pkl2cq8dfiflv9bna73qtsbsffj5i5r.apps.googleusercontent.com",
		google_secret_key: "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",
		facebook_id: "605687404911433",
		facebook_secret_key: "5bb52663388d79e115c7cde84e88819b",
	},
};

module.exports = nextConfig;
