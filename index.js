import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

// Teste básico
app.get('/', (req, res) => {
  res.send('🧠 D-PA Backend ativo!')
})

// Rota de análise (vamos implementar depois)
app.post('/analyze', async (req, res) => {
  res.json({ message: 'Rota de análise recebida. Agente IA em construção.' })
})

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`)
})
