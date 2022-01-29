create TABLE "user"(
    id SERIAL PRIMARY KEY,
    shared BOOLEAN,
    email VARCHAR(255) UNIQUE
);