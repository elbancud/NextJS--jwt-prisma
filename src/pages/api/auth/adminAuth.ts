import { PrismaClient } from "@prisma/client";
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
const prisma = new PrismaClient();

export default async function handler(
	request: NextApiRequest,
	response: NextApiResponse
) {
	const id = uuidv4();
	const { username, password }: IAdminAuth = request.body;

	const user = await prisma.admin_accounts.create({
		data: {
			id,
			username,
			password,
			created_at: new Date(),
			updated_at: new Date(),
		},
	});
	// if (
	// 	username === process.env.ADMIN_DEFAULT_USERNAME &&
	// 	password === process.env.ADMIN_DEFAULT_PASSWORD
	// ) {
	// }

	// response.status(200).json({
	// 	title,
	// 	description,
	// });
}
