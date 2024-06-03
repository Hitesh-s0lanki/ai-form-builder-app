"use server";

import { db } from "@/db/drizzle";
import { run } from "./generative-ai";
import { form } from "@/db/schema";
import { auth } from "@clerk/nextjs/server";
import moment from "moment";
import { and, eq } from "drizzle-orm";

export const getAllForm = async () => {
    try {
        const { userId } = await auth()

        if (!userId) throw new Error("User not found!")

        const res = await db.select().from(form).where(
            eq(form.createdBy, userId)
        )

        return {
            forms: res,
            message: null
        }

    } catch (error: any) {
        return {
            message: error.message
        }
    }
}

export const getFormById = async (id?: string) => {
    try {
        const { userId } = await auth()

        if (!userId) throw new Error("User not found!")

        if (!id) throw new Error("Form Id is not provided")

        const [res] = await db.select().from(form).where(
            and(
                eq(form.createdBy, userId),
                eq(form.id, Number.parseInt(id))
            )
        )

        return {
            form: res,
            message: null
        }

    } catch (error: any) {
        return {
            message: error.message
        }
    }
}

export const onCreateForm = async (prompt: string) => {
    try {
        const { userId } = await auth()

        if (!userId) throw new Error("User not found!")

        const jsonform = await run("Description: " + prompt)

        if (jsonform) {

            const [res] = await db.insert(form).values({
                jsonform: jsonform.split("```")[1],
                createdBy: userId,
                createdAt: moment().format("DD/MM/yyyy")
            }).returning({ id: form.id })

            return res.id
        }

        throw new Error("Geminu AI not working...")
    } catch (error) {

    }
}