CREATE OR REPLACE FUNCTION get_character_with_data(
    IN characterID INT
)
RETURNS TABLE("characterData" JSON) AS $$
BEGIN
    RETURN QUERY SELECT row_to_json("character") as "characterData"
    FROM (
        SELECT 
            "characters".*, -- Utilisez "characters" comme préfixe pour éviter les ambiguïtés
            (
                SELECT jsonb_agg(skills)
                FROM (
                    SELECT * from "skills" WHERE "skills"."character_id" = "characters"."id" -- Utilisez "skills"."character_id" pour éviter l'ambiguïté
                ) as skills
            ) as skills,
            (
                SELECT jsonb_agg(stats)
                FROM (
                    SELECT * FROM "stats" WHERE "stats"."character_id" = "characters"."id" -- Utilisez "stats"."character_id" pour éviter l'ambiguïté
                ) as "stats"
            ) as "stats",
            (
                SELECT jsonb_agg(items)
                FROM (
                    SELECT * FROM "items" WHERE "items"."character_id" = "characters"."id" -- Utilisez "items"."character_id" pour éviter l'ambiguïté
                ) as items
            ) as items
        FROM "characters"
        WHERE "characters"."id" = characterID
    ) as "character";

END;
$$ LANGUAGE plpgsql;


