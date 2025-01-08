CREATE TABLE "profile_info" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text,
	"firstname" text,
	"lastname" text,
	"email" text,
	"phone_num" text
);
--> statement-breakpoint
ALTER TABLE "profile_info" ADD CONSTRAINT "profile_info_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;