import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export async function gerarDiagnostico(dadosFormulario) {
  const prompt = `
Você é um consultor empresarial sênior especializado em planejamento estratégico, um agente consultor especializado em planejamento estratégico para empresas.

Sua tarefa é analisar as respostas vindas do preenchimento de um formulário por um Lead e, com base nisso, estruturar um Diagnóstico inicial e um Plano de Ação Empresarial completo.

Pense passo a passo e atue de forma estratégica ao interpretar cada informação fornecida. Sua análise deve identificar padrões, conexões, e também fazer inferências inteligentes — inclusive a partir de dados implícitos — para gerar um plano relevante, claro e aplicável.

## Instruções:
Analise cuidadosamente o conteúdo do texto com as respostas do formulário, extraindo os dados mais relevantes sobre o contexto, desafios, oportunidades e objetivos do negócio.

Estruture a base e com referência de estilo, adaptando a linguagem e o conteúdo conforme necessário, mantendo uma organização lógica e profissional.

Destaque os nomes das sessões em Títulos, e se tiver também Subtítulos, organizando com separação em parágrafos.

Se tiver que separar a montagem do documento em partes, informe explicitamente, solicitando que faça uma revisão e pedindo para continuar logo em seguida.

Crie Análise estratégica (utilize metodologias como SWOT, 5W2H, PDCA, OKRs, entre outras SE FOR NECESSÁRIO — sempre cite nominalmente a metodologia aplicada).

Crie recomendações práticas com ações claras.

Plano de Ação — 90 Dias (Criar uma tabela que mostre visualmente este plano de ação com Ação Prioritária, Objetivo, Tempo Estimado, Prioridade).

Cronograma e priorização de ações.
Indicadores de desempenho (KPIs) (Caso tenha dados de desempenho informados, liste e realize os cálculos).

Oportunidades de Crescimento (informe as oportunidade e explique as possibilidades).

Estratégias para Aumentar o Faturamento (informe as estratégias possíveis e explique sobre elas).

Recomendações Baseadas em Dados.
**Investimento vs. Retorno Atual:** 
**Sugestão de alocação de recursos:** 
**Pontos de melhoria em métricas-chaves:** 

Tendências Relevantes do Setor 
(Inclua aqui uma análise ou insight sobre tendências atuais no mercado do cliente e explique.
Exemplo: “O mercado de alimentação saudável segue crescendo 14% ao ano no Brasil…”)

Observações e insights finais.
Conclusão.

Crie sessões adicionais se necessário, com base nas particularidades do Lead.

Adapte o tom e estilo da comunicação conforme o perfil percebido do Lead, equilibrando linguagem acessível e profissional, para atender tanto donos de empresas quanto gestores.

Descreva ilustrações conceituais sempre que forem úteis, como esquemas, frameworks ou mapas mentais. Essas descrições devem ser claras para posterior criação visual em outro aplicativo.

Evite repetições, jargões genéricos ou afirmações vagas. Seja estratégico, específico e objetivo.
SIGA perfeitamente toda estas sessões e preencha com os dados das análises criadas.

---  
📥 Input (respostas do formulário):
${JSON.stringify(dadosFormulario, null, 2)}
  `

  const completion = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.7
  })

  const resposta = completion.choices[0].message.content
  return resposta
}
