export type iUser = {
	email: string;
	password: string;
};

export interface iRegisterCredentials extends iUser {
	repeatPassword: string;
}
