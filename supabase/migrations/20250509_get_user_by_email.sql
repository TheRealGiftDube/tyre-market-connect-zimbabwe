
-- Create a function that returns a user by email
CREATE OR REPLACE FUNCTION get_user_by_email(email_param TEXT)
RETURNS TABLE (id UUID) AS $$
BEGIN
  RETURN QUERY
  SELECT profiles.id
  FROM profiles
  WHERE email = email_param
  LIMIT 1;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
