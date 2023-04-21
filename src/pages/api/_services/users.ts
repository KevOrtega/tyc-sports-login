import jwt from "jsonwebtoken";
import { serialize } from "cookie";
import { iUser } from "@/interface/user";
import User from "@/pages/api/_database/models/User";

export async function getUsers(): Promise<iUser[]> {
	const users = await User.find();
	if (!users.length) throw new Error("Users not found");
	return users;
}

export async function getUserByEmail(email: string): Promise<iUser> {
	const user = await User.findOne({ email });
	if (!user) throw new Error(`User with email ${email} not found`);
	return user;
}

export async function createUser(user: iUser): Promise<iUser> {
	return await User.create({ email: user.email, password: user.password });
}

export function serializeUser(user: iUser) {
	const token = jwt.sign(
		{
			exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
			...user,
		},
		"secret"
	);

	return serialize("login_token", token, {
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
		sameSite: "strict",
		maxAge: 1000 * 60 * 60 * 24 * 30,
		path: "/",
	});
}
