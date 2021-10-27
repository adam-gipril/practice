const express = require('express')
const cors = require('cors')

const app = express();

app.use(cors())
app.get('/endpoint', (req, res) => res.sendStatus(400))

app.listen(3000, () => console.log('listening on 3000'))
