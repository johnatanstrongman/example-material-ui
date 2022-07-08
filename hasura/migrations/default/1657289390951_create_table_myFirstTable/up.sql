
    CREATE TABLE "public"."myFirstTable"
    (id uuid NOT NULL DEFAULT gen_random_uuid(), 
    name text NOT NULL, 
    is_deleted boolean NOT NULL DEFAULT false, 
    created_at timestamptz NOT NULL DEFAULT now(), 
    updated_at timestamptz NOT NULL DEFAULT now(), 
    PRIMARY KEY (id));


    CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
    RETURNS TRIGGER AS $$
    DECLARE
      _new record;
    BEGIN
      _new := NEW;
      _new."updated_at" = NOW();
      RETURN _new;
    END;
    $$ LANGUAGE plpgsql;

    CREATE TRIGGER "set_public_myFirstTable_updated_at"
    BEFORE UPDATE ON "public"."myFirstTable"
    FOR EACH ROW
    EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
    