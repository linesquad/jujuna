import useOrders from "../hooks/useOrders";

export const Orders = () => {
  const { isLoading, data, error, isError } = useOrders(3);

  if (isLoading) return <h1>Loading...</h1>;

  console.log(data);
  return <div>Hello</div>;
};
