const client = require("./client");

async function init() {

  console.log("Adding to set...");

  console.log(await client.sadd("ip", 1)); // 1
  console.log(await client.sadd("ip", 2)); // 1
  console.log(await client.sadd("ip", 3)); // 1

  console.log("Trying duplicate...");
  console.log(await client.sadd("ip", 1)); // 0 (duplicate)

  console.log("Removing 3...");
  console.log(await client.srem("ip", 3)); // 1

  console.log("Check membership:");

  console.log("Is 1 member?", await client.sismember("ip", 1)); // 1
  console.log("Is 3 member?", await client.sismember("ip", 3)); // 0

  console.log("Current set members:");
  const all = await client.smembers("ip");
  console.log(all);
}

init();
