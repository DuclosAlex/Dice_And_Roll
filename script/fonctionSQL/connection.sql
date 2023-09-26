-- Appele quand le users se connect et recupere ses info
CREATE OR REPLACE FUNCTION user_login(IN test_email TEXT)
RETURNS TABLE("user" json) AS $$
 
 
BEGIN
RETURN QUERY SELECT row_to_json(Joueurs) as "user"
FROM (
	SELECT us.id, us.email, us.is_admin, us.pseudo,  (
		SELECT jsonb_agg(characters)
		FROM(
			SELECT * FROM "characters"
			WHERE "characters".user_id = us.id
		)AS characters
	) AS characters,
	(
		SELECT jsonb_agg(Games)
		FROM (
			SELECT gmj."name", gmj.id, gmj."status", gmj."description", gmj."max_players", gmj.user_id, umj."pseudo"
			FROM "games" as gmj
			JOIN "characters" as cha ON cha.user_id = us.id
			JOIN "users" as umj ON umj.id = gmj.user_id
			WHERE gmj.user_id = us.id OR gmj.id = cha.games_id
		) as Games
	) as Games
	FROM "users" as us
	WHERE us."email" = test_email
) AS Joueurs;

END;

$$ LANGUAGE plpgsql;