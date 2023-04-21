/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		mongo_user: "kevortegadev",
		mongo_password: "loo5z4n5wEp5PhcI",
		google_id:
			"324768818465-3pkl2cq8dfiflv9bna73qtsbsffj5i5r.apps.googleusercontent.com",
		google_secret_key: "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",
	},
};

module.exports = nextConfig;
