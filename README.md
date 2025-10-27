# oZé Hortifruti Digital

**Plataforma de Digitalização Inteligente do Agronegócio**

Conectamos toda a cadeia hortifruti - do produtor ao comércio - com tecnologia e inteligência artificial, eliminando ligações, notinhas físicas e trazendo controle total sobre a operação.

---

## 🚀 Sobre o Projeto

O **oZé Hortifruti Digital** é uma plataforma que resolve o problema de comunicação caótica no setor hortifruti, substituindo 150+ ligações diárias e 100+ notinhas físicas por um fluxo digital simplificado e automatizado.

### 💡 Problema que Resolvemos

- **150 ligações/dia**: Intermediários gastam horas consultando disponibilidade
- **100+ notinhas físicas**: Produtores preenchem dezenas de papéis diariamente  
- **Decisões de R$ 70k**: Baseadas apenas em memória, sem dados históricos

### ✅ Nossa Solução

- **Cadastro por Voz**: Produtores registram ofertas em < 2 minutos
- **Dashboard em Tempo Real**: Intermediários visualizam tudo consolidado
- **IA Recomenda**: Sistema sugere os melhores negócios automaticamente
- **ROI Comprovado**: R$ 72k/ano de economia para intermediários

---

## 🎯 Perfis Atendidos

### 📱 Produtor
- Elimine notinhas físicas e ligações
- Organize gratuitamente (versão Starter)
- Aumente sua visibilidade
- Controle custos e margens (versões pagas)

### 💻 Intermediário  
- Economize R$ 72k/ano
- Elimine 150 ligações diárias
- Dashboard consolidado de 150+ produtores
- Recomendações de IA

### 🏪 Comércio
- Acesso direto a produtores
- Previsibilidade de oferta
- Rastreabilidade completa
- Melhores preços

---

## 🛠️ Stack Tecnológica

- **Frontend**: React 18 + Vite 5
- **Linguagem**: TypeScript
- **Estilo**: Tailwind CSS 4
- **Componentes**: shadcn/ui
- **Roteamento**: Wouter
- **Build**: Vite (HMR ultra-rápido)

---

## 📦 Instalação e Execução

### Pré-requisitos
- Node.js 22+
- pnpm (gerenciador de pacotes)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/pdro-dev/mvp-hortifruti-site.git

# Entre no diretório
cd mvp-hortifruti-site

# Instale as dependências
pnpm install

# Inicie o servidor de desenvolvimento
pnpm dev
```

O site estará disponível em `http://localhost:3000`

### Build para Produção

```bash
# Gerar build otimizado
pnpm build

# Visualizar build localmente
pnpm preview
```

---

## 📁 Estrutura do Projeto

```
mvp-hortifruti-site/
├── client/                 # Frontend React
│   ├── public/            # Assets estáticos
│   │   └── images/        # Imagens e ilustrações
│   ├── src/
│   │   ├── components/    # Componentes reutilizáveis
│   │   │   ├── ui/        # shadcn/ui components
│   │   │   ├── layout/    # Header, Footer
│   │   │   └── app/       # MobileFrame
│   │   ├── pages/         # Páginas principais
│   │   │   ├── app/       # Apps funcionais
│   │   │   │   ├── AppProdutorStarter.tsx
│   │   │   │   └── AppIntermediarioBasico.tsx
│   │   │   ├── Home.tsx
│   │   │   ├── Produtor.tsx
│   │   │   ├── Intermediario.tsx
│   │   │   └── ...
│   │   ├── contexts/      # React contexts (Theme)
│   │   ├── hooks/         # Custom hooks
│   │   ├── lib/           # Utilitários
│   │   ├── App.tsx        # Rotas principais
│   │   ├── main.tsx       # Entry point
│   │   └── index.css      # Estilos globais + tema
│   └── index.html
├── shared/                # Constantes compartilhadas
├── todo.md               # Roadmap e tarefas
└── README.md             # Este arquivo
```

---

## 🎨 Design System

### Paleta de Cores
- **Primary (Verde)**: Agronegócio, crescimento, natureza
- **Accent**: Destaques e CTAs
- **Muted**: Backgrounds e textos secundários

### Tipografia
- **Fonte**: Inter (Google Fonts)
- **Pesos**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Componentes
- Baseados em **shadcn/ui** (Radix UI + Tailwind)
- Totalmente customizáveis via CSS variables
- Acessíveis (ARIA compliant)

---

## 🚀 Deploy

### Vercel (Recomendado)

1. Faça fork/clone do repositório
2. Conecte ao Vercel
3. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: `./`
   - **Build Command**: `pnpm build`
   - **Output Directory**: `client/dist`
4. Deploy!

### Netlify

1. Conecte o repositório
2. Configure:
   - **Base directory**: `./`
   - **Build command**: `pnpm build`
   - **Publish directory**: `client/dist`
3. Deploy!

---

## 📊 Funcionalidades Implementadas

### ✅ Site Institucional
- [x] Home com hero section e proposta de valor
- [x] Seção Problema e Solução
- [x] Cards de perfis (Produtor, Intermediário, Comércio)
- [x] Funcionalidades principais
- [x] Fluxo visual "Como Funciona"
- [x] Social proof com dados do cliente âncora
- [x] Footer completo

### ✅ App Produtor Starter
- [x] Interface mobile-first
- [x] Cadastro por voz (simulado)
- [x] Cadastro manual simplificado
- [x] QR Code automático
- [x] Land page automática
- [x] Fluxo completo < 2 minutos

### ✅ Dashboard Intermediário Básico
- [x] Lista consolidada de ofertas
- [x] Filtros e busca
- [x] Botões de contato direto
- [x] Reserva rápida
- [x] Stats de ROI (R$ 72k/ano)

---

## 📈 Roadmap

### Fase 1 - MVP (Atual)
- [x] Site institucional completo
- [x] App Produtor Starter (versão gratuita)
- [x] Dashboard Intermediário Básico
- [ ] Deploy em produção

### Fase 2 - Backend e Autenticação
- [ ] Integração com banco de dados
- [ ] Sistema de autenticação (JWT)
- [ ] API REST/GraphQL
- [ ] Sincronização em tempo real

### Fase 3 - Funcionalidades Avançadas
- [ ] Cadastro por voz real (Speech-to-Text)
- [ ] Recomendações de IA (Machine Learning)
- [ ] Relatórios automáticos
- [ ] Integração com WhatsApp Business

### Fase 4 - Versões Pagas
- [ ] Produtor Vitrine+ (R$ 19,90/mês)
- [ ] Produtor Gestão+ (R$ 49,90/mês)
- [ ] Produtor Pro (R$ 99,90/mês)
- [ ] Intermediário Premium (R$ 199,90/mês)

---

## 🤝 Validação de Mercado

### Cliente Âncora
- **Faturamento**: R$ 400-500M/ano
- **Produtores conectados**: 150+
- **Posição**: Top 3 entre 1.000+ intermediários regionais

> *"Isso aí já é coisa de louco. Com esses dados, as possibilidades são infinitas."*  
> — Tico, Cliente Âncora

---

## 📄 Licença

Este projeto é proprietário e confidencial. Todos os direitos reservados.

---

## 👥 Contato

- **GitHub**: [@pdro-dev](https://github.com/pdro-dev)
- **Email**: pedro.simoes.soares@gmail.com

---

**Desenvolvido com ❤️ para revolucionar o agronegócio brasileiro**

