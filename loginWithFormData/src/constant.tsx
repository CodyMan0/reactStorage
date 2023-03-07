export interface UserInfo {
	name: string;
}

export interface User {
	username: string;
	password: string;
	userInfo: UserInfo;
}

export const Users: User[] = [
	{
		username: "juyoung",
		password: "1234",
		userInfo: { name: `hi juyoung` },
	},
];
