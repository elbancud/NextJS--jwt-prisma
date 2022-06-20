import { NextApiRequest, NextApiResponse } from "next";

interface IAdminAuth {
	title: string;
	description: string;
}

export default function handler(
	request: NextApiRequest,
	response: NextApiResponse
) {
	const { title, description } = request.body;
}
