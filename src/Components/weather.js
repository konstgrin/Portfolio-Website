import { fetchWeatherApi } from "openmeteo";

export default async function weatherReport() {
    const params = {
        latitude: 53.9,
        longitude: 27.5667,
        current: ["temperature_2m", "weather_code"],
    };

    const url = "https://api.open-meteo.com/v1/forecast";
    const responses = await fetchWeatherApi(url, params);

    // Process first location. Add a for-loop for multiple locations or weather models
    const response = responses[0];

    // Attributes for timezone and location
    const latitude = response.latitude();
    const longitude = response.longitude();
    const elevation = response.elevation();
    const utcOffsetSeconds = response.utcOffsetSeconds();

    console.log(
        `\nCoordinates: ${latitude}°N ${longitude}°E`,
        `\nElevation: ${elevation}m asl`,
        `\nTimezone difference to GMT+0: ${utcOffsetSeconds}s`,
    );

    const current = response.current();

    // Note: The order of weather variables in the URL query and the indices below need to match!
    const weatherData = {
        current: {
            temperature_2m: current.variables(0).value(),
            weather_code: current.variables(1).value(),
        },
    };

    // The 'weatherData' object now contains a simple structure, with arrays of datetimes and weather information
    console.log(
        `\nCurrent temperature_2m: ${weatherData.current.temperature_2m}`,
        `\nCurrent weather_code: ${weatherData.current.weather_code}`,
    );

    return weatherData;
}