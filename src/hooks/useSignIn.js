import supabase from "../services/supabase";
import { useMutation } from "@tanstack/react-query";

export const useSignIn = () => {
  return useMutation(async ({ email, password }) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw new Error(error.message);

    return { data };
  });
};
