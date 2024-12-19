import { config } from 'dotenv';
import { drizzle } from 'drizzle-orm/libsql';


config({ path: '.env.local' });
console.log("taalla indexts " + process.env.TURSO_CONNECTION_URL)

export const db = drizzle({ connection: {
  url: process.env.TURSO_CONNECTION_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN!,
}});
