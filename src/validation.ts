export const emailValidator = (email: string) =>
	RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi).test(email);

export const passwordValidator = (password: string) =>
	RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm).test(
		password
	);
