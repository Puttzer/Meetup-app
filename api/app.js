// Backend stuff
const express = require('express')
const cors = require('cors')
const app = express()
const path = require("path");
const eventRoutes = require("./routes/events")
const PORT = process.env.PORT || 1234;

app.use(express.json());
app.use(cors());

// app.get("/", (req, res) =>
//   res.sendFile(path.join(__dirname, "/public", "index.html")));

// app.get("/events", (req, res) =>
//   res.sendFile(path.join(__dirname, "/public", "index.html")));
app.use("/api/events", eventRoutes)

app.use(express.static(path.join(__dirname, '/dist')))
app.get('*/', (req, res) => {
	res.sendFile(path.join(__dirname, '/dist', 'index.html'))
})

app.listen(PORT, () => console.log(`Server Online and now running on port ${PORT} `));
