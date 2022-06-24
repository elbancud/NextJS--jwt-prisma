import { NextApiResponse, NextApiRequest } from "next";
import prisma from "../../../../prisma/prismaClient";

export default async function Delete(
	request: NextApiRequest,
	response: NextApiResponse
): Promise<void> {
	try {
		const { id, model } = request.body;
		response.send(id + model);
	} catch (error) {
		response.send(error);
	}
}
