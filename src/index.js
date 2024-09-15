import express from 'express'
import cors from 'cors'
import router from './routes/recipes_routes.js'
import bodyParser from 'body-parser'

const app = express()

app.use(cors())
app.use(express.json())
app.use(router)

app.listen(3000, () => console.log('Api esta funcionando'))
