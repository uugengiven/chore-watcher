import { mysqlTable, serial, timestamp, varchar, text, int } from 'drizzle-orm/mysql-core';

export const users = mysqlTable('users', {
    id: serial('id').primaryKey().notNull(),
    username: varchar('username', { length: 255 }),
    imageUrl: varchar('imageUrl', { length: 500 }),
    externalUserId: varchar('externalUserId', { length: 255 }),
    bio: text('bio'),

    created_at: timestamp('created_at', { mode: 'string' }).defaultNow(),
    updated_at: timestamp('updated_at', { mode: 'string' }).defaultNow(),
});

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
