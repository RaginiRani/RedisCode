const client = require('./client');

async function init(){
    const res1 = await client.geoadd("hotels:rentable", -122.7682, 37.87615, "hotel2");
    const res2 =await client.geosearch(
        "hotels:rentable",
        "FROMLONLAT",
        -122.2762,
        37.80615,
        "BYRADIUS",
        5,
        "km"
        );

    console.log(res1);
    console.log(res2);
}
init();