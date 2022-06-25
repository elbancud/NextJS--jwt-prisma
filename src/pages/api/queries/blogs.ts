import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../prisma/prismaClient";
export default async function adminAuth(
	request: NextApiRequest,
	response: NextApiResponse
): Promise<void> {
	try {
		const blogs = await prisma.blog.findMany();
		response.send(blogs);
	} catch (error) {
		response.json({ error });
	}
}
