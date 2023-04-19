import Button from "@/atoms/Button";
import LoginForm from "@/molecules/LoginForm";
import RegisterForm from "@/molecules/RegisterForm";
import { Fragment, useState } from "react";

export default function Home() {
	const [isAlreadyRegistered, setIsAlreadyRegistered] = useState(true);
	return (
		<main>
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
			);
		</main>
	);
}
