import 'dotenv/config'
import { DrizzlePostgreSQLAdapter } from "@lucia-auth/adapter-drizzle";
import { relations } from "drizzle-orm";
import { drizzle } from "drizzle-orm/node-postgres";
import { pgTable, timestamp, text, boolean } from "drizzle-orm/pg-core";
import pg from 'pg'
import { Lucia } from 'lucia';

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL! });
const db = drizzle({ client: pool });

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
	advisedSolution: text('advised_solution'),
	studentName: text('student_name'),
	studentSection: text('student_section').notNull(),
	offCampus: boolean('off_campus').default(false),
})

const adapter = new DrizzlePostgreSQLAdapter(db, sessions, users);

export const lucia = new Lucia(adapter, {
	sessionCookie: {
		attributes: {
			// set to `true` when using HTTPS
			secure: process.env.NODE_ENV === "production"
		}
	}
});

// IMPORTANT!
declare module "lucia" {
	interface Register {
		Lucia: typeof lucia;
	}
}