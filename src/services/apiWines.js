import supabase from "./supabase";

const fetchWines = async (type) => {
  // let { data, error } = await supabase.from("wine").select("*");

  let query = supabase.from("wine").select("*");

  if (type) {
    query = query.eq("type", type);
  }

  const { data, error } = await query;

  if (error) {
    console.error(error);
    throw new Error("Blog could not be loaded");
  }

  return data;
};

export const fetchWineById = async (id) => {
  const { data, error } = await supabase
    .from("wine")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Error fetching wine:", error);
    throw new Error("Failed to fetch wine");
  }
  return data;
};

export default fetchWines;
