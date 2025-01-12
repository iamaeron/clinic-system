import { hash } from "argon2"
import { db } from "."
import { users } from "./schema"
import { ARGON_OPTIONS } from "../options"

async function seeder() {

	await db.insert(users).values({
		email: 'senciljohnaeron@gmail.com',
		firstname: "Aeron",
		lastname: "Sencil",
		role: 'admin',
		password: await hash('password', ARGON_OPTIONS),
	})
}

seeder()