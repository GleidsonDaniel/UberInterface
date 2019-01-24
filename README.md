# React Native Uber Interface

A project made with React native, using the best practices.

## Installation

Clone the repo.

Use the package manager [yarn](https://yarnpkg.com/lang/en/docs/install/) or [npm](https://www.npmjs.com/get-npm) to install the dependencies.

run

```bash
yarn
```

or

```bash
npm install
```

## Requirements

These aplication requires you to obtain an API key for the [Android
SDK](https://developers.google.com/maps/documentation/android-sdk/signup) before run it.

## Usage

1. Specify your Google Maps API Key:

   Add your API key to your env file: (`./env`):
    ```
      // Environment variables
      
      API_KEY='Your Google maps API Key Here'
    ```
2. In your terminal:

   To run on Android:
    ```
      react-native run-android
    ```
    To run on IOS:
    ```
      react-native run-ios
    ```
3. If you are using simulator, set your gps through debug menus or using        external applications (eg fake gps).

   
## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
