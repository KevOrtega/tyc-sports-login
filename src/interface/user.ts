export type iUser = {
	email: string;
	password?: string;
};

export interface iLoginCredentials extends iUser {
	password: string;
}

export interface iRegisterCredentials extends iLoginCredentials {
	repeatPassword: string;
}
