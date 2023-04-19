type inputProps = {
	type?: "text" | "password" | "email";
	placeholder?: string;
	name?: string;
	onChange?: React.ReactEventHandler<HTMLInputElement>;
	className?: string;
};

export default function Input({
	className,
	type = "text",
	...props
}: inputProps) {
	const input_types = {
		email: () => (
			<input
				className={`bg-white p-1 px-2 w-full rounded ${className}`}
				type="text"
				{...props}
			/>
		),
		password: () => (
			<input
				className={`bg-white p-1 px-2 w-full rounded ${className}`}
				type="text"
				{...props}
			/>
		),
		text: () => (
			<input
				className={`bg-white p-1 px-2 w-full rounded ${className}`}
				type="text"
				{...props}
			/>
		),
	};
	return input_types[type]();
}
