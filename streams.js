const client = require('./client');

async function init() {

    const res1 = await client.xadd(
        "temperatures:us-ny:1007",
        "*",
        "temp_f", "87.2",
        "pressure", "29.69",
        "humidity", "46"
    );

    console.log("Entry 1 ID:", res1);

//xadd(key, id, field1, value1, field2, value2 ...)

    const res2 = await client.xadd( 
        "temperatures:us-ny:1007",
        "*",
        "temp_f", "87.2",
        "pressure", "25.21",
        "humidity", "30"
    );

    console.log("Entry 2 ID:", res2);


    const res3 = await client.xadd(
        "temperatures:us-ny:1007",
        "*",
        "temp_f", "81.9",
        "pressure", "28.71",
        "humidity", "42"
    );

    console.log("Entry 3 ID:", res3);
}

init();
