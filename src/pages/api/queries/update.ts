import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../prisma/prismaClient";
export default async function Update(
    request: NextApiRequest,
    response: NextApiResponse,
) {

    try {
        const { id, payload } = request.body;
        const updateBlog = prisma.blog.update({
            where: {
                id
            },
            data: {
               
            }
        });
        response.status(200).send(updateBlog);
   } catch (error) {
     response.send(error)
   } 
}