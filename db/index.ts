import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "@db/schema";

if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL must be set. Did you forget to provision a database?",
  );
}

// Create a postgres client with basic configuration
const client = postgres(process.env.DATABASE_URL, {
  max: 1, // Reduce connection pool size for simpler handling
  idle_timeout: 30, // Keep idle connections alive for 30 seconds
  max_lifetime: 60 * 30, // Maximum connection lifetime of 30 minutes
});

// Create the drizzle database instance
export const db = drizzle(client, { schema });

// Test database connection with retries
export async function testConnection(retries = 3, delay = 1000) {
  for (let i = 0; i < retries; i++) {
    try {
      const result = await client`SELECT 1`;
      if (result && result.length > 0) {
        return true;
      }
    } catch (error) {
      if (i === retries - 1) {
        console.error('Final database connection attempt failed:', error);
        return false;
      }
      console.warn(`Database connection attempt ${i + 1} failed, retrying...`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
  return false;
}
