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

export const fetchBlogsId = async (id) => {
  const { data, error } = await supabase
    .from("blog")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Error fetching blog:", error);
    throw new Error("Failed to fetch blog");
  }

  return data;
};

export const paginationBlogs = async (page, limit = 3) => {
  const start = (page - 1) * limit;
  const end = start + limit - 1;

  let { data, error } = await supabase
    .from("blog")
    .select("*")
    .range(start, end);

  if (error) {
    console.error("Error blog pagination:", error);
    throw new Error("Failed to paginate blogs");
  }

  return data;
};
