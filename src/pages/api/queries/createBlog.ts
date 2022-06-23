import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";
export default async function createBlogs(
	request: NextApiRequest,
	response: NextApiResponse
): Promise<void> {
	try {
		const { title, content } = request.body;
		const prisma = new PrismaClient();
		const id = uuidv4();
		const save = await prisma.blog.create({
			data: {
				id,
				title,
				content,
				created_at: new Date(),
				updated_at: new Date(),
			},
		});
		response.status(2).send(save);
	} catch (e) {
		response.send(e);
	}
}
