const baseUrl = 'http://localhost:3030/jsonstore/menu';

export const getAllBBQDishes = async () => {
    const response = await fetch(baseUrl);
    const result = await response.json();

    // const data = Object.values(result);

    function filterDataByCategory(data, category) {
        return Object.values(data).filter(item => item.category === category);
      }

    const filteredBBQDishes = filterDataByCategory(result, "BBQ Dish");
    console.log(filteredBBQDishes);
    return filteredBBQDishes;
};

export const getAllSideDishes = async () => {
    const response = await fetch(baseUrl);
    const result = await response.json();

    // const data = Object.values(result);

    function filterDataByCategory(data, category) {
        return Object.values(data).filter(item => item.category === category);
      }

    const filteredSideDishes = filterDataByCategory(result, "Sides");
    console.log(filteredSideDishes);
    return filteredSideDishes;
};

export const getAllBeveragesDishes = async () => {
    const response = await fetch(baseUrl);
    const result = await response.json();

    // const data = Object.values(result);

    function filterDataByCategory(data, category) {
        return Object.values(data).filter(item => item.category === category);
      }

    const filteredBeveragesDishes = filterDataByCategory(result, "Beverages");
    console.log(filteredBeveragesDishes);
    return filteredBeveragesDishes;
};

export const getOne = async (menuid) => {
  const response = await fetch(`${baseUrl}/${menuid}`);
  const result = await response.json();

  return result;
};