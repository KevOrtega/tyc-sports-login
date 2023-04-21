import { Schema, model, models } from "mongoose";
import { iUser } from "@/interface/user";

const userSchema = new Schema<iUser>(
	{
		email: {
			type: "string",
			required: [true, "email is required"],
			unique: true,
			trim: true,
			maxlength: [50, "email max length is 50 characters"],
		},
		password: {
			type: "string",
			required: [true, "password is required"],
			maxlength: [30, "password max length is 30 characters"],
		},
	},
	{ versionKey: false }
);

export default models.User || model<iUser>("User", userSchema);
