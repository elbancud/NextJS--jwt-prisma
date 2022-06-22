import { PrismaClient, Prisma } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";
interface IAdminAuth {
	username: string;
	password: string;
}
interface IUuid {
	id: string;
}
interface IDate {
	created_at: Date;
	updated_at: Date;
}

export default async function adminAuth(
	request: NextApiRequest,
	response: NextApiResponse
) {
	const prisma = new PrismaClient();

	try {
		const id = uuidv4();
		const { username, password }: IAdminAuth = request.body;

		const user = await prisma.admin_accounts.create({
			data: {
				id,
				username,
				password,
			},
		});
		response.json({ user });
	} catch (error) {
		response.json({ error });
	}
	// if (
	// 	username === process.env.ADMIN_DEFAULT_USERNAME &&
	// 	password === process.env.ADMIN_DEFAULT_PASSWORD
	// ) {
	// }
}
