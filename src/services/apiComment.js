import axiosInstance from "./axiosInstance";

export const addComment = async (credentials) => {
  const { data } = await axiosInstance.post(`/comment`, {
    blogId: credentials.blogId,
    comment: credentials.comment,
  });
  return data;
};
