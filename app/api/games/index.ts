import { NextApiRequest, NextApiResponse } from "next";
import { getAuth } from "@clerk/nextjs/server";
import prisma from "../../../lib/prisma";


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
): Promise<void> {
    const { userId } = getAuth(req);
    if (!userId) {
        return res.status(401).json({ error: "Unauthorized" });
    }

    if (req.method === "GET") {
        try {
            const games = await prisma.game.findMany();
            return res.status(200).json({ games });
        } catch (error) {
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }

    res.status(405).json({ error: "Method Not Allowed" });
}
