import express from 'express'
import routes from './routes/index.js'

const app = express()
const PORT = 3001

app.use(express.json())
app.use('/api', routes)


app.listen(PORT, ()=>{
    console.log(`O servidor está executando em http://localhost:${PORT}`);
    
})