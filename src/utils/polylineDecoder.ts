// utils/polylineDecoder.ts
export const decodePolyline = (str: string, precision = 5) => {
  let index = 0, lat = 0, lng = 0, coordinates = [], shift = 0, result = 0, byte = null;
  const factor = Math.pow(10, precision);

  while (index < str.length) {
    byte = null; shift = 0; result = 0;

    do {
      byte = str.charCodeAt(index++) - 63;
      result |= (byte & 0x1f) << shift;
      shift += 5;
    } while (byte >= 0x20);

    const deltaLat = (result & 1) ? ~(result >> 1) : (result >> 1);
    lat += deltaLat;

    shift = 0; result = 0;
    do {
      byte = str.charCodeAt(index++) - 63;
      result |= (byte & 0x1f) << shift;
      shift += 5;
    } while (byte >= 0x20);

    const deltaLng = (result & 1) ? ~(result >> 1) : (result >> 1);
    lng += deltaLng;

    coordinates.push({
      latitude: lat / factor,
      longitude: lng / factor,
    });
  }

  return coordinates;
};
