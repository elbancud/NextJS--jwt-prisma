import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";
import prisma from "../../../../prisma/prismaClient";
export default async function createBlog(
	request: NextApiRequest,
	response: NextApiResponse
): Promise<void> {
	try {
		const { title, content } = request.body;
		const id = uuidv4();
		const Blog = await prisma.blog.create({
			data: {
				id,
				created_at: new Date(),
				updated_at: new Date(),
				title,
				content,
			},
		});
		response.status(200).send(Blog);
	} catch (e) {
		response.send(e);
	}
}
