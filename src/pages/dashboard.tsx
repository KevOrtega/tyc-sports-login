import Button from "@/atoms/Button";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function dashboard() {
	const router = useRouter();
	const [user, setUser] = useState<{ email: string }>({ email: "" });

	useEffect(() => {
		(async () => {
			const { data }: { data: { email: string } } = await axios.get(
				"/api/users"
			);
			setUser(data);
		})();
	}, [setUser]);

	const handleLogout = async () => {
		try {
			await axios.post("/api/users/logout");
			router.push("/");
		} catch (error) {
			alert("Could not log out");
		}
	};

	return (
		<div>
			<h1>Welcome, you were successfully logged</h1>
			<p>your email: {user.email}</p>
			<Button onClick={handleLogout}>logout</Button>
		</div>
	);
}
