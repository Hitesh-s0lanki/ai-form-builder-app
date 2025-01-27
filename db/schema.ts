import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const form = pgTable('forms', {
    id: serial('id').primaryKey(),
    jsonform: text('jsonform').notNull(),
    createdBy: varchar('createdBy').notNull(),
    createdAt: varchar('createdAt').notNull()
}) 