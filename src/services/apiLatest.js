import supabase from "./supabase";

export const fetchLatestBlogs = async () => {
  let { data, error } = await supabase
    .from("blog")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(3);

  if (error) {
    console.error(error);
    throw new Error("Blog could not be loaded");
  }

  return data;
};
