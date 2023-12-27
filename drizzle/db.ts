import { drizzle, type PlanetScaleDatabase  } from "drizzle-orm/planetscale-serverless";
import { connect } from "@planetscale/database";
import * as schema from "./schema";

// create the connection
const connection = connect({
  url: process.env["DATABASE_URL"],
});

declare global {
    var db: PlanetScaleDatabase<typeof schema> | undefined;
}

export const db = globalThis.db || drizzle(connection, {schema});

if(process.env.NODE_ENV !== "production") {
    globalThis.db = db;
}
