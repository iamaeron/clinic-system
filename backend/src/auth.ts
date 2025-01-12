import { DrizzlePostgreSQLAdapter } from "@lucia-auth/adapter-drizzle";
import { Lucia } from 'lucia';
import { sessions, users } from './db/schema';
import { db } from "./db";

const adapter = new DrizzlePostgreSQLAdapter(db, sessions, users);

export const lucia = new Lucia(adapter, {
	sessionCookie: {
		attributes: {
			// set to `true` when using HTTPS
			secure: process.env.NODE_ENV === "production"
		}
	},
	getUserAttributes(databaseUserAttributes) {
		return {
			email: databaseUserAttributes.email, 
			firstname: databaseUserAttributes.firstname,
			lastname: databaseUserAttributes.lastname
		}
	},
});

// IMPORTANT!
declare module "lucia" {
	interface Register {
		Lucia: typeof lucia;
		DatabaseUserAttributes: DatabaseUserAttributes;
	}
}

interface DatabaseUserAttributes {
	email: string;
	firstname: string
	lastname: string
}