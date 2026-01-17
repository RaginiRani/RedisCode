const client = require('./client');

async function init() {

    const res1 = await client.zadd('score', 12, "garg");
    await client.zadd('score', 20, "rahul");
    console.log(res1);
    const result = await client.zrange('score', 0, -1, "WITHSCORES");
    const result2 = await client.zrevrange('score', 0, -1, "WITHSCORES");

    console.log(result2);
}

init();
