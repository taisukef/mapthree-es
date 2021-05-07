
const project = (x, y, z, lx, ly) => {
    const extent = 8192; // detail of 1 tile
    const size = extent * Math.pow(2, z);
    const x0 = extent * x;
    const y0 = extent * y;
    const y2 = 180 - (ly + y0) * 360 / size;
    const lng = (lx + x0) * 360 / size - 180;
    const lat = 360 / Math.PI * Math.atan(Math.exp(y2 * Math.PI / 180)) - 90;
    return [lat, lng];
};
const revProject = (lat, lng, z) => {
    const extent = 8192; // detail of 1 tile
    const size = extent * Math.pow(2, z);

    const y2 = Math.log(Math.tan((lat + 90) / 360 * Math.PI), Math.E) * 180 / Math.PI;
    const y1 = -(y2 - 180) * size / 360;
    const y = Math.floor(y1 / extent)
    const ly = y1 - y * extent;

    const x1 = (lng + 180) * size / 360;
    const x = Math.floor(x1 / extent);
    const lx = x1 - x * extent;

    return [x, y, z, lx, ly];
};

const chk = (x, y, z, lx, ly) => {
    const ll = project(x, y, z, lx, ly);
    console.log(ll);
    const xyz = revProject(ll[0], ll[1], z);
    console.log(xyz);
};
const [x, y, z] = [112, 50, 7];
console.log(project(x, y, z, 0, 0));
console.log(project(7190, 3216, 13, 0, 0));
console.log(project(7190, 3215, 13, 0, 8192));

chk(x, y, z, 0, 0);
chk(7190, 3215, 13, 0, 8192);

const ll = [36.03133177633187, 135.966796875];
for (let z = 0; z <= 30; z++) {
    console.log(z, revProject(ll[0], ll[1], z));
}
