import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { gerarDiagnostico } from './services/openaiAgent.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

// Rota de teste
app.get('/', (req, res) => {
  res.send('🧠 D-PA Backend ativo!')
})

// Rota que envia dados para a IA
app.post('/analyze', async (req, res) => {
  try {
    const dadosFormulario = req.body
    const respostaIA = await gerarDiagnostico(dadosFormulario)
    res.status(200).json({ resultado: respostaIA })
  } catch (error) {
    console.error('Erro ao gerar diagnóstico:', error)
    res.status(500).json({ erro: 'Falha ao processar análise com IA' })
  }
})

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`)
})
