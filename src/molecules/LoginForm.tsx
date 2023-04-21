import axios from "axios";
import { useState } from "react";
import Button from "@/atoms/Button";
import Image from "@/atoms/Image";
import Input from "@/atoms/Input";
import Title from "@/atoms/Title";
import { useRouter } from "next/router";
import { iUser } from "@/interface/user";
import { emailValidator, passwordValidator } from "@/validation";

export default function LoginForm() {
	const router = useRouter();
	const [credentials, setCredentials] = useState<iUser>({
		email: "",
		password: "",
	});

	const validateCredentials = () => {
		if (!emailValidator(credentials.email))
			throw new Error("email must be valid");
		if (!passwordValidator(credentials.password))
			throw new Error(
				"password is not valid (must have 8 characters, 1 capital letter, 1 lowercase and 1 number)"
			);
	};

	const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({
		target: { name, value },
	}) => setCredentials({ ...credentials, [name]: value });

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
		try {
			e.preventDefault();
			validateCredentials();
			await axios.post("/api/users/login", credentials);
		} catch (error) {
			alert(`${error}`);
		} finally {
			router.push("/dashboard");
		}
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
				title={"insert a valid email"}
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
				title={
					"password must have 8 characters, 1 capital letter, 1 lowercase and 1 number"
				}
			/>
			<Button type="submit" className="my-1">
				Ingresar
			</Button>
		</form>
	);
}
