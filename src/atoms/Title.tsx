type titleProps = {
	type?: "medium";
	children: React.ReactNode;
};

export default function Title({ type = "medium", ...props }: titleProps) {
	const title_types = {
		medium: () => <h2 className="font-bold text-2xl" {...props} />,
	};
	return title_types[type]();
}
