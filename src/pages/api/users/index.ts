import type { NextApiRequest, NextApiResponse } from "next";
import { database } from "@/pages/api/_database";
import User from "@/pages/api/_database/models/User";
import { iUser } from "@/interface/user";

database();

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<{ users: iUser[] } | string>
) {
	try {
		if (req.method !== "GET")
			throw new Error("GET method is the only supported");
		const users = await User.find();

		res.status(200).send({ users });
	} catch (error) {
		res.status(400).send(`${error}`);
	}
}
