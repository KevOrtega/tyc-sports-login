import axios from "axios";
import { useState } from "react";
import Button from "@/atoms/Button";
import Image from "@/atoms/Image";
import Input from "@/atoms/Input";
import Title from "@/atoms/Title";

export default function LoginForm() {
	const [credentials, setCredentials] = useState({
		email: "",
		password: "",
	});

	const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({
		target: { name, value },
	}) => setCredentials({ ...credentials, [name]: value });

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault();
		await axios.post("/api/users/login", credentials);
	};

	return (
		<form onSubmit={handleSubmit} className="flex flex-col items-center">
			<Title>TyC Sports</Title>
			<span className="my-1 px-5 text-gray-300 whitespace-nowrap">
				Podés ingresar con tu cuenta de:
			</span>
			<Button
				className="w-full my-1 p-2 relative text-center"
				type="facebook"
				onClick={() => alert("logged")}
			>
				<Image
					className="h-full w-auto absolute top-0 left-0 my-auto"
					type="facebook-logo"
				/>
				Facebook
			</Button>
			<Button
				className="w-full my-1 p-2 relative text-center"
				type="google"
				onClick={() => alert("logged")}
			>
				<Image
					className="h-full w-auto absolute top-0 left-0 my-auto"
					type="google-logo"
				/>
				Google
			</Button>
			<hr className="w-full my-3 border-gray-500" />
			<span className="my-1 px-5 text-gray-300 whitespace-nowrap">
				o con tu cuenta de Email:
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
			<Button type="submit" className="my-1">
				Ingresar
			</Button>
		</form>
	);
}
