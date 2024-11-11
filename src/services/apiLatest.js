import axios from "axios";
import { run_dev } from "../../config";

export const fetchLatestCocktails = async () => {
  try {
    const res = await fetch(`${run_dev}/cocktails`);
    const data = await res.json();
    const latestCocktails = data
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
      .slice(0, 3);
    return latestCocktails;
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchLatestBlogs = async () => {
  try {
    const response = await axios.get(`${run_dev}/blogs?isLastThree=true`);
    return response.data;
  } catch (error) {
    console.error("Error fetching latest blog:", error);
    throw error;
  }
};
