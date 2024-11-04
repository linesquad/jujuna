import { run_time_url } from "../../config";

import axios from "axios";
import axiosInstance from "./axiosInstance";

export const getBlogsById = async (blogId) => {
  try {
    const response = await axios.get(`${run_time_url}/blog/${blogId}`);

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
