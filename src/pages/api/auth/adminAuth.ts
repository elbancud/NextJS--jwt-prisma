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

export default async function adminAuth(
	request: NextApiRequest,
	response: NextApiResponse
): Promise<void> {
	const prisma = new PrismaClient();
	try {
		const { username, password }: IAdminAuth = request.body;

		const user = await prisma.admin_accounts.findFirst({
			where: {
				username,
				password,
			},
		});

		if ((username === username && password === password) || user) {
			const { id } = user;
			const authenticatedUser = user ? user : { id, username };
			const accessToken = getAccessToken(authenticatedUser);
			response.status(200).send(accessToken);
		}
	} catch (error) {
		response.json({ error });
	}
}
