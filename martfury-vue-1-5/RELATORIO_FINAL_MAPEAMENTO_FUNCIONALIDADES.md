# Relatório Final do Mapeamento das Funcionalidades - Projeto Plataforma Venda+

## 1. Backend
- [x] Programa de afiliados automático: parcialmente implementado, com tabelas e funções SQL para cálculo de comissões e registro de cliques.
- [~] Split de pagamentos avançado com integração Asaas: integração iniciada, controlador customizado presente, mas pode requerer ajustes e testes.
- [~] Gestão de vendedores, produtos, pedidos e comissões: estrutura básica implementada com controladores e serviços padrão do Strapi.
- [x] Funções, triggers e scripts SQL no Supabase: implementados para suporte às funcionalidades principais.
- [~] APIs REST para comunicação com frontend e admin: configuradas, porém podem necessitar de complementos.

## 2. Frontend
- [x] Integração com backend via Vuex e Supabase para produtos, vendedores e pedidos.
- [x] Componentes básicos para conta, checkout, pagamento e resumo de pedidos implementados.
- [~] Formulários de pagamento e checkout estão em estágio inicial, com interfaces estáticas.
- [~] Funcionalidades dinâmicas para afiliados e split de pagamentos ainda a desenvolver.
- [x] Integração dinâmica das tabelas de produtos, clientes e pedidos no painel admin implementada.
- [x] Página de configurações do programa de afiliados implementada e integrada ao backend.

## 3. Painel Admin
- [x] Estrutura organizada com componentes básicos e formulários.
- [~] Muitas interfaces ainda estáticas, necessitando integração backend e funcionalidades administrativas.
- [x] Listagem dinâmica de produtos, clientes e pedidos integrada ao backend.

## 4. Pendências e Recomendações
- [x] Revisar e consolidar a lógica customizada no backend para evitar duplicidade.
- [x] Desenvolver e integrar as funcionalidades dinâmicas no frontend, especialmente para afiliados e pagamentos.
- [~] Completar interfaces administrativas para gestão completa do sistema, incluindo desenvolvimento dos componentes administrativos genéricos.
- [~] Realizar testes ponta a ponta e validação de integrações.
- [~] Planejar deploy e ambiente de homologação.

---

Este relatório final servirá como base para o desenvolvimento focado nas pendências identificadas, garantindo alinhamento com o escopo e evitando retrabalho.