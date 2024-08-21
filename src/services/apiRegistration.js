// supabaseApi.js
import supabase from "../services/supabase";

export const checkIfUserExists = async (userId) => {
  try {
    const { data: existingUser, error } = await supabase
      .from("clients")
      .select("*")
      .eq("clerk_user_id", userId)
      .single();

    if (error) {
      console.error("Error fetching user:", error.message);
      return null;
    }

    return existingUser;
  } catch (err) {
    console.error("An error occurred while checking if user exists:", err);
    return null;
  }
};

export const registerNewUser = async (user) => {
  try {
    const email = user.emailAddresses?.[0]?.emailAddress || "No email provided";
    const userId = user.id || "111";

    // Log the payload
    const payload = {
      clerk_user_id: userId,
      email: email,
      fullName: `${user.firstName} ${user.lastName}`,
    };
    console.log("Payload being sent to Supabase:", payload);

    const { error: insertError } = await supabase
      .from("clients")
      .insert(payload);

    if (insertError) {
      console.error("Error inserting user:", insertError.message);
      return false;
    }

    console.log("User registered in Supabase");
    return true;
  } catch (err) {
    console.error("An error occurred while registering the user:", err);
    return false;
  }
};
