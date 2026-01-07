"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import prisma from "@repo/db/client";

export async function createOnRampTransaction(amount: number, provider: string) {
    try {
        const session = await getServerSession(authOptions);
        const token = Math.random().toString();
        const userId = session?.user.id;
        if (!userId) {
            return {
                message: "User not logged in",
            };
        }

        await prisma.onRampTransaction.create({
            data: {
                userId: Number(userId),
                amount,
                provider,
                status: "Processing",
                startTime: new Date(),
                token,
            },
        });

        return {
            message: "On ramp transaction added",
        };
    } catch (error) {
        console.log(error);
        return {
            message: "Failed to add on ramp transaction",
        };
    }
}
