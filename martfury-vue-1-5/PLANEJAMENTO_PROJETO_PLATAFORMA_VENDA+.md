# Planejamento Amplo do Projeto Plataforma Venda+

## 1. Preparação do Ambiente
- Configuração dos repositórios GitHub para frontend, backend e admin.
- Configuração das variáveis de ambiente para Supabase, Asaas e gateways de pagamento.
- Instalação das dependências e configuração inicial dos projetos.

## 2. Desenvolvimento Backend
- Implementação da lógica customizada nos controladores e serviços Strapi para:
  - Programa de afiliados automático.
  - Split de pagamentos avançado com integração Asaas.
  - Gestão de vendedores, produtos, pedidos e comissões.
  - Webhooks Asaas com Identificação Multi-Loja via Slug:
    - Endpoint público dos Webhooks do Asaas no padrão dinâmico: `https://seudominio.com.br/{storeSlug}/api/webhooks/asaas`
    - `{storeSlug}` corresponde ao slug único da loja (seller), registrado no Supabase.
    - Validação da assinatura (x-signature) baseada na API Key armazenada de cada seller.
    - Identificação e roteamento do evento com base no slug.
    - Registro dos eventos na tabela `asaas_webhook_logs`.
  - Retenção de Comissão e Saldo Bloqueado (Affiliate Holding System):
    - Edge Function que varre comissões pendentes diariamente.
    - Compara `release_date` com a data atual.
    - Altera status de Pending para Released, atualizando saldo disponível do afiliado.
    - Tabela envolvida: `affiliate_commissions_pending` com campos `affiliate_id`, `amount`, `sale_id`, `sale_date`, `release_date`, `status`, `cancel_reason`.
- Implementação de funções, triggers e scripts SQL no Supabase para suporte às funcionalidades.
- Desenvolvimento de APIs REST para comunicação com frontend e admin.

## 3. Desenvolvimento Frontend
- Integração do frontend Nuxt.js com backend via Vuex e Supabase.
- Implementação das interfaces para:
  - Cadastro, login e gerenciamento de usuários e afiliados.
  - Visualização e gestão de produtos, carrinho, pedidos e pagamentos.
  - Exibição de relatórios e histórico de comissões.
- Desenvolvimento das páginas de checkout, pagamento e resumo de pedidos com lógica de split.

## 4. Desenvolvimento Painel Admin
- Implementação das interfaces administrativas para:
  - Gestão de vendedores, produtos, pedidos e comissões.
  - Configuração do programa de afiliados e percentuais de split.
  - Monitoramento de vendas, comissões e pagamentos.
- Integração com backend para operações administrativas.

## 5. Testes e Validação
- Testes unitários e de integração para backend e frontend.
- Testes ponta a ponta dos fluxos de compra, pagamento e comissões.
- Validação da integração com gateways de pagamento e Supabase.

## 6. Deploy e Homologação
- Configuração do deploy contínuo no Vercel para frontend e admin.
- Configuração do backend em ambiente Supabase ou servidor dedicado.
- Preparação do ambiente de homologação para testes reais.
- Monitoramento e ajustes pós-deploy.

## 7. Documentação e Treinamento
- Documentação técnica detalhada do sistema e APIs.
- Guias de uso para usuários finais e administradores.
- Treinamento da equipe de suporte e desenvolvimento.

---

Este planejamento estruturado garante uma abordagem organizada, modular e escalável para o desenvolvimento e implantação do projeto Plataforma Venda+, alinhado com a análise detalhada realizada e as tecnologias escolhidas.
