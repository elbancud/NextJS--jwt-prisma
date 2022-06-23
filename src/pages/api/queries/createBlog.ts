import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";

export default async function createBlog(
	request: NextApiRequest,
	response: NextApiResponse
): Promise<void> {
	try {
		const prisma = new PrismaClient();
		const { title, content } = request.body;
		const id = uuidv4();
		const saveBlog = await prisma.blog.create({
			data: {
				id,
				created_at: new Date(),
				updated_at: new Date(),
			},
		});
		response.status(200).send(saveBlog);
	} catch (e) {
		response.send(e);
	}
}
