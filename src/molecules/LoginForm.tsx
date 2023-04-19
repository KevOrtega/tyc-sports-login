import Button from "@/atoms/Button";
import Input from "@/atoms/Input";
// import { useState } from "react";

export default function LoginForm() {
	// const [isAlreadyRegistered, setIsAlreadyRegistered] = useState(true)

	return (
		<form className="flex flex-col items-center bg-slate-950 text-white w-min p-3 rounded-md m-auto my-5">
			<h1 className="font-bold text-2xl">TyC Sports</h1>
			<span className="my-1 px-5 text-gray-300 whitespace-nowrap">
				Podés ingresar con tu cuenta de:
			</span>
			<Button
				className="w-full my-1"
				type="facebook"
				onClick={() => alert("logged")}
			>
				facebook
			</Button>
			<Button
				className="w-full my-1"
				type="google"
				onClick={() => alert("logged")}
			>
				google
			</Button>
			<hr className="w-full my-3 border-gray-500" />
			<span className="my-1 px-5 text-gray-300 whitespace-nowrap">
				o con tu cuenta de Email:
			</span>
			<Input className="my-1" type="email" placeholder="email" />
			<Input className="my-1" type="password" placeholder="password" />
			<Button type="submit" onClick={() => alert("logged")} className="my-1">
				Ingresar
			</Button>
			<Button
				className="text-blue-500 w-min self-end"
				onClick={() => alert("going to register")}
			>
				registrarse
			</Button>
		</form>
	);
}
