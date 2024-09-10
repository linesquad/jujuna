const URL = "http://localhost:8001";

const fetchCocktails = async () => {
  try {
    const res = await fetch(`${URL}/cocktails`);
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export default fetchCocktails;

export const fetchCocktailsId = async (id) => {
  try {
    const res = await fetch(`${URL}/cocktail/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
