import supabase from "./supabase";

const fetchBlogs = async () => {
  let { data, error } = await supabase.from("blog").select("*");

  if (error) {
    console.error(error);
    throw new Error("Blog could not be loaded");
  }

  return data;
};

export default fetchBlogs;
