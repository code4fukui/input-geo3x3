# input-geo3x3

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A custom web component that allows users to input geographic coordinates and display them in the Geo3x3 format.

## Demo
https://code4fukui.github.io/input-geo3x3/

## Features
- Converts between latitude/longitude and Geo3x3 formats
- Automatically adjusts Geo3x3 level based on map zoom level
- Can be used as a custom HTML element (`<input-geo3x3>`)

## Requirements
None, the component is self-contained.

## Usage
To use the `<input-geo3x3>` element, include the `input-geo3x3.js` file in your HTML:

```html
<script type="module" src="./input-geo3x3.js"></script>
<input-geo3x3 id="inpgeo3x3"></input-geo3x3>
```

The component can be set with a Geo3x3 string, an array of `[lat, lng]`, or an object `{lat, lng}`:

```javascript
inpgeo3x3.value = "E91387397";
inpgeo3x3.value = [35.94352195669658, 136.18863701820376];
inpgeo3x3.value = { lat: 36.06521633161721, lng: 136.22171670198443 };
```

## License
MIT License — see [LICENSE](LICENSE).