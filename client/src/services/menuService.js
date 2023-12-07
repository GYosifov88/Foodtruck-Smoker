const baseUrl = 'http://localhost:3030/data/menu';

export const getAllBBQDishes = async () => {
    const response = await fetch(baseUrl);
    const result = await response.json();

    function filterDataByCategory(data, category) {
        return Object.values(data).filter(item => item.category === category);
      }

    const filteredBBQDishes = filterDataByCategory(result, "BBQ Dish");
    return filteredBBQDishes;
};

export const getAllSideDishes = async () => {
    const response = await fetch(baseUrl);
    const result = await response.json();

    function filterDataByCategory(data, category) {
        return Object.values(data).filter(item => item.category === category);
      }

    const filteredSideDishes = filterDataByCategory(result, "Sides");
    return filteredSideDishes;
};

export const getAllBeveragesDishes = async () => {
    const response = await fetch(baseUrl);
    const result = await response.json();

    function filterDataByCategory(data, category) {
        return Object.values(data).filter(item => item.category === category);
      }

    const filteredBeveragesDishes = filterDataByCategory(result, "Beverages");
    return filteredBeveragesDishes;
};

export const getOne = async (menuid) => {
  const response = await fetch(`${baseUrl}/${menuid}`);
  const result = await response.json();

  return result;
};