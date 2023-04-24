import type { NextApiRequest, NextApiResponse } from "next";
import { database } from "@/pages/api/_database";
import {
	createUser,
	getUserByEmail,
	serializeUser,
} from "@/pages/api/_services/users";

database();

export default async function registerHandler(
	req: NextApiRequest,
	res: NextApiResponse<string>
) {
	try {
		if (req.method !== "POST")
			throw new Error("POST method is the only supported");

		if (!req.body.email || !req.body.password)
			throw new Error("email and password are required");

		// check if user already exists
		await getUserByEmail(req.body.email).then(
			() => {
				throw new Error(`user with email ${req.body.email} already exists`);
			},
			() => {}
		);

		const user = await createUser({
			email: req.body.email,
			password: req.body.password,
		});

		const serialized = serializeUser(user);
		res.setHeader("Set-Cookie", serialized);
		return res.status(200).send("user created successfully");
	} catch (error) {
		return res.status(300).send(`${error}`);
	}
}
