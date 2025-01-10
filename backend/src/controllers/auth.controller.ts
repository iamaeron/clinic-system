import { Context } from "hono";
import { lucia } from "../auth";
import { verify } from "@node-rs/argon2";
import { db } from "../db";
import { users } from "../db/schema";
import { eq } from "drizzle-orm";
import { ARGON_OPTIONS } from "../options";

export const authController = async (c: Context) => {
	const formData = await c.req.formData();
	const email = formData.get("email");
	if (!email || typeof email !== "string") {
		return new Response("Invalid email", {
			status: 400
		});
	}
	const password = formData.get("password");
	if (!password || typeof password !== "string") {
		return new Response(null, {
			status: 400
		});
	}

	const user = await db.query.users.findFirst({
        where: eq(users.email, email)
    })

	if (!user) {
		// NOTE:
		// Returning immediately allows malicious actors to figure out valid emails from response times,
		// allowing them to only focus on guessing passwords in brute-force attacks.
		// As a preventive measure, you may want to hash passwords even for invalid emails.
		// However, valid emails can be already be revealed with the signup page
		// and a similar timing issue can likely be found in password reset implementation.
		// It will also be much more resource intensive.
		// Since protecting against this is non-trivial,
		// it is crucial your implementation is protected against brute-force attacks with login throttling etc.
		// If emails/usernames are public, you may outright tell the user that the username is invalid.
		return new Response("Invalid email or password", {
			status: 400
		});
	}

	const validPassword = await verify(user.password, password, ARGON_OPTIONS);
	if (!validPassword) {
		return new Response("Invalid email or password", {
			status: 400
		});
	}

	const session = await lucia.createSession(user.id, {});
	const sessionCookie = lucia.createSessionCookie(session.id);
	return new Response(null, {
		status: 302,
		headers: {
			Location: "/",
			"Set-Cookie": sessionCookie.serialize()
		}
	});
}