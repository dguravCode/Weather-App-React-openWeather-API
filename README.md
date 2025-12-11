# 🌤️ Weather App - React

A real-time weather application built with React that fetches current weather data using the OpenWeather API. Get instant weather information for any city with a clean, modern interface.

# Screenshot
<img width="846" height="717" alt="image" src="https://github.com/user-attachments/assets/14f8b8e2-ac92-44df-9766-40ba38babdac" />


## ✨ Features

- 🔍 **Search by City** - Look up weather for any city worldwide
- 🌡️ **Current Temperature** - Display real-time temperature in Celsius
- 💧 **Humidity & Pressure** - View atmospheric conditions
- 💨 **Wind Speed** - Check current wind velocity
- 🌅 **Sunset Time** - Know when sunset occurs in the selected timezone
- 🎨 **Dynamic Weather Icons** - Icons change based on weather conditions (Sunny, Cloudy, Rainy, etc.)
- ⏰ **Timezone Display** - Shows local time for the searched city
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices

## 🛠️ Tech Stack

- **React** 19.2.1
- **OpenWeather API** - Real-time weather data
- **CSS3** - Modern styling with animations
- **Weather Icons Library** - Beautiful weather condition icons

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- OpenWeather API key (free at [openweathermap.org](https://openweathermap.org/api))

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd reactdatta2
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
REACT_APP_WEATHER_API_KEY=your_api_key_here
```

4. Start the development server:
```bash
npm start
```

The app will open at `http://localhost:3000`

## 📁 Project Structure

```
src/
├── components/
│   └── WeatherApp/
│       ├── Temperature.js       # Main component with search functionality
│       ├── WeatherCard.js        # Displays weather information
│       └── style.css             # Weather app styling
├── App.js                        # Root component
└── index.js                      # Entry point
```

## 📖 How to Use

1. **Open the Application** - Navigate to `http://localhost:3000`
2. **Search for a City** - Enter a city name in the search box
3. **Click Search** - Press the Search button to fetch weather data
4. **View Weather Details** - See temperature, humidity, pressure, wind speed, sunset time, and weather condition
5. **Dynamic Updates** - The timezone adjusts based on the searched city

## 🌐 API Integration

The app uses the [OpenWeather API](https://openweathermap.org/api) endpoint:
```
https://api.openweathermap.org/data/2.5/weather?q={city}&units=metric&appid={apiKey}
```

**Response Data Used:**
- `main.temp` - Temperature
- `main.humidity` - Humidity percentage
- `main.pressure` - Atmospheric pressure
- `weather[0].main` - Weather condition
- `wind.speed` - Wind speed
- `sys.country` - Country code
- `sys.sunset` - Sunset timestamp
- `timezone` - Timezone offset

## 🎨 Weather Icon Mapping

- **Clouds** → `wi-day-cloudy`
- **Sunny** → `wi-day-sunny`
- **Haze** → `wi-day-fog`
- **Rain** → `wi-showers`
- **Mist** → `wi-dust`
- **Default** → `wi-day-sunny`

## 📦 Available Scripts

- `npm start` - Run the app in development mode
- `npm build` - Build the app for production
- `npm test` - Launch the test runner
- `npm eject` - Eject from create-react-app (irreversible)

## 🌍 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Component Details

### [Temperature.js](src/components/WeatherApp/Temperature.js)
Main component that handles:
- Search input state management
- API calls to OpenWeather
- State management for weather data
- Passes data to WeatherCard component

### [WeatherCard.js](src/components/WeatherApp/WeatherCard.js)
Displays weather information:
- Weather icon based on conditions
- Current temperature
- Weather condition and location
- Local timezone
- Sunrise/Sunset, Humidity, Pressure, Wind Speed details

## 🔧 Environment Variables

Create a `.env` file with:
```
REACT_APP_WEATHER_API_KEY=your_openweather_api_key
```

Get your free API key from [OpenWeatherMap](https://openweathermap.org/api)

## ⚠️ Error Handling

The app includes try-catch error handling for API calls. If a city is not found or the API fails, check the browser console for error messages.

## 🎯 Future Enhancements

- 5-day weather forecast
- Multiple city comparisons
- Weather alerts and notifications
- Favorite cities list
- Dark/Light theme toggle
- Geolocation support


## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and enhancement requests.

---

**Built with ❤️ using React and OpenWeather API**
