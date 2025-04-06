# D-PA 🚀 Painel Estratégico com IA

Sistema de diagnóstico estratégico inteligente para negócios físicos e online.  
Desenvolvido com React no frontend e Node.js/Express no backend, conectado à IA (GPT-4) da OpenAI.

---

## 🧠 Funcionalidades

- Coleta de dados por formulário interativo por etapas
- Análise automatizada por um agente consultor de IA
- Geração de diagnóstico estratégico detalhado
- Plano de ação empresarial com metodologia
- Indicadores de desempenho (KPIs)
- Exportação em PDF *(em desenvolvimento)*
- Gráficos visuais *(em desenvolvimento)*
- CTA para contato *(em desenvolvimento)*

---

## ⚙️ Tecnologias Utilizadas

### Frontend
- [React](https://reactjs.org/)
- Vite + JSX
- Vercel (Deploy)

### Backend
- [Node.js](https://nodejs.org/)
- Express + CORS + Dotenv
- [OpenAI Node SDK](https://www.npmjs.com/package/openai)
- Railway (Deploy)

---

## 📁 Estrutura do Projeto


---

## 🛰️ Fluxo de funcionamento

1. Usuário preenche o formulário (React)
2. Dados são enviados para `/analyze` no backend (Express)
3. Backend chama o modelo GPT-4 da OpenAI
4. A resposta é devolvida e renderizada na interface final

---

## 🔐 Variáveis de ambiente (backend)

Configure no Railway:


---

## 🚀 Deploy

| Parte     | Plataforma | URL |
|-----------|------------|-----|
| Frontend  | Vercel     | [d-pa.vercel.app](https://d-pa.vercel.app) |
| Backend   | Railway    | [d-pa-backend-production.up.railway.app](https://d-pa-backend-production.up.railway.app) |

---

## 📈 Próximas Features

- [ ] Gráficos com Chart.js
- [ ] Exportação PDF com jsPDF/html2canvas
- [ ] Botão de contato (CTA WhatsApp/CRM)

---

## 🧠 Desenvolvido por

**Jake & Ninja Mode Developer (você 😉)**  
Projeto movido por inteligência artificial e planejamento estratégico real.

---
