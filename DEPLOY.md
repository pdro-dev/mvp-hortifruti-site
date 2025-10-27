# 🚀 Guia de Deploy - oZé Hortifruti Digital

Este guia mostra como publicar o site em produção usando Vercel (gratuito).

---

## ✅ Opção 1: Deploy via Vercel (Recomendado)

### Passo 1: Criar conta no Vercel
1. Acesse [vercel.com](https://vercel.com)
2. Clique em "Sign Up"
3. Escolha "Continue with GitHub"
4. Autorize o Vercel a acessar seus repositórios

### Passo 2: Importar projeto
1. No dashboard do Vercel, clique em "Add New Project"
2. Selecione o repositório `mvp-hortifruti-site`
3. Configure as opções:

```
Framework Preset: Vite
Root Directory: ./
Build Command: pnpm build
Output Directory: client/dist
Install Command: pnpm install
```

### Passo 3: Configurar variáveis de ambiente (opcional)
Se precisar de variáveis de ambiente, adicione em "Environment Variables":

```
VITE_APP_TITLE=oZé Hortifruti Digital
VITE_APP_LOGO=/logo.svg
```

### Passo 4: Deploy!
1. Clique em "Deploy"
2. Aguarde 2-3 minutos
3. Seu site estará no ar em `https://mvp-hortifruti-site.vercel.app`

### Passo 5: Domínio customizado (opcional)
1. Vá em "Settings" → "Domains"
2. Adicione seu domínio (ex: `oze.com.br`)
3. Configure os DNS conforme instruções do Vercel

---

## ✅ Opção 2: Deploy via Netlify

### Passo 1: Criar conta no Netlify
1. Acesse [netlify.com](https://netlify.com)
2. Clique em "Sign Up"
3. Escolha "GitHub"

### Passo 2: Novo site
1. Clique em "Add new site" → "Import an existing project"
2. Escolha "GitHub"
3. Selecione `mvp-hortifruti-site`

### Passo 3: Configurar build
```
Base directory: (deixe vazio)
Build command: pnpm build
Publish directory: client/dist
```

### Passo 4: Deploy!
Clique em "Deploy site" e aguarde.

---

## 🔄 Deploy Automático

Ambas as plataformas (Vercel e Netlify) fazem **deploy automático** sempre que você fizer push para o GitHub:

```bash
# Faça suas alterações
git add .
git commit -m "feat: nova funcionalidade"
git push

# Deploy automático é disparado!
# Em 2-3 minutos seu site está atualizado
```

---

## 🌐 URLs do Projeto

Após o deploy, você terá:

- **Vercel**: `https://mvp-hortifruti-site.vercel.app`
- **Netlify**: `https://mvp-hortifruti-site.netlify.app`
- **GitHub**: `https://github.com/pdro-dev/mvp-hortifruti-site`
- **Preview (dev)**: `https://3000-ilw8es0c4u7xpi16ul11e-5ad343c4.manusvm.computer`

---

## 📊 Monitoramento

### Vercel Analytics (gratuito)
- Acesse "Analytics" no dashboard
- Veja visitantes, performance, Core Web Vitals

### Netlify Analytics (pago)
- Upgrade para plano Pro
- Analytics detalhado de tráfego

---

## 🐛 Troubleshooting

### Erro: "Build failed"
- Verifique se `pnpm build` funciona localmente
- Confira logs de build no dashboard

### Erro: "404 Not Found" em rotas
- Adicione arquivo `client/public/_redirects`:
```
/*    /index.html   200
```

### Erro: Imagens não carregam
- Verifique se as imagens estão em `client/public/images/`
- Use caminhos absolutos: `/images/hero.png`

---

## 🎯 Checklist de Deploy

- [ ] Código commitado e pushed para GitHub
- [ ] Conta criada no Vercel/Netlify
- [ ] Projeto importado e configurado
- [ ] Build bem-sucedido
- [ ] Site acessível pela URL
- [ ] Todas as páginas funcionando
- [ ] Imagens carregando
- [ ] Links funcionando
- [ ] Responsivo em mobile
- [ ] Performance OK (Lighthouse > 90)

---

## 💡 Dicas

1. **Use Vercel** para projetos React/Vite (melhor integração)
2. **Configure domínio customizado** para profissionalismo
3. **Ative Analytics** para entender seus usuários
4. **Configure alerts** para monitorar uptime
5. **Use Preview Deployments** para testar antes de publicar

---

**Pronto! Seu site estará no ar em minutos! 🚀**

