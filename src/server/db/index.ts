import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "./schema";

const client = postgres(process.env.POSTGRES_URL!, {
  ssl: { rejectUnauthorized: false }, // Add this if SSL is required
});

export const db = drizzle(client, { schema });
