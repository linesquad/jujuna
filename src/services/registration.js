import supabase from "./supabase";

export const registration = async (email, password) => {
  try {
    const {
      user,
      session,
      error: authError,
    } = await supabase.auth.signUp({
      email,
      password,
    });

    if (authError) {
      console.warn("Rate limit hit. Please try again later.");
      // Handle specific error, e.g., rate limit exceeded
      return;
    }

    if (user) {
      const { data, error: dbError } = await supabase.from("clients").insert({
        id: user.id,
        email,
      });

      if (dbError) {
        throw new Error(dbError.message);
      }

      return { user, session };
    } else {
      throw new Error("User registration failed.");
    }
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
};
