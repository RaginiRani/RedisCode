const client = require('./client');

async function init() {
    //set
    await client.set("msg:6", "Hey from NodeJs");
    await client.expire("msg:6", 10);
    //get
    const res = await client.get('msg:6'); 
    //const res = await client.get('user:1'); 
    console.log("Result->", res);
}
init();