import { getAuth } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";

export default async function handler(req, res) {
    const { userId } = getAuth(req);
    if (!userId) return res.status(401).json({ error: "Unauthorized" });

    if (req.method === "GET") {
        const games = await prisma.game.findMany();
        return res.status(200).json({ games });
    }

    res.status(405).json({ error: "Method Not Allowed" });
}
