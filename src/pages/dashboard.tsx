import axios from "axios";
import { useEffect, useState } from "react";

export default function dashboard() {
	const [user, setUser] = useState<{ email: string }>({ email: "" });

	useEffect(() => {
		(async () => {
			const { data }: { data: { email: string } } = await axios.get(
				"/api/users"
			);
			setUser(data);
		})();
	}, [setUser]);

	return (
		<div>
			<h1>Welcome, you were successfully logged</h1>
			<p>your email: {user.email}</p>
		</div>
	);
}
