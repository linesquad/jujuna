const fetchCocktails = async () => {
  try {
    const res = await fetch("http://localhost:8001/cocktails");
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export default fetchCocktails;

export const fetchCocktailsId = async (id) => {
  try {
    const res = await fetch(`http://localhost:8001/cocktail/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
