# 🚀 AIVERSE Technologies

> **Revolucionamos negócios com soluções avançadas de IA e desenvolvimento web**

[![Railway](https://img.shields.io/badge/Deployed%20on-Railway-blue)](https://railway.app)
[![React](https://img.shields.io/badge/React-18.3.1-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.19-purple)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.17-cyan)](https://tailwindcss.com/)

## 📋 Sobre o Projeto

AIVERSE Technologies é uma empresa especializada em soluções de Inteligência Artificial e desenvolvimento web avançado. Nossa plataforma apresenta nossos projetos e serviços, incluindo:

### 🎯 Projetos em Destaque

1. **🍔 Burger House** - Cardápio digital interativo com pedidos online e automação n8n
2. **🏷️ Morais Adesivos** - Plataforma digital para adesivos personalizados
3. **🎨 Bot Designer WhatsApp** - Bot de IA que gera imagens e designs via WhatsApp
4. **🤖 Assistente WhatsApp IA** - Assistente IA completo para WhatsApp com agendamentos

### 🛠️ Tecnologias Utilizadas

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Radix UI
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **State Management**: TanStack Query
- **Forms**: React Hook Form + Zod
- **Deployment**: Railway

## 🚀 Instalação e Execução

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn
- Git

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/aiverse-technologies.git
cd aiverse-technologies
```

### 2. Instale as dependências

```bash
npm install
# ou
yarn install
```

### 3. Configure as variáveis de ambiente

```bash
cp env.example .env
```

Edite o arquivo `.env` com suas configurações:

```env
PORT=3000
NODE_ENV=production
VITE_APP_TITLE=AIVERSE Technologies
VITE_WHATSAPP_NUMBER=5521996062455
```

### 4. Execute em desenvolvimento

```bash
npm run dev
# ou
yarn dev
```

Acesse: `http://localhost:5173`

### 5. Build para produção

```bash
npm run build
# ou
yarn build
```

### 6. Preview da build

```bash
npm run preview
# ou
yarn preview
```

## 🚂 Deploy na Railway

### Método 1: Deploy via GitHub (Recomendado)

1. **Faça push do código para o GitHub**
   ```bash
   git add .
   git commit -m "feat: prepare for Railway deployment"
   git push origin main
   ```

2. **Acesse [Railway.app](https://railway.app)**
   - Faça login com sua conta GitHub
   - Clique em "New Project"
   - Selecione "Deploy from GitHub repo"
   - Escolha este repositório

3. **Configure as variáveis de ambiente**
   - Vá em "Variables" no dashboard do Railway
   - Adicione as variáveis do arquivo `env.example`

4. **Deploy automático**
   - O Railway detectará automaticamente o `railway.json`
   - O deploy será iniciado automaticamente

### Método 2: Deploy via Railway CLI

1. **Instale o Railway CLI**
   ```bash
   npm install -g @railway/cli
   ```

2. **Faça login**
   ```bash
   railway login
   ```

3. **Inicialize o projeto**
   ```bash
   railway init
   ```

4. **Configure as variáveis**
   ```bash
   railway variables set PORT=3000
   railway variables set NODE_ENV=production
   ```

5. **Deploy**
   ```bash
   railway up
   ```

## 📁 Estrutura do Projeto

```
aiverse-technologies/
├── public/                 # Arquivos estáticos
│   ├── burger-house.png
│   ├── Moraes.png
│   ├── Gerador-de-img.png
│   └── agente-de-WhatsApp.png
├── src/
│   ├── components/         # Componentes React
│   │   ├── sections/      # Seções da página
│   │   └── ui/            # Componentes UI (shadcn/ui)
│   ├── hooks/             # Custom hooks
│   ├── lib/               # Utilitários
│   ├── pages/             # Páginas
│   └── assets/            # Assets do projeto
├── railway.json           # Configuração do Railway
├── env.example           # Exemplo de variáveis de ambiente
├── package.json          # Dependências e scripts
└── README.md            # Este arquivo
```

## 🤖 Skill de Referência para IA

Foi adicionada uma skill de projeto para aproveitar o repositório de prompts:

- **Skill**: `.cursor/skills/ai-tools-prompt-research/SKILL.md`
- **Guia rápido**: `.cursor/skills/ai-tools-prompt-research/reference.md`
- **Espelho local da base**: `content/system-prompts-and-models-of-ai-tools`

### Atualizar a base de referência

```bash
powershell -ExecutionPolicy Bypass -File .cursor/skills/ai-tools-prompt-research/scripts/sync-source.ps1
```

Essa skill ajuda a aplicar padrões de agentes (Cursor, v0, Lovable, Windsurf etc.) no desenvolvimento da página, revisão de código e debug.

## 🎨 Funcionalidades

### ✨ Interface Moderna
- Design responsivo e moderno
- Tema escuro com gradientes
- Animações suaves e interativas
- Componentes UI reutilizáveis

### 📱 Seções Principais
- **Hero Section**: Apresentação principal
- **Serviços**: Cards de serviços oferecidos
- **Projetos**: Portfólio de projetos desenvolvidos
- **Chat IA**: Seção interativa de IA
- **Contato**: Formulário e informações de contato

### 🤖 Projetos de IA
- **Bot Designer WhatsApp**: Geração de imagens via IA
- **Assistente WhatsApp IA**: Automação de atendimento
- Integração direta com WhatsApp
- Mensagens personalizadas

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev              # Inicia servidor de desenvolvimento

# Build
npm run build            # Build para produção
npm run build:dev        # Build em modo desenvolvimento

# Deploy Railway
npm run railway:build    # Build otimizado para Railway
npm run railway:start    # Inicia servidor para Railway

# Utilitários
npm run lint             # Executa linter
npm run preview          # Preview da build
```

## 🌐 Variáveis de Ambiente

| Variável | Descrição | Padrão |
|----------|-----------|--------|
| `PORT` | Porta do servidor | `3000` |
| `NODE_ENV` | Ambiente de execução | `production` |
| `VITE_APP_TITLE` | Título da aplicação | `AIVERSE Technologies` |
| `VITE_WHATSAPP_NUMBER` | Número do WhatsApp | `5521996062455` |

## 📞 Contato

- **WhatsApp**: [5521996062455](https://wa.me/5521996062455)
- **Email**: technologiesaiverse@gmail.com
- **Instagram**: [@aiversetech_oficial](https://www.instagram.com/aiversetech_oficial/)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 🙏 Agradecimentos

- [shadcn/ui](https://ui.shadcn.com/) - Componentes UI
- [Radix UI](https://www.radix-ui.com/) - Primitivos acessíveis
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [Vite](https://vitejs.dev/) - Build tool
- [Railway](https://railway.app/) - Plataforma de deploy

---

**Desenvolvido com ❤️ por [AIVERSE Technologies](https://github.com/AlexandroGranja)**