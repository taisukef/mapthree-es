import { Pbf } from "https://taisukef.github.io/pbf/Pbf.js";
import { fetchBin } from "https://code4sabae.github.io/js/fetchBin.js";
import { VectorTile } from "https://taisukef.github.io/vector-tile-js/VectorTile.js";

const url = "https://taisukef.github.io/sh2/zxy/7/112/50.pbf";
const data = await fetchBin(url);
const tile = new VectorTile(new Pbf(data));

for (const name in tile.layers) {
    const layer = tile.layers[name];
    for (let j = 0; j < layer.length; j++) {
        const feature = layer.feature(j);
        const geometry = feature.loadGeometry();
        const geojson = feature.toGeoJSON();
        console.log(feature, geometry, geojson);
    }
}
