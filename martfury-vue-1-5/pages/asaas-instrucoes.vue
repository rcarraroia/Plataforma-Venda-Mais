<template>
  <div class="instructions-container">
    <h1>Como Criar sua Conta no Asaas</h1>
    <p>Para poder receber os pagamentos de suas vendas ou comissões, você precisa ter uma conta ativa no Asaas.</p>
    <h2>Passo a Passo:</h2>
    <ol>
      <li>Clique no botão abaixo para acessar o site oficial do Asaas.</li>
      <li>Faça o cadastro da sua conta gratuitamente.</li>
      <li>Após criar sua conta, copie suas credenciais (API Key e Wallet ID) e informe no painel da plataforma.</li>
      <li>Importante: Se você já tiver uma conta no Asaas, apenas recupere suas credenciais no painel deles.</li>
    </ol>
    <a href="https://www.asaas.com" target="_blank" class="btn">🔗 Criar Conta no Asaas</a>
  </div>
</template>

<script>
export default {
  name: 'AsaasInstrucoes',
};
</script>

<style scoped>
.instructions-container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
}
.btn {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 4px;
}
.btn:hover {
  background-color: #0056b3;
}
</style>