import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function adminAuth(
	request: NextApiRequest,
	response: NextApiResponse
): Promise<void> {
	const prisma = new PrismaClient();
	try {
		const blogs = await prisma.blog.findMany();
		response.send(blogs);
	} catch (error) {
		response.json({ error });
	}
}
