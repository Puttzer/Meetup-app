// Backend stuff

const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

const PORT = process.env.PORT || 1234;

app.get('/', (req,res)=>{
	res.json({
		message:"IF THIS MESSAGE SHOWS THEN APP.GET WORKS ON THE BACKEND"
	})
})

app.listen(PORT, () => console.log(`Server Online and now running on port:${PORT} `));