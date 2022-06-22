import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
interface IAdminAuth {
	username: string;
	password: string;
}
const prisma = new PrismaClient();

export default async function handler(
	request: NextApiRequest,
	response: NextApiResponse
) {
	// const { username, password }: IAdminAuth = request.body;

	const user = await prisma.admin_accounts.findUnique({
		where: {},
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
