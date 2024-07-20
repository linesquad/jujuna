import supabase from "./supabase";

const apiOrders = async (orderId) => {
  let { data, error } = await supabase
    .from("orderItems")
    .select(
      `
            orderId,
            quantity,
            secondProductId (id, created_at, color, price, alco, ingredients, name, image),
            productId (id, name, price, created_at, color, age, size, image, brand, alco)
        `
    )
    .eq("orderId", orderId);

  if (error) throw new Error("chemi yle gafecha");

  return { data, error };
};

export default apiOrders;
