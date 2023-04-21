import axios from "axios";
import Button from "@/atoms/Button";
import Input from "@/atoms/Input";
import Title from "@/atoms/Title";
import { useState } from "react";
import { iRegisterCredentials } from "@/interface/user";
import { useRouter } from "next/router";
import { emailValidator, passwordValidator } from "@/validation";

export default function RegisterForm() {
	const router = useRouter();
	const [credentials, setCredentials] = useState<iRegisterCredentials>({
		email: "",
		password: "",
		repeatPassword: "",
	});

	const validateCredentials = () => {
		if (!emailValidator(credentials.email))
			throw new Error("email must be valid");
		if (!passwordValidator(credentials.password))
			throw new Error(
				"password is not valid (must have 8 characters, 1 capital letter, 1 lowercase and 1 number)"
			);
		if (credentials.repeatPassword !== credentials.password)
			throw new Error("passwords not match");
	};

	const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({
		target: { value, name },
	}) => setCredentials({ ...credentials, [name]: value });

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
		try {
			e.preventDefault();
			validateCredentials();
			await axios.post("/api/users/register", {
				email: credentials.email,
				password: credentials.password,
			});
			router.push("/dashboard");
		} catch (error: any) {
			alert(`${error.response?.data || error.message || error}`);
		}
	};

	return (
		<form onSubmit={handleSubmit} className="flex flex-col items-center">
			<Title>TyC Sports</Title>
			<span className="my-1 px-5 text-gray-300 whitespace-nowrap">
				Registrate con tu email
			</span>
			<Input
				className={`my-1 ${
					!!credentials.email.length &&
					!emailValidator(credentials.email) &&
					"border-b-4 border-red-500"
				}`}
				type="email"
				placeholder="email"
				name="email"
				onChange={handleChange}
				value={credentials.email}
			/>
			<Input
				className={`my-1 ${
					!!credentials.password.length &&
					!passwordValidator(credentials.password) &&
					"border-b-4 border-red-500"
				}`}
				type="password"
				placeholder="password"
				name="password"
				onChange={handleChange}
				value={credentials.password}
			/>
			<Input
				className={`my-1 ${
					!!credentials.repeatPassword.length &&
					(!passwordValidator(credentials.repeatPassword) ||
						credentials.repeatPassword !== credentials.password) &&
					"border-b-4 border-red-500"
				}`}
				type="password"
				placeholder="repeat password"
				name="repeatPassword"
				onChange={handleChange}
				value={credentials.repeatPassword}
			/>
			<Button type="submit" className="my-1">
				Registrarse
			</Button>
		</form>
	);
}
