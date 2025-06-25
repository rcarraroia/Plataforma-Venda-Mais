# Documento Técnico para Recomeço do Projeto Plataforma Venda+

## Objetivo
Este documento visa orientar a criação de um novo workspace para o projeto Plataforma Venda+, baseado no template Martfury Vue.js, garantindo uma implementação limpa, organizada e correta das funcionalidades essenciais, incluindo programa de afiliados, split de pagamentos com Asaas e integração com Supabase.

---

## Estrutura do Projeto

O projeto é composto por três partes principais:

1. **Frontend Principal (martfury-vue-1-5)**
   - Aplicação Nuxt.js baseada no template Martfury.
   - Responsável pela interface do marketplace multi fornecedores.
   - Integração com Supabase para autenticação e dados.
   - Gerenciamento de estado via Vuex.
   - Componentes Vue organizados em `components/` e páginas em `pages/`.

2. **Admin (martfury-admin-vue-template)**
   - Aplicação Nuxt.js para painel administrativo.
   - Gerenciamento de vendedores, produtos, pedidos e configurações.
   - Comunicação via API com backend.

3. **Backend (martfury-api-for-client-3.1.x)**
   - Aplicação Strapi 3.x para gerenciamento de conteúdo e API.
   - Banco de dados SQLite (pode ser migrado para PostgreSQL/Supabase).
   - Plugins para email, GraphQL, upload, permissões, etc.

---

## Passos para Recomeço Limpo

### 1. Criar Novo Workspace

- Criar um novo diretório para o projeto.
- Inicializar repositório Git limpo.
- Clonar os templates base para frontend, admin e backend em pastas separadas.

### 2. Configurar Variáveis de Ambiente

- Criar arquivos `.env` para cada parte com as variáveis necessárias:
  - Supabase URL e Anon Key.
  - Chaves e IDs do Asaas para split de pagamentos.
  - Configurações específicas do Strapi.

### 3. Instalar Dependências

- Executar `yarn install` ou `npm install` em cada parte.
- Garantir que as versões das dependências estejam atualizadas e compatíveis.
- Remover dependências obsoletas como `fibers` se possível, ou garantir ambiente de build adequado.

### 4. Implementar Funcionalidades Faltantes

- Revisar e implementar o programa de afiliados:
  - Tabelas e funções no banco.
  - Interfaces no frontend e admin.
- Configurar split de pagamentos com Asaas:
  - Integração via API.
  - Campos e lógica no admin e backend.
- Garantir integração completa com Supabase:
  - Autenticação.
  - Realtime e storage.
  - Segurança e regras de acesso.

### 5. Testes Locais

- Rodar backend Strapi localmente.
- Rodar frontend e admin localmente com `yarn dev`.
- Testar fluxos de cadastro, login, vendas, comissões e pagamentos.

### 6. Deploy

- Configurar deploys separados para frontend e admin no Vercel.
- Configurar backend em ambiente adequado (Supabase, VPS, etc).
- Garantir variáveis de ambiente corretas no ambiente de produção.
- Testar o sistema completo em produção.

---

## Boas Práticas

- Manter código modular e organizado.
- Usar `.gitignore` para evitar commit de arquivos desnecessários.
- Documentar alterações e configurações.
- Usar controle de versão para todas as partes.
- Monitorar logs e erros em produção.

---

## Conclusão

Seguindo este documento, o projeto Plataforma Venda+ poderá ser reiniciado de forma limpa, com as implementações essenciais feitas corretamente, garantindo estabilidade, escalabilidade e facilidade de manutenção.

---

## Contato

Para dúvidas ou suporte, contatar a equipe de desenvolvimento.