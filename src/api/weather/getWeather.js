export async function getWeather(city) {
  const data = await fetch(`http://api.weatherstack.com/current?access_key=c18c9cd0a7159022db85263eea437534&query=${city}`);
  const parsedData = await data.json();
  return parsedData;
}
