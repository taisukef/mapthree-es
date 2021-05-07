import { Pbf } from "https://taisukef.github.io/pbf/Pbf.js";
import { fetchBin } from "https://code4sabae.github.io/js/fetchBin.js";
import { VectorTile } from "https://taisukef.github.io/vector-tile-js/VectorTile.js";

const [x, y, z] = [112, 50, 7];
//const url = "https://taisukef.github.io/sh2/zxy/7/112/50.pbf";
const url = `https://taisukef.github.io/sh2/zxy/${z}/${x}/${y}.pbf`;
const data = await fetchBin(url);
const tile = new VectorTile(new Pbf(data));

for (const name in tile.layers) {
    const layer = tile.layers[name];
    for (let j = 0; j < layer.length; j++) {
        const feature = layer.feature(j);
        const geometry = feature.loadGeometry();
        const geojson = feature.toGeoJSON(x, y, z);
        console.log(feature, geometry, geojson);
        const geo = geojson.geometry.coordinates;
        console.log(geo);
        /*
        // make
        for (const g of geo) {
          const vertices = [];
          for (const p of g) {
        */
    }
}
