import { drizzle, type PlanetScaleDatabase  } from "drizzle-orm/planetscale-serverless";
import { connect } from "@planetscale/database";

// create the connection
const connection = connect({
  host: process.env["DATABASE_HOST"],
  username: process.env["DATABASE_USERNAME"],
  password: process.env["DATABASE_PASSWORD"],
});

declare global {
    var db: PlanetScaleDatabase | undefined;
}

export const db = globalThis.db || drizzle(connection);

if(process.env.NODE_ENV !== "production") {
    globalThis.db = db;
}