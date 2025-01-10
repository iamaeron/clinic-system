import pg from 'pg'
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "./schema";
import { reset } from 'drizzle-seed';

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL! }, );
export const db = drizzle({ client: pool, schema });

async function resetDB() {
    await reset(db, schema)
}

resetDB()