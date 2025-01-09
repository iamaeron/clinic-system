import 'dotenv/config'
import { relations } from "drizzle-orm";
import { pgTable, timestamp, text, boolean, date } from "drizzle-orm/pg-core";
import pg from 'pg'
import { drizzle } from "drizzle-orm/node-postgres";

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL! });
export const db = drizzle({ client: pool });

export const users = pgTable("user", {
	id: text("id").primaryKey(),
    password: text("user_id").notNull(),
    email: text("user_id").notNull().unique(),
    firstname: text("firstname").notNull(),
    lastname: text("lastname").notNull(),
});

export const sessions = pgTable("session", {
	id: text("id").primaryKey(),
	userId: text("user_id")
		.notNull()
		.references(() => users.id),
	expiresAt: timestamp("expires_at", {
		withTimezone: true,
		mode: "date"
	}).notNull(),
});

export const userRelations = relations(users, ({ many }) => ({
	recordsTable: many(recordsTable),
}));

export const recordsTable = pgTable('records', {
    id: text('id').primaryKey(),
	userId: text('user_id').references(() => users.id),
	cause: text('cause'),
	timeIn: date('time_in'),
	timeOut: date('time_out'),
	advisedSolution: text('advised_solution'),
	studentName: text('student_name').notNull(),
	studentSection: text('student_section').notNull(),
	offCampus: boolean('off_campus').default(false),
	createdAt: timestamp('created_at', { withTimezone: true, mode: "date" })
})
