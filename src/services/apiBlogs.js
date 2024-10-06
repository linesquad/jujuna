const URL = process.env.REACT_APP_URL;

import axios from "axios";
import axiosInstance from "./axiosInstance";

// export const paginationBlogs = async (page, limit = 3) => {
//   const start = (page - 1) * limit;
//   const end = start + limit - 1;

//   let { data, error } = await supabase
//     .from("blog")
//     .select("*")
//     .range(start, end);

//   if (error) {
//     console.error("Error blog pagination:", error);
//     throw new Error("Failed to paginate blogs");
//   }

//   return data;
// };

export const getBlogsById = async (blogId) => {
  try {
    const response = await axios.get(`${URL}/blog/${blogId}`);

    return response.data;
  } catch (error) {
    console.error("Error fetching blog by ID:", error);
    throw error;
  }
};

const fetchBlogs = async () => {
  try {
    const { data } = await axiosInstance.get("/blogs");
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export default fetchBlogs;
