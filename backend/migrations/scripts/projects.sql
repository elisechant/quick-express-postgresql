
CREATE TABLE IF NOT EXISTS "projects" (
  "id" serial primary key not null,
  "name" text NOT NULL,
  "created_at" timestamp(6) NOT NULL DEFAULT statement_timestamp(),
  "updated_at" timestamp(6) NOT NULL DEFAULT statement_timestamp()
);
