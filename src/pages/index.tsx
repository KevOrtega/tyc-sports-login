import Button from "@/atoms/Button";
import LoginForm from "@/molecules/LoginForm";
import RegisterForm from "@/molecules/RegisterForm";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";

export default function Home() {
	const router = useRouter();
	const { data: session, status } = useSession();
	const [isAlreadyRegistered, setIsAlreadyRegistered] = useState(true);

	useEffect(() => {
		(async () => {
			if (session && session.user) {
				await axios.post("/api/auth/login", { email: session.user.email });
				router.push("/dashboard");
			}
		})();
	}, [session]);

	return (
		<main>
			{status === "unauthenticated" && (
				<div className="flex flex-col w-72 bg-slate-950 text-white p-3 rounded-md m-auto my-5">
					{isAlreadyRegistered ? (
						<Fragment>
							<LoginForm />
							<Button
								type="login-redirect"
								className="self-end"
								onClick={() => setIsAlreadyRegistered(false)}
							>
								registrarse
							</Button>
						</Fragment>
					) : (
						<Fragment>
							<RegisterForm />
							<Button
								type="login-redirect"
								className="self-end"
								onClick={() => setIsAlreadyRegistered(true)}
							>
								volver
							</Button>
						</Fragment>
					)}
				</div>
			)}
			);
		</main>
	);
}
