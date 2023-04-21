import type { NextApiRequest, NextApiResponse } from "next";
import { database } from "@/pages/api/_database";
import { expireToken } from "@/pages/api/_services/users";

database();

export default async function logoutHandler(
	req: NextApiRequest,
	res: NextApiResponse<string>
) {
	try {
		if (req.method !== "POST")
			throw new Error("post method is the only supported");
		const serialized = expireToken();
		res.setHeader("Set-Cookie", serialized);
		return res.status(200).send("logout successfull");
	} catch (error) {
		return res.status(300).send(`${error}`);
	}
}
