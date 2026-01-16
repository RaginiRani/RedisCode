const client = require("./client");

async function init() {

  // Equivalent to LPUSH commands

   await client.lpush("messages", 1);
  await client.lpush("messages", 2);
  await client.lpush("messages", 3);
  await client.lpush("messages", 4);

// CLI: rpop messages
  let popped = await client.rpop("messages");
  console.log("RPOP result:", popped);


  // CLI: lrange messages 0 -1
  let all = await client.lrange("messages", 0, -1);
  console.log("All messages:", all);

  // CLI: lrange messages 0 1
  let firstTwo = await client.lrange("messages", 0, 1);
  console.log("First two:", firstTwo);

  
  // CLI: del messages
//   await client.del("messages");
//   console.log("Messages list deleted");
}

init();
