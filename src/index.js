import express from 'express'
import cors from 'cors'
import db from './db.js'

const app = express()
app.use(cors())

app.get('/receta', (req, res) => {
    res.send('Esta funcionando')
})

app.listen(3000, () => console.log('Api esta funcionando'))