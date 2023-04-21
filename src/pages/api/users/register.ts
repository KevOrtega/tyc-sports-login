import type { NextApiRequest, NextApiResponse } from "next";
import { database } from "@/pages/api/_database";
import { createUser, serializeUser } from "@/pages/api/_services/users";

database();

export default async function registerHandler(
	req: NextApiRequest,
	res: NextApiResponse<string>
) {
	try {
		if (req.method !== "POST")
			throw new Error("POST method is the only supported");

		const user = await createUser({
			email: req.body.email,
			password: req.body.password,
		});

		const serialized = serializeUser(user);
		res.setHeader("Set-Cookie", serialized);
		res.status(200).send("user created successfully");
	} catch (error) {
		res.status(300).send(`${error}`);
	}
}
