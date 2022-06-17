/* eslint-disable linebreak-style */
const KEY = '428b13c7b7f54df8bce192825221506';
const fetchData = async (city) => {
  const url = `http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&lang=pt`;
  const fetchResponse = await fetch(url);
  const data = await fetchResponse.json();
  // eslint-disable-next-line
  return data;
};
export default fetchData;
