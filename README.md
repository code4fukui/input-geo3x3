# input-geo3x3

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A custom web component (`<input-geo3x3>`) that provides an interactive map for inputting geographic coordinates and retrieving them in [Geo3x3](https://geo3x3.com/) format.

## Demo

https://code4fukui.github.io/input-geo3x3/

## Features

-   **Interactive Map Input**: Provides a map interface to visually select a geographic location.
-   **Geo3x3 Output**: The component's value is a Geo3x3 code representing the map's center.
-   **Automatic Precision**: Automatically adjusts the Geo3x3 level (precision) based on the map's zoom level.
-   **Flexible Initialization**: Set the initial position using a Geo3x3 string, a `[latitude, longitude]` array, or a `{lat, lng}` object.

## Usage

1.  **Import the component module:**

    ```html
    <script type="module" src="https://code4fukui.github.io/input-geo3x3/input-geo3x3.js"></script>
    ```

2.  **Add the element to your HTML:**

    ```html
    <input-geo3x3 id="geo-input"></input-geo3x3>
    ```

## API

### Getting the Value

Read the current Geo3x3 code from the `.value` property. The `onchange` event fires whenever the user pans or zooms the map.

```javascript
const geoInput = document.getElementById("geo-input");

geoInput.onchange = () => {
  console.log(geoInput.value); // e.g., "E91387397"
};
```

### Setting the Value

Set the map's position by assigning a value to the `.value` property.

```javascript
// Set via Geo3x3 string
geoInput.value = "E91387397";

// Set via [lat, lng] array
geoInput.value = [35.943521, 136.188637];

// Set via {lat, lng} object
geoInput.value = { lat: 36.065216, lng: 136.221716 };
```

## Dependencies

This component is built upon and imports the following modules:
-   [input-latlng](https://github.com/code4fukui/input-latlng)
-   [Geo3x3.js](https://geo3x3.com/)

## License

MIT License