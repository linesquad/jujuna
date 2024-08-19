import supabase from "./supabase";

export const registration = async (email, password) => {
  const {
    user,
    session,
    error: authError,
  } = await supabase.auth.signUp({
    email,
    password,
  });

  if (authError) {
    throw new Error(authError.message);
  }
  const { error: dbError } = await supabase.from("clients").insert({
    id: user.id,
    email,
  });

  if (dbError) {
    throw new Error(dbError.message);
  }

  return { user, session };
};
