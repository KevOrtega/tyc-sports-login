import Button from "@/atoms/Button";
import Title from "@/atoms/Title";
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
			alert("logged out");
		} catch (error) {
			alert("Could not log out");
		}
	};

	return (
		<div>
			<Title>Welcome, you were successfully logged</Title>
			<p>your email: {user.email}</p>
			<Button
				className="capitalize shadow font-bold m-3 rounded whitespace-nowrap transition-shadow hover:shadow-md active:shadow"
				onClick={handleLogout}
			>
				log out
			</Button>
		</div>
	);
}
