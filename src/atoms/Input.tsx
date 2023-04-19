type inputProps = {
	type?: "text" | "password" | "email";
	placeholder?: string;
	name?: string;
	onChange?: React.ReactEventHandler<HTMLInputElement>;
	className?: string;
	value?: string;
};

export default function Input({
	className,
	type = "text",
	...props
}: inputProps) {
	const input_types = {
		email: () => (
			<input
				className={`bg-white py-2 px-4 w-full outline-none text-black rounded ${className}`}
				type="text"
				{...props}
			/>
		),
		password: () => (
			<input
				className={`bg-white py-2 px-4 w-full outline-none text-black rounded ${className}`}
				type="text"
				{...props}
			/>
		),
		text: () => (
			<input
				className={`bg-white py-2 px-4 w-full outline-none text-black rounded ${className}`}
				type="text"
				{...props}
			/>
		),
	};
	return input_types[type]();
}
