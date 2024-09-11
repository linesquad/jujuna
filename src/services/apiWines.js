const URL = "http://localhost:8001";
// const URL = import.meta.env.SERVER_URL;

const fetchWines = async () => {
  try {
    const response = await fetch(`${URL}/wines`);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
};

export const fetchWineById = async (id) => {
  try {
    const response = await fetch(`${URL}/wine/${id}`);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
};

export default fetchWines;
