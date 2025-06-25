-- Função para calcular e registrar comissões após inserção de pedido

CREATE OR REPLACE FUNCTION calculate_commissions()
RETURNS TRIGGER AS $$
DECLARE
  affiliate_fee numeric;
  platform_fee numeric;
  developer_fee numeric;
  seller_fee numeric;
BEGIN
  -- Exemplo de cálculo fixo, ajustar conforme regras do negócio
  platform_fee := NEW.total * 0.05; -- 5% para plataforma
  developer_fee := NEW.total * 0.02; -- 2% para desenvolvedor
  affiliate_fee := NEW.total * 0.10; -- 10% para afiliado (exemplo)
  seller_fee := NEW.total - (platform_fee + developer_fee + affiliate_fee);

  INSERT INTO commissions(order_id, affiliate_id, platform_fee, developer_fee, seller_fee)
  VALUES (NEW.id, NEW.customer_id, platform_fee, developer_fee, seller_fee);

  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger para chamar a função após inserção na tabela orders

CREATE TRIGGER trg_calculate_commissions
AFTER INSERT ON orders
FOR EACH ROW
EXECUTE FUNCTION calculate_commissions();

-- Função para registrar cliques de afiliados

CREATE OR REPLACE FUNCTION log_affiliate_click()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO affiliate_clicks(affiliate_id, clicked_at, url)
  VALUES (NEW.affiliate_id, now(), NEW.url);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Exemplo de trigger para registrar cliques (ajustar conforme implementação)

-- CREATE TRIGGER trg_log_affiliate_click
-- AFTER INSERT ON affiliate_clicks_table
-- FOR EACH ROW
-- EXECUTE FUNCTION log_affiliate_click();

-- Fim do script de funções e triggers