const {Router} =require("express");
const DataStore = require("nedb-promise")

const router = new Router();
const fs = require("fs");

const EventDB = new DataStore({
	filename: "db/events.db",
	autoload: true
});
console.log(EventDB )

router.get("/", async (req,res) =>{
	const event = fs.createReadStream("./data/event.json")
	console.log(event)
	event.pipe(res)
	console.log(res)
})

module.exports=router;
