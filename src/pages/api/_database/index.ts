import { connect, connection } from "mongoose";

const conn = {
	isConnected: false,
};

export async function database() {
	if (conn.isConnected) return;

	const db = await connect(
		`mongodb+srv://${process.env.mongo_user}:${process.env.mongo_password}@cluster0.alkbqzh.mongodb.net/?retryWrites=true&w=majority`
	);
	conn.isConnected = !!db.connections[0].readyState;
}

connection.on("connected", () => console.log("mongodb is connected"));
