import type { NextApiRequest, NextApiResponse } from "next";
import { database } from "@/pages/api/_database";
import { getUserByEmail, verifyUserToken } from "@/pages/api/_services/users";
import { iUser } from "@/interface/user";

database();

export default async function userHandler(
	req: NextApiRequest,
	res: NextApiResponse<iUser | string>
) {
	try {
		if (req.method !== "GET")
			throw new Error("GET method is the only supported");

		const user = verifyUserToken(req.cookies);
		const user_found = await getUserByEmail(user.email);
		if (!user_found) throw new Error("user incorrect");

		return res.status(200).send({ email: user_found.email });
	} catch (error) {
		return res.status(400).send(`${error}`);
	}
}
