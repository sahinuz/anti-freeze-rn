# Anti Freeze Project

This project is a React Native application that displays sensor data for temperature, humidity, distance, and piezo data from a ThingSpeak channel. The application fetches data from the ThingSpeak API and visualizes it using line charts.

## Features

- Fetches temperature, humidity, distance, and piezo data from a ThingSpeak channel.
- Displays the data in line charts.
- Calculates and displays a result based on the fetched data.
- Updates data every 5 seconds.

## Screenshots

Freezing Occuring |  Freezing Not Occuring
:--------------------:|:--------------------:
<img src="https://i.hizliresim.com/sitbj6u.jpeg" width="75%" height="%75">  |  <img src="https://i.hizliresim.com/4bz8oj9.jpeg" width="75%" height="%75">


## Prerequisites

- Node.js
- React Native CLI
- A ThingSpeak account with an active channel

### Configuration

1. Open the `HomeScreen.js` file and update the following constants with your own values:
    ```javascript
    const THINGSPEAK_API_KEY = 'YOUR_THINGSPEAK_READ_API_KEY'; // ThingSpeak API key
    const YOUR_CHANNEL_ID = 'YOUR_THINGSPEAK_CHANNEL_ID'; // ThingSpeak channel ID
    ```
    
## Running the Application

1. Start the Metro bundler:

    ```bash
    npx react-native start
    ```

2. In another terminal, run the application on an emulator or connected device:

    ```bash
    npx react-native run-android
    # or
    npx react-native run-ios
    ```

