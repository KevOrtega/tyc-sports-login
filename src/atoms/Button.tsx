type buttonProps = {
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	children: React.ReactNode;
	type?: "button" | "facebook" | "google" | "login-redirect" | "submit";
	className?: string;
};

export default function Button({
	className,
	type = "button",
	...props
}: buttonProps) {
	const buttons_types = {
		facebook: () => (
			<button
				className={`cursor-default w-full h-10 outline-none bg-blue-800 text-white rounded transition-colors hover:bg-blue-700 active:bg-blue-800 ${className}`}
				type="button"
				{...props}
			/>
		),
		google: () => (
			<button
				className={`cursor-default w-full h-10 outline-none bg-blue-500 text-white rounded transition-colors hover:bg-blue-400 active:bg-blue-500 ${className}`}
				type="button"
				{...props}
			/>
		),
		"login-redirect": () => (
			<button
				className={`cursor-default p-3 outline-none text-sky-500 w-min transition-colors hover:text-sky-300 active:text-sky-500 ${className}`}
				type="button"
				{...props}
			/>
		),
		submit: () => (
			<button
				className={`cursor-default w-full p-3 outline-none bg-red-500 rounded transition-colors hover:bg-red-400 active:bg-red-500 ${className}`}
				type="submit"
				{...props}
			/>
		),
		button: () => (
			<button
				className={`cursor-default w-min p-3 outline-none ${className}`}
				type="button"
				{...props}
			/>
		),
	};

	return buttons_types[type]();
}
