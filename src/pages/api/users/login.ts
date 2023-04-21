import type { NextApiRequest, NextApiResponse } from "next";
import { database } from "@/pages/api/_database";
import { getUserByEmail, serializeUser } from "@/pages/api/_services/users";

database();

export default async function loginHandler(
	req: NextApiRequest,
	res: NextApiResponse<string>
) {
	try {
		if (req.method !== "POST")
			throw new Error("POST method is the only supported");

		const user = await getUserByEmail(req.body.email);

		if (user.password !== req.body.password)
			throw new Error("password is incorrect");

		const serialized = serializeUser(user);
		res.setHeader("Set-Cookie", serialized);
		return res.status(200).send("login successfull");
	} catch (error) {
		return res.status(300).send(`${error}`);
	}
}
