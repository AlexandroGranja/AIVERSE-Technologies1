# 🚂 Guia de Deploy na Railway

Este guia te ajudará a fazer o deploy do projeto AIVERSE Technologies na Railway de forma rápida e eficiente.

## 📋 Pré-requisitos

- ✅ Conta no [Railway.app](https://railway.app)
- ✅ Conta no GitHub
- ✅ Código commitado no GitHub
- ✅ Node.js 18+ (para testes locais)

## 🚀 Método 1: Deploy via GitHub (Recomendado)

### Passo 1: Preparar o Repositório

1. **Faça commit de todos os arquivos**
   ```bash
   git add .
   git commit -m "feat: prepare for Railway deployment"
   git push origin main
   ```

2. **Verifique se os arquivos estão no GitHub**
   - `railway.json` ✅
   - `package.json` com scripts do Railway ✅
   - `env.example` ✅

### Passo 2: Deploy na Railway

1. **Acesse [Railway.app](https://railway.app)**
   - Faça login com sua conta GitHub

2. **Crie um novo projeto**
   - Clique em "New Project"
   - Selecione "Deploy from GitHub repo"
   - Escolha o repositório `aiverse-technologies`

3. **Configure o projeto**
   - O Railway detectará automaticamente o `railway.json`
   - O build será iniciado automaticamente

4. **Aguarde o deploy**
   - O processo pode levar 2-5 minutos
   - Você verá os logs em tempo real

### Passo 3: Configurar Variáveis de Ambiente

1. **Acesse o dashboard do projeto**
2. **Vá em "Variables"**
3. **Adicione as seguintes variáveis:**

   | Nome | Valor | Descrição |
   |------|-------|-----------|
   | `PORT` | `3000` | Porta do servidor |
   | `NODE_ENV` | `production` | Ambiente de produção |
   | `VITE_APP_TITLE` | `AIVERSE Technologies` | Título da aplicação |
   | `VITE_WHATSAPP_NUMBER` | `5521969585179` | Número do WhatsApp |

4. **Clique em "Add" para cada variável**

### Passo 4: Verificar Deploy

1. **Acesse a URL fornecida pelo Railway**
2. **Teste todas as funcionalidades:**
   - ✅ Página carrega corretamente
   - ✅ Navegação funciona
   - ✅ Projetos são exibidos
   - ✅ Botões do WhatsApp funcionam
   - ✅ Modais abrem corretamente

## 🛠️ Método 2: Deploy via Railway CLI

### Passo 1: Instalar Railway CLI

```bash
npm install -g @railway/cli
```

### Passo 2: Login

```bash
railway login
```

### Passo 3: Inicializar Projeto

```bash
# No diretório do projeto
railway init
```

### Passo 4: Configurar Variáveis

```bash
railway variables set PORT=3000
railway variables set NODE_ENV=production
railway variables set VITE_APP_TITLE="AIVERSE Technologies"
railway variables set VITE_WHATSAPP_NUMBER=5521969585179
```

### Passo 5: Deploy

```bash
railway up
```

## 🔧 Configurações Avançadas

### Custom Domain (Opcional)

1. **No dashboard do Railway**
2. **Vá em "Settings" > "Domains"**
3. **Adicione seu domínio personalizado**
4. **Configure o DNS conforme instruções**

### Environment Variables Adicionais

Se precisar de mais variáveis:

```bash
# Via CLI
railway variables set NOME_DA_VARIAVEL=valor

# Via Dashboard
# Settings > Variables > Add Variable
```

### Monitoramento

1. **Acesse "Metrics" no dashboard**
2. **Monitore:**
   - CPU Usage
   - Memory Usage
   - Response Time
   - Error Rate

## 🐛 Troubleshooting

### Problema: Build falha

**Solução:**
```bash
# Verifique os logs
railway logs

# Teste localmente
npm run build
```

### Problema: Site não carrega

**Soluções:**
1. Verifique se `PORT` está configurado
2. Verifique se `NODE_ENV=production`
3. Verifique os logs de erro

### Problema: Variáveis não funcionam

**Solução:**
1. Reinicie o serviço após adicionar variáveis
2. Verifique se as variáveis começam com `VITE_`
3. Faça um novo deploy

### Problema: Imagens não carregam

**Solução:**
1. Verifique se as imagens estão na pasta `public/`
2. Verifique os caminhos no código
3. Teste localmente primeiro

## 📊 Comandos Úteis

```bash
# Ver logs em tempo real
railway logs --follow

# Ver status do serviço
railway status

# Reiniciar serviço
railway restart

# Ver variáveis configuradas
railway variables

# Deploy manual
railway up

# Ver métricas
railway metrics
```

## 🎯 Checklist de Deploy

- [ ] Código commitado no GitHub
- [ ] `railway.json` configurado
- [ ] `package.json` com scripts do Railway
- [ ] Variáveis de ambiente configuradas
- [ ] Build local funcionando
- [ ] Deploy iniciado
- [ ] URL acessível
- [ ] Funcionalidades testadas
- [ ] WhatsApp funcionando
- [ ] Imagens carregando

## 🆘 Suporte

Se encontrar problemas:

1. **Verifique os logs:** `railway logs`
2. **Teste localmente:** `npm run build && npm run preview`
3. **Consulte a documentação:** [Railway Docs](https://docs.railway.app/)
4. **Entre em contato:** [Discord Railway](https://discord.gg/railway)

---

**🚀 Deploy realizado com sucesso! Seu site estará disponível na URL fornecida pelo Railway.**
