const {Router} =require("express");
const DataStore = require("nedb-promise")
const router = new Router();
const fs = require("fs");

const EventDB = new DataStore({
	filename: "db/events.db",
	autoload: true
});
// console.log(EventDB )

// /api/events
router.get("/", (req,res) =>{
	const event = fs.createReadStream("./data/event.json")
	event.pipe(res)
	console.log("Sent events list")
})

// /api/events/:id
router.get("/:id", (req,res) =>{
	let events = require("../data/event.json").event
	const id = req.params.id

	// Get matching event
	const event = events.find(function(i) {
		return i.id == id
	})

	res.send(event);
	console.log("Sent single event")
})

module.exports=router;
