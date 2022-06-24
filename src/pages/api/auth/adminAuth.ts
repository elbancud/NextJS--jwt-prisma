import { PrismaClient, Prisma } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import getAccessToken from "../../../lib/features/jwt-secure";
interface IAdminAuth {
	username: string;
	password: string;
}
/**
 * Find first in the database or the default password in .env.local using ORM(PRISMA [findFirst]),
 * .. if the admin account is registered then send designated response in the frontend.
 *
 */
interface ILastAuth {
	accessToken: string;
}
let lastUsername: string;
let lastPassword: string;
let lastAuthenticate: ILastAuth = {
	accessToken: "",
};

function memoizedUserAuth(username: string, password: string) {
	const prisma = new PrismaClient();
	try {
		if (username === lastUsername && password === lastPassword) {
			return lastAuthenticate.accessToken;
		}
		const user = prisma.admin_accounts.findFirst({
			where: {
				username,
				password,
			},
		});
		//(username === username && password === password) ||
		if (user) {
			const { id } = user;
			const authenticatedUser = { id, username };
			const accessToken = getAccessToken(authenticatedUser);
			lastAuthenticate.accessToken = accessToken;
			return { accessToken: lastAuthenticate.accessToken };
		}
		lastUsername = username;
		lastPassword = password;

		return lastAuthenticate.accessToken;
	} catch (error) {
		return error;
	}
}

export default async function adminAuth(
	request: NextApiRequest,
	response: NextApiResponse
) {
	const { username, password }: IAdminAuth = request.body;
	const authResponse = await memoizedUserAuth(username, password);
	response.send(authResponse);
}
