# JG Motors — SPA Profissional

Este repositório contém uma Single Page Application (SPA) moderna desenvolvida com Angular 19 — um site profissional, responsivo e preparado para crescer.

Principais características:

- Layout moderno com Header, Hero, Features, Galeria e Contato (componentes standalone).
- Projeto organizado com SCSS, componentes separados e rotas (SPA com navegação rápida).
- Começo ideal para transformar em um site corporativo profissional (PWA, CI/CD, hosting, etc.).

## Sobre o negócio (JG Motors — Empréstimo de motos)

A JG Motors oferece empréstimo de motos (aluguel) com foco em mobilidade rápida e descomplicada:

- Empréstimo de motos para clientes que precisam de mobilidade sem comprar
- Planos flexíveis (semanal, mensal)
- Opções para entregadores / profissionais que usam a moto para trabalhar
- Aluguéis para lazer e viagens curtas
- Entrega e retirada no endereço do cliente
- Seguro incluso (manutenção preventiva disponível no plano mensal)

## Como rodar (desenvolvimento)

1. Instale as dependências (Node.js 18+ recomendado):

```powershell
npm install
```

2. Inicie o servidor de desenvolvimento (aberto no navegador):

```powershell
npm run dev
```

O projeto abre em http://localhost:4200/ por padrão.

## Construir (produção)

```powershell
npm run build:prod
```

Os artefatos são gerados em `dist/jg-motors`.

## Testes

```powershell
npm test
```

## Próximos passos / ideias para transformar em um site "top"

- Adicionar integração com backend (API REST ou GraphQL) para envio de formulários e agendamento.
- Integração de formulário com backend para agendamento e reserva (API REST + banco de dados).
- Autenticação de clientes e área privada para agendamentos/histórico.
- Otimizações de performance (imagem lazy, cache, critical CSS) e testes E2E.
- Pipeline CI (GitHub Actions) para build & preview automático, e hospedagem (Vercel / Netlify / Azure Static Web Apps).

Se quiser, eu posso: adicionar um CI (GitHub Actions) + um deploy target, transformar o formulário em funcional (com backend) e preparar um design final com conteúdo real.
