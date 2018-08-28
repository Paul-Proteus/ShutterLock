CREATE TABLE "account" (
	"_id" serial NOT NULL,
	"username" varchar NOT NULL UNIQUE,
	"password" varchar NOT NULL,
	CONSTRAINT account_pk PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "album" (
	"_id" serial NOT NULL,
	"lock_photo" varchar NOT NULL,
	"key_photo" varchar NOT NULL,
	"account_id" varchar NOT NULL,
	CONSTRAINT album_pk PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

ALTER TABLE "album" ADD CONSTRAINT "album_fk0" FOREIGN KEY ("account_id") REFERENCES "account"("_id");
