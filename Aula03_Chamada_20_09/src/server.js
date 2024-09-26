import express from 'express'
import routes from './routes/index.js'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(cors())


app.use('/api', routes)


app.listen(PORT, ()=>{
    console.log(`O servidor está executando em http://localhost:${PORT}`);
    
})