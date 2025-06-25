-- Criação das tabelas principais para o projeto Marketplace Multi Seller com Afiliados e Split de Pagamento

CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text,
  email text UNIQUE,
  role text CHECK (role IN ('admin', 'seller', 'customer', 'affiliate')) DEFAULT 'customer'
);

CREATE TABLE sellers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id),
  store_name text,
  affiliate_commission numeric
);

CREATE TABLE products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  seller_id uuid REFERENCES sellers(id),
  name text,
  description text,
  price numeric
);

CREATE TABLE orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id uuid REFERENCES users(id),
  seller_id uuid REFERENCES sellers(id),
  total numeric,
  status text
);

CREATE TABLE order_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id uuid REFERENCES orders(id),
  product_id uuid REFERENCES products(id),
  quantity int,
  price numeric
);

CREATE TABLE commissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id uuid REFERENCES orders(id),
  affiliate_id uuid REFERENCES users(id),
  platform_fee numeric,
  developer_fee numeric,
  seller_fee numeric
);

CREATE TABLE affiliate_clicks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  affiliate_id uuid REFERENCES users(id),
  clicked_at timestamp DEFAULT now(),
  url text
);

CREATE TABLE withdrawal_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id),
  amount numeric,
  status text,
  requested_at timestamp DEFAULT now()
);

-- Fim do script de criação das tabelas