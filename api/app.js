// Backend stuff
const express = require('express')
const cors = require('cors')
const app = express()
const path = require("path");
const eventDB = require("./routes/events")

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public", "index.html")));

app.use("/api/events", eventDB)  
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 1234;
app.listen(PORT, () => console.log(`Server Online and now running on port ${PORT} `));