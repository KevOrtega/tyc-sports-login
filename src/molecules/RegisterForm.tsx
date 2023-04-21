import axios from "axios";
import Button from "@/atoms/Button";
import Input from "@/atoms/Input";
import Title from "@/atoms/Title";
import { useState } from "react";

export default function RegisterForm() {
	const [credentials, setCredentials] = useState({
		email: "",
		password: "",
		repeatPassword: "",
	});

	const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({
		target: { value, name },
	}) => setCredentials({ ...credentials, [name]: value });

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault();
		await axios.post("/api/users/register", credentials);
	};

	return (
		<form onSubmit={handleSubmit} className="flex flex-col items-center">
			<Title>TyC Sports</Title>
			<span className="my-1 px-5 text-gray-300 whitespace-nowrap">
				Registrate con tu email
			</span>
			<Input
				className="my-1"
				type="email"
				placeholder="email"
				name="email"
				onChange={handleChange}
				value={credentials.email}
			/>
			<Input
				className="my-1"
				type="password"
				placeholder="password"
				name="password"
				onChange={handleChange}
				value={credentials.password}
			/>
			<Input
				className="my-1"
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
