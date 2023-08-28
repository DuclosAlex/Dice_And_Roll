BEGIN;

DROP TABLE IF EXISTS "news",
"stats",
"skills",
"items",
"characters", 
"users_and_games",
"games",
"users";

CREATE TABLE IF NOT EXISTS "users" (
    "id" INT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "pseudo" TEXT NOT NULL UNIQUE,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL UNIQUE,
    "is_admin" BOOLEAN NOT NULL DEFAULT FALSE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP, -- on peut également utiliser NOW()
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP -- on peut également utiliser NOW()
);

CREATE TABLE IF NOT EXISTS "games" (
    "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL UNIQUE,
    "description" TEXT NOT NULL,
    "max_players" INT NOT NULL,
    "notes" TEXT,
    "user_id" INT REFERENCES "users"("id") ON DELETE CASCADE,
    "status" TEXT NOT NULL DEFAULT 'en cours',
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP, -- on peut également utiliser NOW()
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP -- on peut également utiliser NOW()
);

CREATE TABLE IF NOT EXISTS "characters" (
    "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "race" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "background" TEXT,
    "user_id" INT REFERENCES "users"("id") ON DELETE CASCADE,
    "games_id" INT REFERENCES "games"("id") ON DELETE CASCADE,
    "is_alive" BOOLEAN NOT NULL DEFAULT TRUE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP, -- on peut également utiliser NOW()
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP -- on peut également utiliser NOW()
);

CREATE TABLE IF NOT EXISTS "items" (
    "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "quantity" INT NOT NULL,
    "description" TEXT NOT NULL,
    "character_id" INT REFERENCES "characters"("id") ON DELETE CASCADE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP, -- on peut également utiliser NOW()
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP -- on peut également utiliser NOW()
);

CREATE TABLE IF NOT EXISTS "skills" (
    "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "character_id" INT REFERENCES "characters"("id") ON DELETE CASCADE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP, -- on peut également utiliser NOW()
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP -- on peut également utiliser NOW()
);

CREATE TABLE IF NOT EXISTS "stats" (
    "id" INT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "strength" INT NOT NULL,
    "dexterity" INT NOT NULL,
    "wisdom" INT NOT NULL,
    "charisma" INT NOT NULL,
    "constitution" INT NOT NULL,
    "intelligence"INT NOT NULL,
    "level" INT NOT NULL,
    "max_hp" INT NOT NULL,
    "current_hp" INT NOT NULL,
    "max_mana" INT NOT NULL,
    "current_mana" INT NOT NULL,
    "character_id" INT REFERENCES "characters"("id") ON DELETE CASCADE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP, -- on peut également utiliser NOW(),
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP -- on peut également utiliser NOW()
);

CREATE TABLE IF NOT EXISTS "news" (
    "id" INT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "title" TEXT NOT NULL UNIQUE,
    "content" TEXT NOT NULL,
    "user_id" INT REFERENCES "users"("id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP, -- on peut également utiliser NOW(),
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP -- on peut également utiliser NOW()
);

COMMIT;