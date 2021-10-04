import { InputLatLng } from "https://code4fukui.github.io/input-latlng/input-latlng.js";
import { Geo3x3 } from "https://geo3x3.com/Geo3x3.js";

class Geo3x3Level {
  /*
  static toLeafletZoom(level) {
    if (level < )

  }
  */
  static fromLeafletZoom(zoom) {
    if (zoom < 0) {
      zoom = 0;
    } else if (zoom > 18) {
      zoom = 18;
    }
    return [
      5, // zoom 0
      6,
      7,
      8,
      8,
      9,
      9,
      10,
      10,
      11,
      11,
      12,
      12,
      13,
      13,
      14,
      14,
      15,
      16, // zoom 18
    ][zoom];
  }
}

const normalizeLng = (lng) => {
  while (lng > 180) {
    lng -= 360;
  }
  while (lng < -180) {
    lng += 360;
  }
  return lng;
};

class InputGeo3x3 extends InputLatLng {
  constructor(lat, lng) {
    super(lat, lng);
  }
  set value(v) {
    super.value = v;
  }
  get value() {
    const ll = this.map.getCenter();
    const lat = ll.lat;
    const lng = normalizeLng(ll.lng);
    const zoom = this.map.getZoom();
    const level = Geo3x3Level.fromLeafletZoom(zoom);
    return Geo3x3.encode(lat, lng, level);
  }
}

customElements.define("input-geo3x3", InputGeo3x3);

export { InputGeo3x3 };
