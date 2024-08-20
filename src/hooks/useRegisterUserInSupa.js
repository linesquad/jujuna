import { useEffect } from "react";
import { supabase } from "../services/supabase";
import { useUser } from "@clerk/clerk-react";

const useRegisterUserInSupa = () => {
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      const registerUser = async () => {
        try {
          // Check if user already exists
          const { data: existingUser, error } = await supabase
            .from("clients")
            .select("*")
            .eq("clerk_user_id", user.id)
            .single();

          if (!existingUser && !error) {
            // If user doesn't exist, insert new user
            const { error: insertError } = await supabase
              .from("clients")
              .insert({
                clerk_user_id: user.id,
                email: user.emailAddresses[0].emailAddress,
                full_name: `${user.firstName} ${user.lastName}`,
              });

            if (insertError) {
              console.error("Error inserting user:", insertError.message);
            } else {
              console.log("User registered in Supabase");
            }
          }
        } catch (err) {
          console.error("An error occurred:", err);
        }
      };

      registerUser();
    }
  }, [user]);
};

export default useRegisterUserInSupa;
