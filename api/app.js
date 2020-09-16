// Backend stuff

const express = require('express')


const app = express()

const PORT = process.env.PORT || 1234;

app.listen(PORT, () => console.log(`Server Online and now running on port:${PORT} `));